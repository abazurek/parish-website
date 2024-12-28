import React, { FC } from "react";
import { visitsInfo } from "../../utils/visitsInfo";
import styled from "styled-components";
import { Helmet } from "react-helmet";

export const Visits: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Parafia Świętego Michala Archanioła w Blachowni Kolęda</title>
        <meta
          name="description"
          content="Parafia Świętego Michala Archanioła w Blachowni  - porządek kolędy na nadchodzący tydzień"
        />
      </Helmet>
      {visitsInfo.map((element) => (
        <p>
          <Day>{element.day}</Day> {element.desc}
        </p>
      ))}
    </div>
  );
};
const Day = styled.span`
  font-weight: bolder;
`;
