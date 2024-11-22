import { InputView } from "./inputView.js";
import { OutputView } from "./outputView.js";
import { Calculator } from "./calculator.js";
class App {
  async run() {
    try {
      const input = await InputView.getInput();  // 사용자 입력 받기
      const result = Calculator.calculate(input);  // 계산하기
      OutputView.printResult(result);  // 결과 출력
    } catch (error) {
      OutputView.printError(error.message);  // 에러 메시지 출력
    } finally {
      process.exit(0);  // 애플리케이션 종료
    }
  }
}

export default App;
