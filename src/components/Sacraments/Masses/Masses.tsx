import { FC } from "react";
import { cardsDescription } from "../../../utils/cardsDescription";
import styled from "styled-components";

export const Masses: FC = () => {
  return (
    <>
      <div>
        <p>{cardsDescription[0].title}</p>
        {cardsDescription[0].addInfo.map((element) => (
          <div key={element.title}>
            <span className="fw-bolder">{element.title}: </span>
            {element.desc}
          </div>
        ))}
      </div>
      <div>
        Codzienna Całodzienna adoracja Najświętszego SAkramentu w kaplicy
        adoracji
      </div>
      <div>
        <p>Nabożeństwa</p>
      </div>
    </>
  );
};
const Title = styled.span``;
