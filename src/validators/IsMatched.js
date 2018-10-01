// Config
import {
    getMessage
} from "../config";

// Validator
import validator from "validator";

class IsMatched {

    constructor (config = {}) {
        this.messages = {
            isMatched: getMessage('isMatched'),
        };
        this.modifiers = null;
        this.pattern = null;

        if (config instanceof Object) {
            if (config.hasOwnProperty('messages')) {
                if (config.messages.hasOwnProperty('isMatched')) {
                    this.messages.isMatched = config.messages.isMatched;
                }
            }
            if (config.hasOwnProperty('modifiers')) {
                this.modifiers = config.modifiers;
            }
            if (config.hasOwnProperty('pattern')) {
                this.pattern = config.pattern;
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

        if (!validator.matches(value, this.pattern, this.modifiers || '')) {
            return this.messages.isMatched;
        }

        return null;
    }
}

export default IsMatched;
