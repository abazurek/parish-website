import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { Office } from "./Office/Office";
import { ParishHistory } from "./ParishHistory/ParishHistory";
import { Groups } from "./Groups/Groups";
import { Priests } from "./Priests/Priests";
import { Nuns } from "./Nuns/Nuns";
import { Gallery } from "./Galerry/Galerry";
import { Protection } from "./Protection/Protection";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import { navList } from "../../utils/navList";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import { Helmet } from "react-helmet";

export const Parish: FC = () => {
  const location = useLocation();
  const nameOfPath = location.pathname.substring(1);
  const getComponentByPathName = (path: string) => {
    switch (path) {
      case "history":
        return <ParishHistory />;
      case "groups":
        return <Groups />;
      case "office":
        return <Office />;
      case "priests":
        return <Priests />;
      case "nuns":
        return <Nuns />;
      case "gallery":
        return <Gallery />;
      case "protection":
        return <Protection />;
      default:
        return <ParishHistory />;
    }
  };
  return (
    <div>
      <Helmet>
        <title>Parafia Świętego Michala Archanioła w Blachowni Parafia</title>
        <meta
          name="description"
          content="Parafia Świętego Michala Archanioła w Blachowni  - informacje o parafii"
        />
      </Helmet>
      <Tab.Container defaultActiveKey={nameOfPath}>
        <FirstRow>
          <Col>
            <StyledNav
              variant="pills"
              className="flex-wrap align-items-center justify-content-center"
            >
              {navList[3].options.map((option) => (
                <SingleItem key={option.href}>
                  <SingleButton eventKey={option.href}>
                    {option.title}
                  </SingleButton>
                </SingleItem>
              ))}
            </StyledNav>
          </Col>
        </FirstRow>
        <Row>
          <Tab.Content>
            {navList[3].options.map((option) => (
              <Tab.Pane
                key={option.href}
                eventKey={option.href}
                className="m-2"
              >
                {getComponentByPathName(option.href)}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Row>
      </Tab.Container>
    </div>
  );
};

const FirstRow = styled(Row)`
  margin-bottom: 2rem;
`;
const StyledNav = styled(Nav)`
  &.nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    background-color: #e4e7e0;
    color: #394039;
  }
  a:hover {
    color: #737268;
  }
`;

const SingleButton = styled(Nav.Link)`
  color: #e4e7e0;
`;

const SingleItem = styled(Nav.Item)`
  .nav-tabs .nav-item .nav-link {
    color: #fff;
  }
`;
