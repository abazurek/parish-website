import React, { FC } from "react";
import { Card, CardText, CardTitle } from "react-bootstrap";
import styled from "styled-components";
import { FaChurch, FaCross } from "react-icons/fa";
import { GiHolyGrail } from "react-icons/gi";

interface IInfoCard {
  title: string;
  addInfo: { title: string; desc: string }[];
  icon: string;
}

const icons = {
  grail: <GiHolyGrail />,
  cross: <FaCross />,
  church: <FaChurch />,
};

export const InfoCard: FC<IInfoCard> = ({ title, addInfo, icon }) => {
  return (
    <StyledCard $icon={icons[icon as keyof typeof icons]}>
      <IconBox>{icons[icon as keyof typeof icons]}</IconBox>
      <Card.Body>
        <StyledCardTitle>{title}</StyledCardTitle>
        <>
          {addInfo.map((info) => (
            <DescriptionWrapper key={info.title}>
              <p>{info.title}:</p>
              <p>{info.desc}</p>
            </DescriptionWrapper>
          ))}
        </>
      </Card.Body>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 18rem;
  height: 20rem;
  position: relative;
  padding-top: 2rem;
  background: rgba(57, 64, 57, 0.85);
  color: #e4e7e0;
`;
const IconBox = styled.div`
  position: absolute;
  top: -2rem;
  left: 7rem;
  background: rgba(57, 64, 57, 1);
  padding: 0.5rem;
  border-radius: 50%;
  svg {
    height: 3rem;
    width: auto;
    color: #e4e7e0;
  }
`;
const StyledCardTitle = styled(CardTitle)`
  text-transform: uppercase;
  text-align: center;
`;
const DescriptionWrapper = styled.div`
  p {
    margin-bottom: 0;
    &:first-of-type {
      font-weight: bold;
    }
  }
  margin-bottom: 0.5rem;
`;
