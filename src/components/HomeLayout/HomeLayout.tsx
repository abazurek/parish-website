import React, { FC } from "react";
import { title } from "../../utils/title";
import { cardsDescription } from "../../utils/cardsDescription";
import { InfoCard } from "../InfoCard/InfoCard";
import styled from "styled-components";

export const HomeLayout: FC = () => {
  return (
    <>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <CardsWrapper>
        {cardsDescription.map((card) => (
          <InfoCard
            key={card.title}
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
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  max-width: 500px;
  color: white;
`;
const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5rem;
`;
