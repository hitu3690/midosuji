import { FunctionComponent } from "react";
import styles from "@/features/movies/styles/Movies.module.scss";

const MoviesTitle: FunctionComponent = () => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>人気商品ランキング</h1>
    </div>
  );
};

export default MoviesTitle;
