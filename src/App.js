import inputView from "./inputView.js";
class App {
  async run() {
    const inputString = await inputView.getInputString();
  }
}

export default App;
