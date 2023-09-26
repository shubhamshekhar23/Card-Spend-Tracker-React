import styles from "../bank-cards-home.module.scss";
import BankCard from "@/components/bank-card/bank-card";

type BankCardsPropTypes = {
  cards: Array<any>;
  routerPush: (param: any) => void;
};

/* internal compoennts */
export function BankCards({ cards = [], routerPush = (param: any) => {} }) {
  return (
    <div className={styles.card_container}>
      {cards.map((item: any) => (
        <div key={item.id} className={styles.bank_card_item}>
          <BankCard
            onClick={() =>
              routerPush({
                pathname: "/card-details",
                query: {
                  id: item.id,
                },
              })
            }
            className={styles.bank_card}
            data={item}
            isVertical={true}
          />
        </div>
      ))}
    </div>
  );
}