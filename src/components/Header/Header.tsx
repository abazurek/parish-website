import { FC } from "react";
import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";

const Wrapper = styled.div`
  height: 5rem;
  background: white;
  opacity: 0.7;
  position: sticky;
  top: 0;
`;
const Box = styled.div`
  display: flex;
  width: 80vw;
  margin: 0 auto;
`;
export const Header: FC = () => (
  <Wrapper>
    <Box>
      <Navbar />
    </Box>
  </Wrapper>
);
