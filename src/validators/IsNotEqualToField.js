// Options
import options from "../options";

// Validator
import Validator from "validator";

class IsNotEqualToField {

    constructor (config = {}) {
        this.fieldLeft = null;
        this.fieldRight = null;
        this.messages = {
            isNotEqualToField: options.messages.isNotEqualToField,
        };

        if (config instanceof Object) {
            if (config.hasOwnProperty('field')) {
                this.fieldRight = config.field;
            }
            if (config.hasOwnProperty('fieldLeft')) {
                this.fieldLeft = config.fieldLeft;
            }
            if (config.hasOwnProperty('fieldRight')) {
                this.fieldRight = config.fieldRight;
            }
            if (config.hasOwnProperty('messages')) {
                if (config.messages.hasOwnProperty('isNotEqualToField')) {
                    this.messages.isNotEqualToField = config.messages.isNotEqualToField;
                }
            }
        }
    }

    validate (value, values) {
        let valueLeft = value;
        if (this.fieldLeft) {
            valueLeft = values.get(this.fieldLeft);
        }

        let valueRight = null;
        if (this.fieldRight) {
            valueRight = values.get(this.fieldRight);
        }

        if (Validator.isEmpty(valueLeft)) {
            return null;
        }

        if (Validator.equals(valueLeft, valueRight)) {
            return this.messages.isNotEqualToField
                .replace(':field', this.fieldRight);
        }

        return null;
    }
}

export default IsNotEqualToField;
