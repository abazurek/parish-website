import { FC } from "react";
import { cardsDescription } from "../../../utils/cardsDescription";
import styled from "styled-components";
import { massesInfo } from "../../../utils/massesInfo";

export const Masses: FC = () => {
  return (
    <>
      {/*<div className="mb-2">*/}
      {/*  <Title className="text-uppercase">{cardsDescription[0].title}</Title>*/}
      {/*  {cardsDescription[0].addInfo.map((element) => (*/}
      {/*    <div key={element.title}>*/}
      {/*      <span className="fw-bolder ">{element.title}: </span>*/}
      {/*      {element.desc}*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
      {massesInfo.map((element) => (
        <div className="mb-2">
          <Title className="text-uppercase">{element.title}</Title>
          {element.addInfo.map((element) => (
            <div key={element.title}>
              <span className="fw-bolder">{element.title}: </span>
              {element.desc}
            </div>
          ))}
        </div>
      ))}

      {/*<Title>*/}
      {/*  Codzienna Całodzienna adoracja Najświętszego SAkramentu w kaplicy*/}
      {/*  adoracji*/}
      {/*</Title>*/}
      {/*<div>*/}
      {/*  <Title className="text-uppercase">Nabożeństwa</Title>*/}
      {/*  <div>*/}
      {/*    Pierwszy czwartek miesiąca: nabożeństwo po mszy świętej wieczorowej*/}
      {/*    Pierwszy piątek: nabożeństwo po mszy świętej wieczorowej KOMUNIA ŚW.*/}
      {/*    DLA CHORYCH W każdy pierwszy piątek miesiąca od godziny 9.00 księża z*/}
      {/*    naszej parafii odwiedzają chorych w ich domach, służąc im posługą*/}
      {/*    sakramentalną: zanoszą chorym Komunię św., jest też możliwość*/}
      {/*    spowiedzi, a także przyjęcia sakramentu namaszczenia. Pierwszy sobota*/}
      {/*    miesiąca: nabożeńśtwo po mszy świętej o godzinie 7:30 W każdy wtorek*/}
      {/*    modlitwy do Świetego Antoniego Padewskiego W każdą srodę nowenna do*/}
      {/*    Matki Bożej Nieustającej Pomocy o godzinie 17 W miesiącu maj*/}
      {/*    codziennie nabożeństwa do Matki Bożej po mszy świętej wieczorowej W*/}
      {/*    miesiącu czerwiec codziennie nabożeństwa do Serca Pana Jezusa po mszy*/}
      {/*    świętej wieczorowej W miesiącu paźniernik codziennie nabożeństwa*/}
      {/*    różańcowe po mszy świętej wieczorowej adwent - roraty w dni powszednie*/}
      {/*    na mszy swietej wieczorowej W okresie Wielkiego Postu droga krzyżowa w*/}
      {/*    piątki: dla dzieci przed mszą świętą wieczorową o godzinie 16:30, dla*/}
      {/*    dorosłych po mszy wieczorowej, gorzkie żale w niedziele o godzinie*/}
      {/*    16:30 Nabożeństwa fatimskie od maja do października każego 13 dnia*/}
      {/*    miesiąca Doba Eucharystyczna: 15/16 sierpnia Odpust: Najświętszej*/}
      {/*    Maryii Panny Królowej Polski - 3. maja św. Michała Archanioła 29.*/}
      {/*    września*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};
const Title = styled.p`
  font-weight: bolder;
  font-size: 1.2rem;
`;
