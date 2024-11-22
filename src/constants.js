export const DEFAULT_DELIMITERS = [",", ":"];
export const CUSTOM_DELIMITER_REGEX = /^\/\/(.+)\\n/; // => "//"와 "\n" 사이 값을 캡처 그룹으로 지정
export const ERROR_MESSAGES = {
  EMPTY_INPUT: "[ERROR] 입력이 비어 있습니다.",
  INVALID_FORMAT: "[ERROR] 입력 형식이 잘못되었습니다.",
  NEGATIVE_NUMBER: "[ERROR] 음수는 허용되지 않습니다.",
};