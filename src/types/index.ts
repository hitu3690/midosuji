/**
 * 言語コード
 * @export
 * @enum {string}
 */
export const Language = {
  Ja: "ja-JP",
  En: "en-US",
} as const;
export type Language = (typeof Language)[keyof typeof Language];

/**
 * 言語コード
 * @export
 * @enum {string}
 */
export const OriginalLanguage = {
  Ja: "ja",
  En: "en",
} as const;
export type OriginalLanguage =
  (typeof OriginalLanguage)[keyof typeof OriginalLanguage];

/**
 * 言語コード
 * @export
 * @enum {string}
 */
export const SortBy = {
  PopularDesc: "popularity.desc",
  VoteDesc: "vote_average.desc",
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy];
