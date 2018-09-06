// Options
import options from "../options";

// Validator
import validator from "validator";

class IsIdentificationNumber {

    constructor (config = {}) {
        this.messages = {
            isIdentificationNumber: options.messages.isIdentificationNumber,
        };

        if (config instanceof Object) {
            if (config.hasOwnProperty('messages')) {
                if (config.messages.hasOwnProperty('isIdentificationNumber')) {
                    this.messages.isIdentificationNumber = config.messages.isIdentificationNumber;
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

        if (value.length < 6 || isNaN(value)) {
            return this.messages.isIdentificationNumber;
        }

        var pad = "00000000";
        var a = 0;
        var c = null;

        // Doplneni nul na zacatek
        value = pad.substring(0, pad.length - value.length) + value;

        for (var i = 0; i < 7; i++) {
            a += Number(value[i]) * (8 - i);
        }
        a = a % 11;

        if (a === 0) {
            c = 1;
        } else if (a === 10)  {
            c = 1;
        } else if (a === 1) {
            c = 0;
        } else {
            c = 11 - a;
        }

        if (Number(value[7]) !== c) {
            return this.messages.isIdentificationNumber;
        }

        return null;
    }
}

export default IsIdentificationNumber;
