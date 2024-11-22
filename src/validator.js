import { ERROR_MESSAGES } from "./constants.js";

export const Validator = {
  validate(input, numbers) {
    this._validateEmptyInput(input);
    this._validateFormat(numbers);
    this._validateNegativeNumbers(numbers);
  },

  _validateEmptyInput(input) {
    if (!input.trim()) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  },

  _validateFormat(numbers) {
    if (numbers.some((num) => num.trim() === "")) {
      throw new Error(ERROR_MESSAGES.INVALID_FORMAT);
    }
  },

  _validateNegativeNumbers(numbers) {
    if (numbers.some((num) => +num < 0)) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }
  },
};

export default Validator;