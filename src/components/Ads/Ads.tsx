import { FC } from "react";
import { useLocation } from "react-router-dom";
import { AdsInfo } from "./AdsInfo/AdsInfo";
import { Intentions } from "./Intentions/Intentions";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

export const Ads: FC = () => {
  const location = useLocation();
  const nameOfPath = location.pathname.substring(1);

  return (
    <div>
      <Tab.Container defaultActiveKey={nameOfPath}>
        <FirstRow>
          <Col>
            <StyledNav
              variant="pills"
              className="flex-wrap align-items-center justify-content-center"
            >
              <SingleItem key="ads">
                <SingleButton eventKey="ads">Ogłoszenia</SingleButton>
              </SingleItem>
              <SingleItem key="intentions">
                <SingleButton eventKey="intentions">
                  Intencje mszalne
                </SingleButton>
              </SingleItem>
            </StyledNav>
          </Col>
        </FirstRow>
        <Row>
          <Tab.Content>
            <Tab.Pane key="ads" eventKey="ads" className="m-2">
              <AdsInfo />
            </Tab.Pane>
            <Tab.Pane key="intentions" eventKey="intentions" className="m-2">
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
