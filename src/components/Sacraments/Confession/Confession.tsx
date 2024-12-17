import { FC } from "react";
import { cardsDescription } from "../../../utils/cardsDescription";
import styled from "styled-components";

export const Confession: FC = () => {
  return (
    <div>
      {cardsDescription[1].addInfo.map((element) => (
        <div key={element.title}>
          <Text>{element.title}: </Text> {element.desc}
        </div>
      ))}
    </div>
  );
};

const Text = styled.span`
  font-weight: 500;
`;
