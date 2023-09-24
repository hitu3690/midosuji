/**
 * 言語コード
 * @export
 * @enum {string}
 */
export const LanguageCode = {
  Ja: "ja",
  En: "en",
  Ko: "ko",
  ZhCn: "zh-cn",
  ZhTw: "zh-tw",
} as const;
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];
