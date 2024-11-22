import { DEFAULT_DELIMITERS, CUSTOM_DELIMITER_REGEX } from "./constants.js";
import { Validator } from "./validator.js";

export const Calculator = {
  parseInput(input) {
    if (!input) return [];
    return this._splitNumbers(input);
  },

  sum(numbers) {
    return numbers.map(Number).reduce((acc, num) => acc + num, 0);
  },

  calculate(input) {
    const numbers = this.parseInput(input);
    Validator.validate(input, numbers); // Validator 호출
    return this.sum(numbers);
  },

  _splitNumbers(input) {
    const customDelimiterMatch = input.match(CUSTOM_DELIMITER_REGEX);
    const delimiters = [...DEFAULT_DELIMITERS];
    let numbersPart = input;

    if (customDelimiterMatch) {
      delimiters.push(customDelimiterMatch[1]);
      numbersPart = input.split("\\n")[1];
    }

    return numbersPart.split(new RegExp(`[${delimiters.join("")}]`));
  },
};

export default Calculator;