import { FC } from "react";
import { massesIntentions } from "../../../utils/massesIntentions";
import styled from "styled-components";

export const Intentions: FC = () => {
  return (
    <div>
      {massesIntentions.map((element) => (
        <SingleBox key={massesIntentions.indexOf(element)}>
          <Days>
            {element.day} {element.date} {element.addInfo}
          </Days>
          {element.intensions.map((intention) => (
            <Text key={element.intensions.indexOf(intention)}>
              {intention.hour} {intention.intention}
            </Text>
          ))}
        </SingleBox>
      ))}
    </div>
  );
};

const SingleBox = styled.div`
  margin-bottom: 1.5rem;
`;
const Days = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;
const Text = styled.p`
  margin-bottom: 0;
`;
