import apis from "@/apis";
import { TMDBPath, Language, SortBy } from "@/types";
import { useQuery } from "react-query";
import { TmdbKeys } from "./queryKey";

export const usePopularMovies = () => {
  const { data: movies } = useQuery({
    queryKey: TmdbKeys.PopularMovies,
    queryFn: () =>
      // Popular Moviesを取得
      apis.tmdb.getTMDBMovies(TMDBPath.PopularMovie, {
        language: Language.Ja,
        sort_by: SortBy.PopularDesc,
      }),
  });

  return { movies };
};
