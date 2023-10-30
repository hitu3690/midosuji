import { FunctionComponent } from "react";
import styles from "@/features/movies/styles/Movies.module.scss";
import { TheMovieDatabaseResult } from "@/apis/tmdb";
import MoviesCard from "./MoviesCard";

type Props = {
  results: Array<TheMovieDatabaseResult>;
};

const MoviesCardList: FunctionComponent<Props> = ({ results }) => {
  return (
    <div className={styles.cardList}>
      {results.map(
        (
          { title, overview, poster_path, release_date, vote_average },
          index
        ) => (
          <MoviesCard
            title={title}
            overview={overview}
            posterPath={poster_path}
            releaseDate={release_date}
            voteAverage={vote_average}
            index={index + 1}
            key={index + 1}
          />
        )
      )}
    </div>
  );
};

export default MoviesCardList;
