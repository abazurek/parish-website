import { FC } from "react";
import { WardLayout } from "./components/WardLayout/WardLayout";
import styled from "styled-components";
import tlo from "./assets/tlo.png";

export const App: FC = () => {
  return (
    <Box>
      <WardLayout />
    </Box>
  );
};
const Box = styled.div`
  background-image: url(${tlo});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
