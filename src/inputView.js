import { Console } from "@woowacourse/mission-utils";

const inputView = {
    async getInputString(){
        let inputString = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
        return inputString;
    }
}
export default inputView;