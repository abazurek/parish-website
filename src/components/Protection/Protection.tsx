import React, { FC } from "react";
import standardyPDF from "./../../assets/standardy.pdf";
import styled from "styled-components";
export const Protection: FC = () => {
  return (
    <div>
      <p>
        W związku z wprowadzeniem obowiązku prawnego standardów ochrony przed
        krzywdzeniem małoletnich [ustawa z dnia 28 lipca 2023 roku o zmianie
        ustawy Kodeks rodzinny i opiekuńczy oraz niektórych innych ustaw (Dz.U.
        2023 poz. 1606), w tym ustawy z dnia 13 maja 2016 r. o przeciwdziałaniu
        zagrożeniom przestępczością na tle seksualnym i ochronie małoletnich],
        opracowane obowiązujące w naszej parafii dostępne są pod poniższym
        linkiem
      </p>
      <Link
        href={standardyPDF}
        target="_blank"
        type="application/pdf"
        rel="alternate"
        media="print"
      >
        Standardy Ochrony Małoletnich
      </Link>
    </div>
  );
};
const Link = styled.a`
  color: black;
`;
