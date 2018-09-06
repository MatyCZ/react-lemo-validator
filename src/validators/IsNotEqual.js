// Constants
import options from "../options";

// Validator
import validator from "validator";

class IsNotEqual {

    constructor (config = {}) {
        this.messages = {
            isNotEqual: options.messages.isNotEqual,
        };
        this.value = null;

        if (config instanceof Object) {
            if (config.hasOwnProperty('messages')) {
                if (config.messages.hasOwnProperty('isNotEqual')) {
                    this.messages.isNotEqual = config.messages.isNotEqual;
                }
            }
            if (config.hasOwnProperty('value')) {
                this.value = config.value;
            }
        }
    }

    isValid(value) {
        return (null === this.validate(value));
    }

    validate (value) {
        if (validator.isEmpty(value)) {
            return null;
        }

        if (validator.equals(value, this.value)) {
            return this.messages.isNotEqual.replace(':value', this.value);
        }

        return null;
    }
}

export default IsNotEqual;
