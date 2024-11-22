import { Calculator } from "../src/calculator.js";

describe("Calculator 테스트", () => {
  test("기본 구분자 ','와 ':'로 숫자 합산", () => {
    const result = Calculator.calculate("1,2:3");
    expect(result).toBe(6);
  });

  test("커스텀 구분자 세미콜론 사용", () => {
    const result = Calculator.calculate("//;\\n1;2;3");
    expect(result).toBe(6);
  });

  test("음수 입력 시 에러 발생", () => {
    expect(() => Calculator.calculate("1,-2,3")).toThrow("[ERROR] 음수는 허용되지 않습니다.");
  });

  test("빈 문자열은 0을 반환", () => {
    const result = Calculator.calculate("");
    expect(result).toBe(0);
  });

  test("잘못된 형식의 입력 처리", () => {
    expect(() => Calculator.calculate("1,,3")).toThrow("[ERROR] 입력 형식이 잘못되었습니다.");
  });
});