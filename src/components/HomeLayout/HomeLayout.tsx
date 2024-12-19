import React, { FC } from "react";
import { cardsDescription } from "../../utils/cardsDescription";
import { InfoCard } from "../InfoCard/InfoCard";
import styled from "styled-components";

export const HomeLayout: FC = () => {
  return (
    <>
      {/*<TitleWrapper>*/}
      {/*  <Title>aktualności</Title>*/}
      {/*</TitleWrapper>*/}
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

const TitleWrapper = styled.div`
  position: fixed;
  top: 160px;
  right: 0;
  width: 350px;
  background: rgba(57, 64, 57, 1);
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  padding: 0.5rem;
  font-weight: 600;
  color: #e4e7e0;
  text-align: center;
  text-transform: uppercase;
`;
const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 7rem;
  margin-bottom: 3rem;
  > div:nth-of-type(2n + 1) {
    margin-top: 5rem;
  }
`;
