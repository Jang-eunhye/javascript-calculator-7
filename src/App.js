import { InputView } from "./inputView.js";
import { OutputView } from "./outputView.js";
import { Calculator } from "./calculator.js";
class App {
  async run() {
      const input = await InputView.getInput();  // 사용자 입력 받기
      const result = await Calculator.calculate(input);  // 계산하기
      OutputView.printResult(result);  // 결과 출력
  }
}


export default App;
