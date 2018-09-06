// Options
import options from "../options";

// Validator
import validator from "validator";

class IsLength {

    constructor (config = {}) {
        this.max = null;
        this.messages = {
            isLength: options.messages.isLength,
            isLengthBetween: options.messages.isLengthBetween,
            isLengthLong: options.messages.isLengthLong,
            isLengthShort: options.messages.isLengthShort,
        };
        this.min = null;

        if (config instanceof Object) {
            if (config.hasOwnProperty('max')) {
                this.max = config.max;
            }
            if (config.hasOwnProperty('messages')) {
                if (config.messages.hasOwnProperty('isLength')) {
                    this.messages.isLength = config.messages.isLength;
                }
                if (config.messages.hasOwnProperty('isLengthBetween')) {
                    this.messages.isLengthBetween = config.messages.isLengthBetween;
                }
                if (config.messages.hasOwnProperty('isLengthShort')) {
                    this.messages.isLengthShort = config.messages.isLengthShort;
                }
                if (config.messages.hasOwnProperty('isLengthLong')) {
                    this.messages.isLengthLong = config.messages.isLengthLong;
                }
            }
            if (config.hasOwnProperty('min')) {
                this.min = config.min;
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

        // Equal or Between
        if (
            null !== this.max
            && null !== this.min
            && !validator.isLength(value, { min: this.min, max: this.max })
        ) {
            if (!validator.isLength(value, { min: this.min, max: this.max })) {
                if (this.max === this.min) {
                    return this.messages.isLength
                        .replace(':max', this.max)
                        .replace(':min', this.min);
                } else {
                    return this.messages.isLengthBetween
                        .replace(':max', this.max)
                        .replace(':min', this.min);
                }
            }
        }

        // Max
        if (
            null !== this.max
            && !validator.isLength(value, {max: this.max})
        ) {
            return this.messages.isLengthLong.replace(':max', this.max)
        }

        // Min
        if (
            null !== this.min
            && !validator.isLength(value, {min: this.min})
        ) {
            return this.messages.isLengthShort.replace(':min', this.min)
        }

        return null;
    }
}

export default IsLength;
