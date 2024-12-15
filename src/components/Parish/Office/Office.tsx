import { FC } from "react";
import { cardsDescription } from "../../../utils/cardsDescription";

export const Office: FC = () => {
  return (
    <div>
      <p>
        Kancelaria czynna {cardsDescription[2].addInfo[0].title} w godinach{" "}
        {cardsDescription[2].addInfo[0].desc}
      </p>
      <p>
        {cardsDescription[2].addInfo[1].title}{" "}
        {cardsDescription[2].addInfo[1].desc}
      </p>
    </div>
  );
};
