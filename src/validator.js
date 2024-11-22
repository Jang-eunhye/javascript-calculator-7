import { ERROR_MESSAGES } from "./constants.js";

export const Validator = {
  async validate(input, numbers) {
    let validateTest = true;
    validateTest = await this._validateFormat(numbers,validateTest);
    validateTest = await this._validateNegativeNumbers(numbers,validateTest);
    return validateTest;
  },



  async _validateFormat(numbers, validateTest) {
    if (numbers.some((num) => num.trim() === "")) {
      validateTest = false;
      throw new Error(ERROR_MESSAGES.INVALID_FORMAT);
    }
    return validateTest;
  },

  async _validateNegativeNumbers(numbers, validateTest) {
    if (numbers.some((num) => +num < 0)) {
      validateTest = false;
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }
    return validateTest;
  },
};

export default Validator;