// Options
import options from "../options";

// Validator
import validator from "validator";

class IsBirthNumber {

    constructor (config = {}) {
        this.messages = {
            isBirthNumber: options.messages.isBirthNumber,
        };

        if (config instanceof Object) {
            if (config.hasOwnProperty('messages')) {
                if (config.messages.hasOwnProperty('isBirthNumber')) {
                    this.messages.isBirthNumber = config.messages.isBirthNumber;
                }
            }
        }
    }

    isValid(value) {
        return (null === this.validate(value));
    }

    validate(value) {
        if (validator.isEmpty(value)) {
            return null;
        }

        if (value.length < 9 || isNaN(value)) {
            return this.messages.isBirthNumber;
        }

        if (/0000$/.test(value) || /9999$/.test(value)) {
            return null;
        }

        var year = Number(value.substr(0, 2)),
            c = 0,
            m;

        if ((value.length === 9) && (year < 54)) {
            return null;
        }

        if (value.length === 10) {
            c = Number(value.substr(9, 1));
        }
        m = Number(value.substr(0, 9)) % 11;

        if (m === 10) {
            m = 0;
        }

        if (m !== c) {
            return this.messages.isBirthNumber;
        }

        return null;
    }
}

export default IsBirthNumber;
