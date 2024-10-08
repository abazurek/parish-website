import { FC } from "react";
import styled from "styled-components";
import { Navigation } from "../Navigation/Navigation";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;
const TitleWrapper = styled.div``;
const NavigationWrapper = styled.div``;
const title = "Parafia pw. Świętego Michała Archanioła w Blachownii";
export const Navbar: FC = () => (
  <StyledNavbar>
    <TitleWrapper>{title}</TitleWrapper>
    <NavigationWrapper>
      <Navigation />
    </NavigationWrapper>
  </StyledNavbar>
);
