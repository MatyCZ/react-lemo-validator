// Options
import options from "../options";

// Validator
import validator from "validator";

class IsNotEmpty {

    constructor (config = {}) {
        this.messages = {
            isNotEmpty: options.messages.isNotEmpty,
        };

        if (config instanceof Object) {
            if (config.hasOwnProperty('messages')) {
                if (config.messages.hasOwnProperty('isNotEmpty')) {
                    this.messages.isNotEmpty = config.messages.isNotEmpty;
                }
            }
        }
    }

    isValid(value) {
        return (null === this.validate(value));
    }

    validate (value) {
        if (validator.isEmpty(value)) {
            return this.messages.isNotEmpty;
        }

        return null;
    }
}

export default IsNotEmpty;
