import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { AdsInfo } from "./AdsInfo/AdsInfo";
import { Intentions } from "./Intentions/Intentions";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import { Helmet } from "react-helmet";

export const Ads: FC = () => {
  const location = useLocation();
  const nameOfPath = location.pathname.substring(1);

  console.log(nameOfPath);

  return (
    <div>
      <Helmet>
        <title>
          Parafia Świętego Michala Archanioła w Blachowni Ogłoszenia
        </title>
        <meta
          name="description"
          content="Parafia Świętego Michala Archanioła w Blachowni  - ogłoszenia i intencje mszalne"
        />
      </Helmet>
      <Tab.Container defaultActiveKey={nameOfPath}>
        <FirstRow>
          <Col>
            <StyledNav
              variant="pills"
              className="flex-wrap align-items-center justify-content-center"
            >
              <SingleItem key="ogloszenia">
                <SingleButton eventKey="ogloszenia">Ogłoszenia</SingleButton>
              </SingleItem>
              <SingleItem key="intencje">
                <SingleButton eventKey="intencje">
                  Intencje mszalne
                </SingleButton>
              </SingleItem>
            </StyledNav>
          </Col>
        </FirstRow>
        <Row>
          <Tab.Content>
            <Tab.Pane key="ogloszenia" eventKey="ogloszenia" className="m-2">
              <AdsInfo />
            </Tab.Pane>
            <Tab.Pane key="intencje" eventKey="intencje" className="m-2">
              <Intentions />
            </Tab.Pane>
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
