import { formattedAmount } from "@/services/util.service.ts";
import TextButton from "@/ui/text-button/text-button";

import styles from "../catalogue.module.scss";
import CatalogueTypeButton from "../catalogue-type-button/catalogue-type-button";
import DebtPayButton from "../../debt-pay-button/debt-pay-button";

type CatalogueItemPropTypes = {
  data: any;
};

export default function CatalogueItem({ data = {} }: CatalogueItemPropTypes) {
  return (
    <div className={styles.transaction_section}>
      <CatalogueTypeButton type={data.type} />
      <div className={styles.details_amount}>
        <div className={styles.transaction__description}>
          <h3>{data.title}</h3>
          <h4>The debt is {formattedAmount(data.amount)}</h4>
        </div>
        <DebtPayButton />
      </div>
    </div>
  );
}
