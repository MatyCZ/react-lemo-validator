// Config
import {
    getMessage
} from "../config";

// Validator
import validator from "validator";

class IsEmail {

    constructor (config = {}) {
        this.messages = {
            isEmail: getMessage('isEmail'),
        };

        if (config instanceof Object) {
            if (config.hasOwnProperty('messages')) {
                if (config.messages.hasOwnProperty('isEmail')) {
                    this.messages.isEmail = config.messages.isEmail;
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

        if (!validator.isEmail(value)) {
            return this.messages.isEmail;
        }

        return null;
    }
}

export default IsEmail;
