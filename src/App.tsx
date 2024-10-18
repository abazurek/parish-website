import { FC } from "react";
import { WardLayout } from "./components/WardLayout/WardLayout";
import styled from "styled-components";
import church from "./assets/church.jpg";

export const App: FC = () => {
  return (
    <Box>
      <WardLayout />
    </Box>
  );
};
const Box = styled.div`
  background-image: url(${church});
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
