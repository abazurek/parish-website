import { FC } from "react";
import { useLocation } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { navList } from "../../utils/navList";
import styled from "styled-components";
import { Masses } from "./Masses/Masses";
import { Baptism } from "./Baptism/Baptism";
import { Confession } from "./Confession/Confession";
import { Communion } from "./Communion/Communion";
import { Confirmation } from "./Confirmation/Confirmation";
import { Marriage } from "./Marriage/Marriage";
import { Sick } from "./Sick/Sick";
export const Sacraments: FC = () => {
  const location = useLocation();
  const nameOfPath = location.pathname.substring(1);
  const getComponentByPathName = (path: string) => {
    switch (path) {
      case "masses":
        return <Masses />;
      case "baptism":
        return <Baptism />;
      case "confession":
        return <Confession />;
      case "communion":
        return <Communion />;
      case "confirmation":
        return <Confirmation />;
      case "marriage":
        return <Marriage />;
      case "sick":
        return <Sick />;
      default:
        return <Masses />;
    }
  };

  return (
    <div>
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
