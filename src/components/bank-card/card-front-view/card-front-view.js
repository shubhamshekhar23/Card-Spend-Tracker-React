import styles from "../bank-card.module.scss";
import { CardTitle } from "../card-title/card-title";
import { CardSymbol } from "../card-symbol/card-symbol";
import { CardFooter } from "../card-footer/card-footer";

import PropTypes from "prop-types";

CardFrontView.propTypes = {
  data: PropTypes.object,
  onPointerUp: PropTypes.func,
  onPointerDown: PropTypes.func,
};

export function CardFrontView({ data = {}, onPointerUp, onPointerDown }) {
  return (
    <div className={styles.card_front} onPointerDown={onPointerDown}>
      <CardTitle data={data}></CardTitle>
      <CardSymbol></CardSymbol>
      <div className={styles.card_number}>{data?.info?.number}</div>
      <CardFooter data={data}></CardFooter>
    </div>
  );
}
