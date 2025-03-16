import { FC } from "react";
import styled, { css } from "styled-components";

interface INotice {
  text: { text: string; align: string }[];
}

export const Notice: FC<INotice> = ({ text }) => {
  return (
    <div className="d-flex justify-content-center mb-4">
      <Wrapper>
        {text.map((element) => (
          <Text key={text.indexOf(element)} $align={element.align}>
            {element.text}
          </Text>
        ))}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 80vw;
  background: rgba(57, 64, 57, 0.85);
  border-radius: 10px;
  color: #e4e7e0;
  padding: 1rem;
  font-size: 1.2rem;
  box-shadow: -1px 1px 55px -3px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: -1px 1px 55px -3px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: -1px 1px 55px -3px rgba(0, 0, 0, 0.59);
`;

const Text = styled.p<{ $align: string }>`
  white-space: pre-line;
  ${({ $align }) =>
    $align &&
    css`
      text-align: ${$align};
    `}
`;
