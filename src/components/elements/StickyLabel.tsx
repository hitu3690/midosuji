import { FunctionComponent } from "react";
import styles from "./StickyLabel.module.scss";
import classNames from "classnames";

interface Props {
  label: string;
  isTopRanking: boolean;
}

const StickyLabel: FunctionComponent<Props> = ({ label, isTopRanking }) => {
  return (
    <span
      className={classNames(
        styles.stickyLabel,
        isTopRanking ? styles.isTopRanking : ""
      )}
    >
      {label}
    </span>
  );
};

export default StickyLabel;
