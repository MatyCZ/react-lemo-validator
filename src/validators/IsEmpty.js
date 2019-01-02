// Config
import { getMessage } from "../config";

// Validator
import validator from "validator";

class IsEmpty {
  constructor(config = {}) {
    this.messages = {
      isEmpty: getMessage("isEmpty")
    };

    if (config instanceof Object) {
      if (config.hasOwnProperty("messages")) {
        if (config.messages.hasOwnProperty("isEmpty")) {
          this.messages.isEmpty = config.messages.isEmpty;
        }
      }
    }
  }

  isValid(value) {
    return null === this.validate(value);
  }

  validate(value) {
    if (!validator.isEmpty(value)) {
      return this.messages.isEmpty;
    }

    return null;
  }
}

export default IsEmpty;
