import React, { FC } from "react";
import { Header } from "../Header/Header";
import { Container } from "react-bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomeLayout } from "../HomeLayout/HomeLayout";
import { Ads } from "../Ads/Ads";
import { ParishHistory } from "../Parish/ParishHistory/ParishHistory";
import { Groups } from "../Parish/Groups/Groups";

export const WardLayout: FC = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/" element={<HomeLayout />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/mass" element={<Ads />} />
          <Route path="/history" element={<ParishHistory />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/ads" element={<Ads />} />
        </Routes>
      </Container>
    </>
  );
};
