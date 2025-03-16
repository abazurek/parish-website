import { FC, ReactNode } from "react";
import styled from "styled-components";

interface ICardsWrapper {
  children: ReactNode;
}
export const CardsWrapper: FC<ICardsWrapper> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24rem;
  @media (max-width: 766px) {
    margin-top: 3rem;
  }
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
