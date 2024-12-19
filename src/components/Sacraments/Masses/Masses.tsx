import { FC } from "react";
import styled from "styled-components";
import { massesInfo } from "../../../utils/massesInfo";

export const Masses: FC = () => {
  return (
    <>
      {massesInfo.map((element) => (
        <div className="mb-2" key={massesInfo.indexOf(element)}>
          <Title className="text-uppercase">{element.title}</Title>
          {element.addInfo.map((element) => (
            <div key={element.title}>
              <Text className="fw-bold">{element.title}: </Text>
              {element.desc}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
const Title = styled.p`
  font-weight: bolder;
  font-size: 1.2rem;
`;

const Text = styled.span`
  font-weight: 500;
`;
