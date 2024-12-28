import React, { FC } from "react";
import { contactInfo } from "../../utils/contactInfo";
import styled from "styled-components";
import { Helmet } from "react-helmet";

export const Contact: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Parafia Świętego Michala Archanioła w Blachowni Kontakt</title>
        <meta
          name="description"
          content="Parafia Świętego Michala Archanioła w Blachowni  - kontakt"
        />
      </Helmet>
      {contactInfo.map((element) => (
        <p key={contactInfo.indexOf(element)}>
          <Text>{element.title}</Text>
          {element.desc}
        </p>
      ))}
    </div>
  );
};

const Text = styled.span`
  font-weight: 500;
`;
