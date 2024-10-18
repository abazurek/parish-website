import { FC } from "react";
import styled from "styled-components";
import { Header } from "../Header/Header";
import { Container } from "react-bootstrap";
import { title } from "../../utils/title";
import church from "./../../assets/church.jpg";
import { cardsDescription } from "../../utils/cardsDescription";
import { InfoCard } from "../InfoCard/InfoCard";

export const WardLayout: FC = () => (
  <Container>
    <Header />
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
    <CardsWrapper>
      {cardsDescription.map((card) => (
        <InfoCard title={card.title} addInfo={card.addInfo} icon={card.icon} />
      ))}
    </CardsWrapper>
  </Container>
);

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 200;
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
