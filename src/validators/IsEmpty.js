// Options
import options from "../options";

// Validator
import validator from "validator";

class IsEmpty {

    constructor (config = {}) {
        this.messages = {
            isEmpty: options.messages.isEmpty,
        };


        if (config instanceof Object) {
            if (config.hasOwnProperty('messages')) {
                if (config.messages.hasOwnProperty('isEmpty')) {
                    this.messages.isEmpty = config.messages.isEmpty;
                }
            }
        }
    }

    isValid(value) {
        return (null === this.validate(value));
    }

    validate (value) {
        if (validator.isEmpty(value)) {
            return this.messages.isEmpty;
        }

        return null;
    }
}

export default IsEmpty;
