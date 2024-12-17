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
import { SubsiteLayout } from "../SubsiteLayout/SubsiteLayout";

export const WardLayout: FC = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <Header />
      <InfoWrapper
        $isWisible={location.pathname !== "/" && location.pathname !== "/home"}
      >
        {location.pathname !== "/" && location.pathname !== "/home" && (
          <TitleBanner />
        )}
        <InfoBox
          $isWisible={
            location.pathname !== "/" && location.pathname !== "/home"
          }
        >
          <Container>
            <Routes>
              <Route path="/home" element={<HomeLayout />} />
              <Route path="/" element={<HomeLayout />} />
              <Route path="/ads" element={<Ads />} />
              <Route path="/mass" element={<Ads />} />
              <Route
                path="/history"
                element={
                  <SubsiteLayout title="Historia parafii">
                    <ParishHistory />
                  </SubsiteLayout>
                }
              />
              <Route
                path="/groups"
                element={
                  <SubsiteLayout title="Grupy i wspólnoty">
                    <Groups />
                  </SubsiteLayout>
                }
              />
              <Route
                path="/office"
                element={
                  <SubsiteLayout title="Kancelaria parafialna">
                    <Office />
                  </SubsiteLayout>
                }
              />
              <Route
                path="/priests"
                element={
                  <SubsiteLayout title="Kapłani">
                    <Priests />
                  </SubsiteLayout>
                }
              />
              <Route
                path="/nuns"
                element={
                  <SubsiteLayout title="Siostry nazaretanki">
                    <Nuns />
                  </SubsiteLayout>
                }
              />
              <Route
                path="/gallery"
                element={
                  <SubsiteLayout title="Galeria">
                    <Gallery />
                  </SubsiteLayout>
                }
              />
              <Route
                path="/protection"
                element={
                  <SubsiteLayout title="Standardy ochrony małotelnich">
                    <Protection />
                  </SubsiteLayout>
                }
              />
              {[
                "/masses",
                "/baptism",
                "/confession",
                "/communion",
                "/confirmation",
                "/marriage",
                "sick",
              ].map((path) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <SubsiteLayout title="Sakramenty">
                      <Sacraments />
                    </SubsiteLayout>
                  }
                />
              ))}
            </Routes>
          </Container>
        </InfoBox>
      </InfoWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const InfoWrapper = styled.div<{ $isWisible: boolean }>`
  flex: 1;
  color: #e4e7e0;
  ${({ $isWisible }) =>
    $isWisible &&
    css`
      display: flex;
      justify-content: space-evenly;
    `}
`;

const TitleBanner = styled.div`
  flex: 1;
`;

const InfoBox = styled.div<{ $isWisible: boolean }>`
  ${({ $isWisible }) =>
    $isWisible &&
    css`
      background: rgba(57, 64, 57, 0.85);
      flex: 2;
      color: #e4e7e0;
      padding-top: 2rem;
      padding-bottom: 2rem;
    `}
`;
