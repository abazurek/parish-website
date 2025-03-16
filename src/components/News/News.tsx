import React, { FC } from "react";
import { Notice } from "../Notice/Notice";
import { noticeRadio } from "../../utils/noticeRadio";
import { noticeChoir } from "../../utils/noticeChoir";
import styled from "styled-components";

export const News: FC = () => {
  return (
    <Wrapper>
      <Notice text={noticeRadio} />
      <Notice text={noticeChoir} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 24rem;
`;
