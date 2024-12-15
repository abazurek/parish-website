import React, { FC } from "react";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { phoneNumber } from "../../utils/phoneNumber";
import { Navigation } from "../Navigation/Navigation";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { navList } from "../../utils/navList";

export const Header: FC = () => {
  const location = useLocation();
  const subSiteTitle = navList
    .map((element) => element.options)
    .flat()
    .filter((option) => `/${option.href}` === location.pathname)[0];

  return (
    <Wrapper>
      <ContactLine>
        <Container>
          <ContactWrapper>
            <FaPhoneAlt />
            <Text>{phoneNumber}</Text>
          </ContactWrapper>
        </Container>
      </ContactLine>
      <Container>
        <Navigation />
      </Container>
      {subSiteTitle && <TitleBanner>{subSiteTitle.title}</TitleBanner>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background: rgba(237, 235, 233, 0.8);
  margin-bottom: 2rem;
`;
const ContactLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
  padding: 2px;
  font-size: 0.7rem;
  border-bottom: 1px solid black;
`;

const Text = styled.p`
  margin-bottom: 0;
`;
const TitleBanner = styled.div`
  width: 100vw;
  background: rgba(75, 139, 116, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 0.7rem;
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;
