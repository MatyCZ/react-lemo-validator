// Config
import { getLocale, getMessage } from "../config";

// Validator
import validator from "validator";

class IsAlphanumeric {
  constructor(config = {}) {
    this.locale = getLocale();
    this.messages = {
      isAlphanumeric: getMessage("isAlphanumeric")
    };

    if (config instanceof Object) {
      if (config.hasOwnProperty("locale")) {
        this.locale = config.locale;
      }
      if (config.hasOwnProperty("messages")) {
        if (config.messages.hasOwnProperty("isAlphanumeric")) {
          this.messages.isAlphanumeric = config.messages.isAlphanumeric;
        }
      }
    }
  }

  isValid(value) {
    return null === this.validate(value);
  }

  validate(value) {
    if (validator.isEmpty(value)) {
      return null;
    }

    if (!validator.isAlphanumeric(value, this.locale)) {
      return this.messages.isAlphanumeric;
    }

    return null;
  }
}

export default IsAlphanumeric;
