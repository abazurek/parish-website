import { FC } from "react";
import { contactInfo } from "../../utils/contactInfo";
import styled from "styled-components";

export const Contact: FC = () => {
  return (
    <div>
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
