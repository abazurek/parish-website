import { FC, ReactNode } from "react";
import styled from "styled-components";

interface SubsiteLayout {
  title: string;
  children: ReactNode;
}
export const SubsiteLayout: FC<SubsiteLayout> = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      <div className="px-5">{children}</div>
    </div>
  );
};

const Title = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 2rem;
`;
