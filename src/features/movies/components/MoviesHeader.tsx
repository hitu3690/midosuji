import { FunctionComponent } from "react";
import styles from "@/features/movies/styles/Movies.module.scss";

const MoviesHeader: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_1}></div>
      <div className={styles.header_2}></div>
      <div className={styles.header_3}></div>
    </header>
  );
};

export default MoviesHeader;
