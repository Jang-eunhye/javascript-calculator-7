import { Validator } from "../src/validator.js";

describe("Validator 테스트", () => {
  test("빈 입력은 에러를 발생시킨다", () => {
    expect(() => Validator.validate("", [])).toThrow("[ERROR] 입력이 비어 있습니다.");
  });

  test("구분자가 연속되거나 잘못된 형식은 에러를 발생시킨다", () => {
    const numbers = ["1", "", "3"];
    expect(() => Validator.validate("1,,3", numbers)).toThrow("[ERROR] 입력 형식이 잘못되었습니다.");
  });

  test("음수가 포함된 경우 에러를 발생시킨다", () => {
    const numbers = ["1", "-2", "3"];
    expect(() => Validator.validate("1,-2,3", numbers)).toThrow("[ERROR] 음수는 허용되지 않습니다.");
  });
});