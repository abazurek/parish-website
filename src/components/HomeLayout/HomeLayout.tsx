import React, { FC } from "react";
import { cardsDescription } from "../../utils/cardsDescription";
import { InfoCard } from "../InfoCard/InfoCard";
import styled from "styled-components";
import { Helmet } from "react-helmet";

export const HomeLayout: FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Parafia Świętego Michala Archanioła w Blachowni Aktualności
        </title>
        <meta
          name="description"
          content="Parafia Świętego Michala Archanioła w Blachowni  - aktualności, strona główna"
        />
      </Helmet>
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
  margin-top: 24rem;
  margin-bottom: 2rem;
  > div {
    @media (max-width: 766px) {
      margin-top: 3rem;
    }
  }
  > div:nth-of-type(2n + 1) {
    @media (min-width: 766px) {
      margin-top: 5rem;
    }
  }
`;
