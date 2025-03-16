import React, { FC } from "react";
import { Header } from "../Header/Header";
import { Container } from "react-bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomeLayout } from "../HomeLayout/HomeLayout";
import { Ads } from "../Ads/Ads";
import styled, { css } from "styled-components";
import { Sacraments } from "../Sacraments/Sacraments";
import { SubsiteLayout } from "../SubsiteLayout/SubsiteLayout";
import { Contact } from "../Contact/Contact";
import { Parish } from "../Parish/Parish";
import { News } from "../News/News";

export const WardLayout: FC = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <Header />
      <InfoWrapper
        $isWisible={
          location.pathname !== "/" &&
          location.pathname !== "/aktualnosci" &&
          location.pathname !== "/home"
        }
      >
        {location.pathname !== "/" &&
          location.pathname !== "/aktualnosci" &&
          location.pathname !== "/home" && <TitleBanner />}
        <InfoBox
          $isWisible={
            location.pathname !== "/" &&
            location.pathname !== "/aktualnosci" &&
            location.pathname !== "/home"
          }
        >
          <Container>
            <Routes>
              <Route path="/home" element={<HomeLayout />} />
              <Route path="/" element={<HomeLayout />} />
              <Route path="/aktualnosci" element={<News />} />
              {/*<Route*/}
              {/*  path="/visits"*/}
              {/*  element={*/}
              {/*    <SubsiteLayout title="Porządek kolędy 2025r. ">*/}
              {/*      <Visits />*/}
              {/*    </SubsiteLayout>*/}
              {/*  }*/}
              {/*/>*/}
              <Route
                path="/ogloszenia"
                element={
                  <SubsiteLayout>
                    <Ads />
                  </SubsiteLayout>
                }
              />
              <Route
                path="/intencje"
                element={
                  <SubsiteLayout>
                    <Ads />
                  </SubsiteLayout>
                }
              />
              {[
                "/historia",
                "/grupy",
                "/kancelaria",
                "/kaplani",
                "/siostry",
                "/galeria",
                "/standardy",
              ].map((path) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <SubsiteLayout title="Parafia">
                      <Parish />
                    </SubsiteLayout>
                  }
                />
              ))}
              {[
                "/msze",
                "/chrzest",
                "/spowiedz",
                "/komunia",
                "/bierzmowanie",
                "/malzenstwo",
                "/namaszczenie",
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
              <Route
                path="/kontakt"
                element={
                  <SubsiteLayout title="Kontakt">
                    <Contact />
                  </SubsiteLayout>
                }
              />
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
  @media (max-width: 600px) {
    flex: 0;
  }
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
