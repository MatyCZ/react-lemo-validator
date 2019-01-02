// Config
import { getLocale, getMessage } from "../config";

// Validator
import validator from "validator";

class IsPostalCode {
  constructor(config = {}) {
    this.locale = getLocale().substr(3, 2);
    this.messages = {
      isPostalCode: getMessage("isPostalCode")
    };

    if (config instanceof Object) {
      if (config.hasOwnProperty("locale")) {
        this.locale = config.locale;
      }
      if (config.hasOwnProperty("messages")) {
        if (config.messages.hasOwnProperty("isPostalCode")) {
          this.messages.isPostalCode = config.messages.isPostalCode;
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

    if (!validator.isPostalCode(value, this.locale)) {
      return this.messages.isPostalCode;
    }

    return null;
  }
}

export default IsPostalCode;
