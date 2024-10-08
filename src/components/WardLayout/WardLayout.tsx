import { FC } from "react";
import styled from "styled-components";
import { Sidebar } from "../Sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";
import { Header } from "../Header/Header";

const Wrapper = styled.div`
  display: flex;
`;
const MainContent = styled.div``;
export const WardLayout: FC = () => (
  <div>
    <Header />
    <Wrapper>
      <Sidebar />
      <MainContent />
    </Wrapper>
  </div>
);
