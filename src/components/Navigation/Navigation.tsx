import { FC } from "react";
import styled from "styled-components";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const buttonsList = [
  // { key: "home", title: "Aktualności", options: [] },
  {
    key: "ads",
    title: "Ogłoszenia",
    options: ["Ogłoszenia", "Intencje mszalne"],
  },
  {
    key: "parish",
    title: "Parafia",
    options: [
      "Historia parafii",
      "Grupy i wspólnoty",
      "Kancelaria parafialna",
      "Kapłani",
      "Siostry szarytki",
      "Galeria",
      "Standardy ochrony małoletnich",
    ],
  },
  {
    key: "sacraments",
    title: "Sakramenty",
    options: [
      "Msze święte i nabożeństwa",
      "Chrzest Święty",
      "Spowiedź Święta",
      "I Komunia Święta",
      "Bierzmowanie",
      "Małżeństwo",
      "Namaszczenie chorych",
    ],
  },
  {
    key: "contact",
    title: "Kontakt",
    options: [],
  },
];

export const Navigation: FC = () => {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Aktualności</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            {buttonsList.map((element) => {
              if (element.options.length) {
                return (
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={element.title}
                    menuVariant="dark"
                  >
                    {element.options.map((option) => (
                      <NavDropdown.Item href="#action/3.1">
                        {option}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                );
              } else
                return (
                  <Navbar.Brand href="#home">{element.title}</Navbar.Brand>
                );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/*<List>*/}
      {/*  {buttonsList.map((element) => {*/}
      {/*    if (element.options.length) {*/}
      {/*      return (*/}
      {/*        <li>*/}
      {/*          <select>*/}
      {/*            {element.title}{" "}*/}
      {/*            {element.options.map((option) => (*/}
      {/*              <option>{option}</option>*/}
      {/*            ))}*/}
      {/*          </select>*/}
      {/*        </li>*/}
      {/*      );*/}
      {/*    } else*/}
      {/*      return (*/}
      {/*        <li>*/}
      {/*          <button>{element.title}</button>*/}
      {/*        </li>*/}
      {/*      );*/}
      {/*  })}*/}
      {/*</List>*/}
      {/*  <Tabs defaultActiveKey="home">*/}
      {/*  <Tab eventKey="home" title="Strona główna"></Tab>*/}
      {/*  <Tab eventKey="ads" title="Ogłoszenia">*/}
      {/*    <Form.Select>*/}
      {/*      <option>Ogłoszenia</option>*/}
      {/*      <option>Intencje mszalne</option>*/}
      {/*    </Form.Select>*/}
      {/*  </Tab>*/}
      {/*</Tabs>*/}
    </>
  );
};
