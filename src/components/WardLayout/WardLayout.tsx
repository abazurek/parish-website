import React, { FC } from "react";
import { Header } from "../Header/Header";
import { Container } from "react-bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomeLayout } from "../HomeLayout/HomeLayout";
import { Ads } from "../Ads/Ads";
import { ParishHistory } from "../Parish/ParishHistory/ParishHistory";
import { Groups } from "../Parish/Groups/Groups";
import styled, { css } from "styled-components";
import { Office } from "../Parish/Office/Office";
import { Priests } from "../Priests/Priests";
import { Nuns } from "../Nuns/Nuns";
import { Gallery } from "../Galerry/Galerry";
import { Protection } from "../Protection/Protection";
import { Sacraments } from "../Sacraments/Sacraments";

export const WardLayout: FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Container>
        <InfoWrapper
          $isWhite={location.pathname !== "/" && location.pathname !== "/home"}
        >
          <Routes>
            <Route path="/home" element={<HomeLayout />} />
            <Route path="/" element={<HomeLayout />} />
            <Route path="/ads" element={<Ads />} />
            <Route path="/mass" element={<Ads />} />
            <Route path="/history" element={<ParishHistory />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/office" element={<Office />} />
            <Route path="/priests" element={<Priests />} />
            <Route path="/nuns" element={<Nuns />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/protection" element={<Protection />} />
            {[
              "/masses",
              "/baptism",
              "/confession",
              "/communion",
              "/confirmation",
              "/marriage",
              "sick",
            ].map((path) => (
              <Route key={path} path={path} element={<Sacraments />} />
            ))}
            {/*<Route*/}
            {/*  path={["/masses", "/baptism"] as string | string[]}*/}
            {/*  element={<Sacraments />}*/}
            {/*/>*/}
          </Routes>
        </InfoWrapper>
      </Container>
    </>
  );
};

const InfoWrapper = styled.div<{ $isWhite: boolean }>`
  ${({ $isWhite }) =>
    $isWhite &&
    css`
      background: white;
    `}
  padding: 1rem;
`;
