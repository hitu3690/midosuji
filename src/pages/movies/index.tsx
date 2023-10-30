import type { NextPage } from "next";
import { TheMovieDatabaseResponse } from "@/apis/tmdb";
import MoviesCardList from "@/features/movies/components/MoviesCardList";
import styles from "@/features/movies/styles/Movies.module.scss";
import MoviesHeader from "@/features/movies/components/MoviesHeader";
import MoviesFooter from "@/features/movies/components/MoviesFooter";
import MoviesGenreBar from "@/features/movies/components/MoviesGenreBar";
import MoviesTitle from "@/features/movies/components/MoviesTitle";
import { usePopularMovies } from "@/apis/tmdb/hooks";

type Props = { movies?: TheMovieDatabaseResponse };

const Movies: NextPage<Props> = () => {
  const { movies } = usePopularMovies();

  if (movies === undefined) return <div>Now Loading...</div>;

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
            <MoviesCardList results={movies.results} />
          </div>
        </div>
      </div>
      <MoviesFooter />
    </div>
  );
};

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const { movies } = usePopularMovies();

//   return {
//     props: {
//       movies,
//     },
//     revalidate: 5,
//   };
// };

export default Movies;
