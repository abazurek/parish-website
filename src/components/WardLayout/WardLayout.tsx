import { FC } from "react";
import styled from "styled-components";
import { Sidebar } from "../Sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";

const Wrapper = styled.div`
  display: flex;
`;
export const WardLayout: FC = () => (
  <div>
    <Navbar />
    <Wrapper>
      <Sidebar />
    </Wrapper>
  </div>
);
