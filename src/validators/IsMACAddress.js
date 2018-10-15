// Config
import {
    getMessage
} from "../config";

// Validator
import validator from "validator";

class IsMACAddress {

    constructor (config = {}) {
        this.messages = {
            isMACAddress: getMessage('isMACAddress'),
        };
        this.noColons = false;

        if (config instanceof Object) {
            if (config.hasOwnProperty('messages')) {
                if (config.messages.hasOwnProperty('isMACAddress')) {
                    this.messages.isMACAddress = config.messages.isMACAddress;
                }
            }
            if (config.hasOwnProperty('noColons')) {
                this.noColons = config.noColons;
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

        if (!validator.isMACAddress(value, {'no_colons': this.noColons})) {
            return this.messages.isMACAddress;
        }

        return null;
    }
}

export default IsMACAddress;
