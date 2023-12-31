import { UilCar, UilMusicNote, UilShare } from "@iconscout/react-unicons";

import { TRANSACTION_TYPE } from "@/constants/entity.constants";
import RoundPill from "@/ui/round-pill/round-pill";

type TransactionTypeButtonPropTypes = {
  type: number;
};

export default function TransactionTypeButton({
  type = 1,
}: TransactionTypeButtonPropTypes) {
  const btnMap: { [key: number]: any } = {
    [TRANSACTION_TYPE.card2card]: <UilShare color="white" />,
    [TRANSACTION_TYPE.music]: <UilMusicNote color="white" />,
    [TRANSACTION_TYPE.vehicle]: <UilCar color="white" />,
  };
  const btnColor: { [key: number]: any } = {
    [TRANSACTION_TYPE.card2card]: "pink",
    [TRANSACTION_TYPE.music]: "yellow",
    [TRANSACTION_TYPE.vehicle]: "blue",
  };
  return <RoundPill color={btnColor[type]}>{btnMap[type]}</RoundPill>;
}
