import { FC } from "react";
import styled from "styled-components";

export const Priests: FC = () => {
  return (
    <div>
      <div>
        <Test>Ksiądz proboszcz</Test> Tomasz Wrona
      </div>
      <div>
        <Test>Wikary</Test> Dawid Szymoniak
      </div>
    </div>
  );
};

const Test = styled.span`
  font-weight: bold;
`;
