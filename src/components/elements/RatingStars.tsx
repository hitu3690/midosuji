import { FunctionComponent, useMemo } from "react";
import styles from "./RatingStars.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fasStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

interface Props {
  score: number;
}

/**
 * 点数によって、星のレートの表示を変える
 */
const RatingStars: FunctionComponent<Props> = ({ score }) => {
  const firstStar = useMemo(
    () => (score < 1 ? farStar : score < 2 ? faStarHalfStroke : fasStar),
    [score]
  );
  const secondStar = useMemo(
    () => (score < 3 ? farStar : score < 4 ? faStarHalfStroke : fasStar),
    [score]
  );
  const thirdStar = useMemo(
    () => (score < 5 ? farStar : score < 6 ? faStarHalfStroke : fasStar),
    [score]
  );
  const forthStar = useMemo(
    () => (score < 7 ? farStar : score < 8 ? faStarHalfStroke : fasStar),
    [score]
  );
  const fifthStar = useMemo(
    () => (score < 9 ? farStar : score < 10 ? faStarHalfStroke : fasStar),
    [score]
  );

  return (
    <div className={styles.ratingStarContainer}>
      <div className={styles.ratingStar}>
        <FontAwesomeIcon icon={firstStar} fixedWidth />
      </div>
      <div className={styles.ratingStar}>
        <FontAwesomeIcon icon={secondStar} fixedWidth />
      </div>
      <div className={styles.ratingStar}>
        <FontAwesomeIcon icon={thirdStar} fixedWidth />
      </div>
      <div className={styles.ratingStar}>
        <FontAwesomeIcon icon={forthStar} fixedWidth />
      </div>
      <div className={styles.ratingStar}>
        <FontAwesomeIcon icon={fifthStar} fixedWidth />
      </div>
    </div>
  );
};

export default RatingStars;
