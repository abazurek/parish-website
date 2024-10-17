import { FC } from "react";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { phoneNumber } from "../../utils/phoneNumber";
import { Navigation } from "../Navigation/Navigation";

export const Header: FC = () => (
  <Wrapper>
    <ContactLine>
      <FaPhoneAlt />
      <Text>{phoneNumber}</Text>
    </ContactLine>
    <Navigation />
  </Wrapper>
);

const Wrapper = styled.div`
  opacity: 0.7;
  position: sticky;
  top: 0;
  border-bottom: 1px solid black;
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
