import { FC } from "react";
import styled from "styled-components";

export const Groups: FC = () => {
  return (
    <Box>
      <Line>
        <Info>Koła różańcowe: </Info>męskie, żeńskie, rodziców modlących się za
        swoje dzieci
      </Line>
      <div>krąg biblijny</div>
      <div>apostolstwo “Margaretka”</div>
      <div>służba liturgiczna</div>
      <div>chór parafialny</div>
      <div>akcja katolicka</div>
      <div>rada parafialna</div>
      <div>biblioteka parafialna (czynna: ????????????????????????)</div>
    </Box>
  );
};
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Line = styled.div`
  display: flex;
`;
const Info = styled.p`
  font-weight: bold;
  margin-bottom: 0;
  margin-right: 0.5rem;
`;
