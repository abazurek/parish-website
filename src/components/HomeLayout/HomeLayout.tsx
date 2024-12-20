import React, { FC } from "react";
import { cardsDescription } from "../../utils/cardsDescription";
import { InfoCard } from "../InfoCard/InfoCard";
import styled from "styled-components";

export const HomeLayout: FC = () => {
  return (
    <>
      <CardsWrapper>
        {cardsDescription.map((card) => (
          <InfoCard
            key={cardsDescription.indexOf(card)}
            title={card.title}
            addInfo={card.addInfo}
            icon={card.icon}
          />
        ))}
      </CardsWrapper>
    </>
  );
};
const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 7rem;
  margin-bottom: 3rem;
  > div:nth-of-type(2n + 1) {
    @media (min-width: 600px) {
      margin-top: 5rem;
    }
  }
`;
