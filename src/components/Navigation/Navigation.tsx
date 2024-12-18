import { FC, useState } from "react";
import styled from "styled-components";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { navList } from "../../utils/navList";
import { title } from "../../utils/title";

export const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<string | boolean>(false);

  const showDropdown = (key: string) => setIsOpen(key);
  const hideDropdown = () => setIsOpen(false);
  return (
    <StyledNavbar expand="lg">
      <Container>
        <Brand href="/home">{title}</Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <StyledCollapse id="basic-navbar-nav">
          <StyledNav>
            {navList.map((element) => {
              if (element.options.length) {
                return (
                  <StyledNavDropdown
                    key={element.key}
                    title={element.title}
                    show={isOpen === element.key}
                    onMouseEnter={() => showDropdown(element.key)}
                    onMouseLeave={hideDropdown}
                  >
                    {element.options.map((option) => (
                      <NavDropdown.Item
                        key={element.options.indexOf(option)}
                        href={`/${option.href}`}
                      >
                        {option.title}
                      </NavDropdown.Item>
                    ))}
                  </StyledNavDropdown>
                );
              } else
                return (
                  <Button
                    key={element.key}
                    href={element.key === "home" ? "/home" : "/contact"}
                  >
                    {element.title}
                  </Button>
                );
            })}
          </StyledNav>
        </StyledCollapse>
      </Container>
    </StyledNavbar>
  );
};

const StyledNavbar = styled(Navbar)`
  padding: 0;
  justify-content: space-between;
  a {
    font-weight: 300;
    color: #394039;
  }
`;
const StyledCollapse = styled(Navbar.Collapse)`
  width: 100%;
`;
const StyledNav = styled(Nav)`
  justify-content: center;
  width: 100%;
`;
const StyledNavDropdown = styled(NavDropdown)`
  text-transform: uppercase;
  font-size: 1rem;
  &:hover {
    background-color: rgba(57, 64, 57, 0.85);
    color: #e4e7e0;
  }
  & > a {
    font-size: 1.3rem;
    text-transform: uppercase;
    &:after {
      content: none;
    }
  }
`;
const NavButton = styled(Navbar.Brand)`
  text-transform: uppercase;
  font-size: 1.3rem;
  padding: 8px;
  &:hover {
    background-color: rgba(57, 64, 57, 0.85);
    color: #e4e7e0;
  }
`;
const Brand = styled(Navbar.Brand)`
  font-size: 1.5rem;
  text-align: center;
  max-width: 350px;
  min-width: 300px;
  white-space: normal;
  text-transform: uppercase;
  &.navbar-brand {
    color: #394039;
    font-weight: 600;
  }
`;
const Button = styled(NavButton)`
  &.navbar-light .navbar-brand {
    color: #394039;!important;
    font-weight: 300;
  }
`;
