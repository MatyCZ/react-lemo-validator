// Config
import {
    getMessage
} from "../config";

// Validator
import validator from "validator";

class IsInt {

    constructor (config = {}) {
        this.messages = {
            isInt: getMessage('isInt'),
        };

        if (config instanceof Object) {
            if (config.hasOwnProperty('messages')) {
                if (config.messages.hasOwnProperty('isInt')) {
                    this.messages.isInt = config.messages.isInt;
                }
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

        if (!validator.isInt(value)) {
            return this.messages.isInt;
        }

        return null;
    }
}

export default IsInt;
