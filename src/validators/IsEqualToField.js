// Config
import { getMessage } from "../config";

// Validator
import Validator from "validator";

class IsEqualToField {
  constructor(config = {}) {
    this.fieldLeft = null;
    this.fieldRight = null;
    this.messages = {
      isEqualToField: getMessage("isEqualToField")
    };

    if (config instanceof Object) {
      if (config.hasOwnProperty("field")) {
        this.fieldRight = config.field;
      }
      if (config.hasOwnProperty("fieldLeft")) {
        this.fieldLeft = config.fieldLeft;
      }
      if (config.hasOwnProperty("fieldRight")) {
        this.fieldRight = config.fieldRight;
      }
      if (config.hasOwnProperty("messages")) {
        if (config.messages.hasOwnProperty("isEqualToField")) {
          this.messages.isEqualToField = config.messages.isEqualToField;
        }
      }
    }
  }

  isValid(value, values) {
    return null === this.validate(value, values);
  }

  validate(value, values) {
    let valueLeft = value;
    if (this.fieldLeft) {
      valueLeft = values.get(this.fieldLeft);
    }

    let valueRight = null;
    if (this.fieldRight) {
      valueRight = values.get(this.fieldRight);
    }

    if (Validator.isEmpty(valueLeft)) {
      return null;
    }

    if (!Validator.equals(valueLeft, valueRight)) {
      return this.messages.isEqualToField.replace(":field", this.fieldRight);
    }

    return null;
  }
}

export default IsEqualToField;
