import React, { FC } from "react";
import styled from "styled-components";
import { Navigation } from "../Navigation/Navigation";

export const Header: FC = () => {
  return (
    <Wrapper className="py-3">
      <Navigation />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background: #e4e7e0;
  z-index: 3;
`;
