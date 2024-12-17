import { FC } from "react";
import { parishHistory } from "../../../utils/parishHistory";
import { parishPriests } from "../../../utils/parishPriests";
import styled from "styled-components";

export const ParishHistory: FC = () => {
  return (
    <>
      <Box>{parishHistory}</Box>
      <div>
        <Text>Proboszczowie od 1925r.:</Text> {parishPriests}
      </div>
    </>
  );
};
const Box = styled.div`
  margin-bottom: 1rem;
`;

const Text = styled.span`
  margin-top: 1rem;
  font-weight: bold;
`;
