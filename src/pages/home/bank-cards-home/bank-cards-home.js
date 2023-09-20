import styles from "./bank-cards-home.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BankCard from "@/components/bank-card/bank-card";
import { getCardsOfUser } from "@/services/card-api.service";
import SlideNav from "@/components/ui/slide-nav/slide-nav";
import { Cards_data } from "@/context/context";
import { useContext } from "react";

export default function BankCardsHome() {
  const { cardsData, setCardsData } = useContext(Cards_data);
  let [cards, setCards] = useState([]);
  let [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await getCardsOfUser();
      setCards(response);
      setCardsData(response);
    }
    fetchData();
  }, []);

  function getAmount() {
    let amount = 0;
    cards.forEach((item) => {
      amount += item.balance;
    });
    return amount;
  }

  function handleNavClick(itemIndexClicked) {
    let cardData = cards[itemIndexClicked - 1];
    let id = `card-${cardData.id}`;
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
    setActiveCard(itemIndexClicked);
  }

  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Bank Cards</h1>
      <h5>Balance</h5>
      <h2>{getAmount()}</h2>
      <div className={styles.card_container}>
        {cards.map((item) => (
          <BankCard
            key={item.id}
            onClick={() =>
              router.push({
                pathname: "/card-details",
                query: { id: item.id },
              })
            }
            className={styles.bank_card}
            data={item}
            isVertical={true}
          />
        ))}
      </div>
      <SlideNav
        num={cards.length}
        active={activeCard}
        handleNavClick={handleNavClick}
      />
    </main>
  );
}