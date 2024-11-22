import { Console } from "@woowacourse/mission-utils";
class separate {
  getseparateString(validateString) {
    const DEFALT_SEPARATOR = [",", ":"];
    let CUSTOM_SEPARATOR = "";
    const CUSTOM_SEPARATOR_SETTING_START = "//";
    const CUSTOM_SEPARATOR_SETTING_END = "\n";

    // 커스텀 구분자 있는 경우
    if (validateString.startsWith(CUSTOM_SEPARATOR_SETTING_START)) {
      const CUSTOM_SEPARATOR_START_INDEX =
        validateString.indexOf(CUSTOM_SEPARATOR_SETTING_START) +
        CUSTOM_SEPARATOR_SETTING_START.length;
      const CUSTOM_SEPARATOR_END_INDEX =
        validateString.indexOf(CUSTOM_SEPARATOR_SETTING_END) - 1;

      CUSTOM_SEPARATOR = validateString.substr(
        // 구분자 지정
        CUSTOM_SEPARATOR_START_INDEX,
        CUSTOM_SEPARATOR_END_INDEX
      );
    }
    const SEPARATOR = DEFALT_SEPARATOR + CUSTOM_SEPARATOR;
    Console.print(CUSTOM_SEPARATOR_START_INDEX);
    Console.print(CUSTOM_SEPARATOR_END_INDEX);
    Console.print(SEPARATOR);
  }

  settingCustomSeparator(){}
}
export default separate;
