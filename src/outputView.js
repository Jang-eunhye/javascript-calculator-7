import { Console } from "@woowacourse/mission-utils";

export const OutputView = {
  printResult(result) {
    Console.print(`결과 : ${result}`);
  },

  printError(message) {
    Console.print(message);
  },
};

export default OutputView;