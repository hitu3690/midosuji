import { FunctionComponent } from "react";
import styles from "@/features/movies/styles/Movies.module.scss";

const MoviesGenreBar: FunctionComponent = () => {
  return (
    <div className={styles.genreBarContainer}>
      <div className={styles.genreBarContainerContents}></div>
    </div>
  );
};

export default MoviesGenreBar;
