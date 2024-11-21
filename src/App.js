import inputView from "./inputView.js";
import validate from "./validate.js";
class App {
  async run() {
    const inputString = await inputView.getInputString();
    inputString = validate.inputValidate(inputString);
  }
}

export default App;
