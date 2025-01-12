import { FC } from "react";
import { adsInfo } from "../../../utils/adsInfo";
import styled from "styled-components";

export const AdsInfo: FC = () => {
  return (
    <div>
      <Title>
        <Text>ogłoszenia {adsInfo.date}</Text>r.
      </Title>
      {adsInfo.info.map((element) => (
        <p key={adsInfo.info.indexOf(element)}>{element}</p>
      ))}
    </div>
  );
};

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;
const Text = styled.span`
  text-transform: uppercase;
`;
