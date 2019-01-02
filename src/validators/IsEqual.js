// Config
import { getMessage } from "../config";

// Validator
import validator from "validator";

class IsEqual {
  constructor(config = {}) {
    this.messages = {
      isEqual: getMessage("isEqual")
    };
    this.value = null;

    if (config instanceof Object) {
      if (config.hasOwnProperty("messages")) {
        if (config.messages.hasOwnProperty("isEqual")) {
          this.messages.isEqual = config.messages.isEqual;
        }
      }
      if (config.hasOwnProperty("value")) {
        this.value = config.value;
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

    if (!validator.equals(value, this.value)) {
      return this.messages.isEqual.replace(":value", this.value);
    }

    return null;
  }
}

export default IsEqual;
