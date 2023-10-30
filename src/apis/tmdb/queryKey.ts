export const TmdbKeys = {
  PopularMovies: ["usePopularMovies"],
} as const;
export type TmdbKeys = (typeof TmdbKeys)[keyof typeof TmdbKeys];
