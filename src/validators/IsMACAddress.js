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

        if (config instanceof Object) {
            if (config.hasOwnProperty('messages')) {
                if (config.messages.hasOwnProperty('isMACAddress')) {
                    this.messages.isMACAddress = config.messages.isMACAddress;
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

        if (!validator.isMACAddress(value)) {
            return this.messages.isMACAddress;
        }

        return null;
    }
}

export default IsMACAddress;
