import { FC } from "react";
import styled from "styled-components";

export const Priests: FC = () => {
  return (
    <div>
      <div>
        <Test>Proboszcz: </Test>ks. Tomasz Wrona
      </div>
      <div>
        <Test>Wikariusz: </Test>ks. Dawid Szymoniak
      </div>
    </div>
  );
};

const Test = styled.span`
  font-weight: bold;
`;
