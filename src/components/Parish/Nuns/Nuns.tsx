import { FC } from "react";
import { nuns } from "../../../utils/nuns";
import styled from "styled-components";

export const Nuns: FC = () => {
  return (
    <div>
      {nuns.map((element) => (
        <p key={nuns.indexOf(element)}>
          <Text>s. {element.name}</Text> - {element.role}
        </p>
      ))}
    </div>
  );
};
const Text = styled.span`
  font-weight: bold;
`;
