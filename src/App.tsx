import { FC } from "react";
import { WardLayout } from "./components/WardLayout/WardLayout";
import styled from "styled-components";

export const App: FC = () => {
  return (
    <Box>
      <WardLayout />
    </Box>
  );
};
const Box = styled.div`
  background-image: url("./assets/church.jpg");
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: red;
`;
