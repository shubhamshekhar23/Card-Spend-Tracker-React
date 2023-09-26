import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Cards_data } from "@/context/context";
import {
  getTransactionHistoryOfCard,
  getCardsOfUser,
} from "@/services/card-api.service";
import { arrangeHistoryByDate } from "@/services/util.service";

export default function useCardDetails() {
  const { cardsData, setCardsData }: any = useContext(Cards_data);
  const [historyData, setHistoryData]: any = useState({});
  const [card, setCard]: any = useState({});

  const router = useRouter();

  async function fetchData() {
    if (!cardsData[0]) {
      const response = await getCardsOfUser();
      setCardsData(response);
    }
    if (!router.isReady) return;
    const id = router.query.id;
    let item = cardsData.find((item: any) => item.id == id);
    setCard(item);
  }

  useEffect(() => {
    fetchData();
  }, [router.isReady]);

  useEffect(() => {
    async function fetchData() {
      const response = await getTransactionHistoryOfCard(card?.id);
      let mapData = arrangeHistoryByDate(response);
      setHistoryData(mapData);
    }
    if (card?.id) fetchData();
  }, [card]);

  return {
    historyData,
    card,
  };
}