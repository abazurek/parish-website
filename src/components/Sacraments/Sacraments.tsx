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
      <Tab.Container id="left-tabs-example" defaultActiveKey={nameOfPath}>
        <Row>
          <Col>
            <Nav
              variant="pills"
              className="flex-wrap align-items-center justify-content-center"
            >
              {navList[3].options.map((option) => (
                <Nav.Item key={option.href}>
                  <Nav.Link eventKey={option.href}>{option.title}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>
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

const SingleButton = styled(Nav.Link)`
  border: 1px solid gray;
`;
