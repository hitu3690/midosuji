import { FunctionComponent } from "react";
import styles from "@/features/movies/styles/Movies.module.scss";
import StickyLabel from "@/components/elements/StickyLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fasStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

interface Props {
  title: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
  index: number;
}

const MoviesCard: FunctionComponent<Props> = ({
  title,
  overview,
  posterPath,
  releaseDate,
  index,
}) => {
  return (
    <div className={styles.card}>
      <a className={styles.cardContainer}>
        <div className={styles.imageArea}>
          <StickyLabel
            label={index.toString()}
            // 先頭 1位 ~ 3位まで
            isTopRanking={1 <= index && index < 4}
          />
          <img
            className={styles.cardImage}
            src={`${process.env.NEXT_PUBLIC_TMDB_ORIGINAL_POSTER_IMAGE_URL}/${posterPath}`}
            alt=""
          />
        </div>
        <div className={styles.titleArea}>
          <span className={styles.cardTitle}>{title}</span>
        </div>
        <span className={styles.cardOverview}>{overview}</span>
        <div className={styles.cardRatingArea}>
          <div className={styles.cardRatingContainer}>
            <div className={styles.cardRating}>
              <FontAwesomeIcon icon={fasStar} fixedWidth />
            </div>
            <div className={styles.cardRating}>
              <FontAwesomeIcon icon={fasStar} fixedWidth />
            </div>
            <div className={styles.cardRating}>
              <FontAwesomeIcon icon={fasStar} fixedWidth />
            </div>
            <div className={styles.cardRating}>
              <FontAwesomeIcon icon={faStarHalfStroke} fixedWidth />
            </div>
            <div className={styles.cardRating}>
              <FontAwesomeIcon icon={farStar} fixedWidth />
            </div>
          </div>
        </div>
        <div className={styles.releaseArea}>
          <div className={styles.cardReleaseDate}>{releaseDate}</div>
          <div className={styles.cardIsRelease}>
            <span>公開中</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MoviesCard;
