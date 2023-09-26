import type { GetStaticProps, NextPage } from "next";
import apis from "@/apis";
import { TheMovieDatabaseResponse } from "@/apis/tmdb";
import MoviesCardList from "@/features/movies/components/MoviesCardList";
import styles from "@/features/movies/styles/Movies.module.scss";
import MoviesHeader from "@/features/movies/components/MoviesHeader";
import MoviesFooter from "@/features/movies/components/MoviesFooter";
import MoviesGenreBar from "@/features/movies/components/MoviesGenreBar";
import MoviesTitle from "@/features/movies/components/MoviesTitle";
import { Language, SortBy } from "@/types";

type Props = { movies: TheMovieDatabaseResponse };

const Movies: NextPage<Props> = ({ movies: { results } }) => {
  return (
    <div className={styles.container}>
      <MoviesHeader />
      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.breadcrumb}></div>
          <div className={styles.tab}></div>
          <div className={styles.mainContainerContent}>
            <MoviesTitle />
            <MoviesGenreBar />
            <MoviesCardList results={results} />
          </div>
        </div>
      </div>
      <MoviesFooter />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Popular Moviesを取得
  const response = await apis.tmdb.getTMDBMovies({
    language: Language.Ja,
    sort_by: SortBy.PopularDesc,
  });

  return {
    props: {
      movies: response,
    },
    revalidate: 5,
  };
};

export default Movies;
