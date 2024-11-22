import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "./constants.js";

export const InputView = {
  async getInput() {
    return new Promise((resolve, reject) => {
      Console.readLine("덧셈할 문자열을 입력해 주세요.\n", (input) => {
        if (!input.trim()) {
          // 양쪽 끝에 있는 공백(스페이스, 탭, 개행 등)을 제거
          // 빈 문자열, null, undefined, 숫자0, NaN, false와 같은 값을 falsy로 처리 후
          // ! 연산자 이용하여 if 문 수행
          reject(new Error(ERROR_MESSAGES.EMPTY_INPUT));
        }
        resolve(input);
      });
    });
  },
};

export default InputView;
