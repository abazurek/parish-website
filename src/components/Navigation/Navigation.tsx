import { FC, useState } from "react";
import styled from "styled-components";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { navList } from "../../utils/navList";

export const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<string | boolean>(false);

  const showDropdown = (key: string) => setIsOpen(key);
  const hideDropdown = () => setIsOpen(false);
  return (
    <StyledNavbar>
      <Container>
        <Navbar.Toggle />
        <StyledCollapse>
          <StyledNav>
            {navList.map((element) => {
              if (element.options.length) {
                return (
                  <StyledNavDropdown
                    title={element.title}
                    show={isOpen === element.key}
                    onMouseEnter={() => showDropdown(element.key)}
                    onMouseLeave={hideDropdown}
                  >
                    {element.options.map((option) => (
                      <NavDropdown.Item href="#action/3.1">
                        {option}
                      </NavDropdown.Item>
                    ))}
                  </StyledNavDropdown>
                );
              } else return <NavButton href="#home">{element.title}</NavButton>;
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
    color: black;
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
    background-color: white;
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
    background-color: white;
  }
`;
