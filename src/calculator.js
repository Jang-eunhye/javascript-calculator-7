import { DEFAULT_DELIMITERS, CUSTOM_DELIMITER_REGEX } from "./constants.js";
import { Validator } from "./validator.js";
import { Console } from "@woowacourse/mission-utils";
export const Calculator = {
  parseInput(input) {
    if (!input) return [];
    return this._splitNumbers(input);
  },

  sum(numbers) {
    return numbers.map(Number).reduce((acc, num) => acc + num, 0);
  },

  async calculate(input) {
    const numbers = this.parseInput(input);
    const validateTest = await Validator.validate(input, numbers); // Validator 호출
    if (validateTest) {
      return this.sum(numbers);
    }else {
      return 0;
    }
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
