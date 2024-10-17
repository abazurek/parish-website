import { FC } from "react";
import styled from "styled-components";
import { Header } from "../Header/Header";
import { Container } from "react-bootstrap";

const title = "Parafia pw. Świętego Michała Archanioła w Blachownii";
export const WardLayout: FC = () => (
  <Container>
    <Header />
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
  </Container>
);

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const Title = styled.p`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 300;
  max-width: 500px;
`;
