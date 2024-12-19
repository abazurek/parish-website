import { FC } from "react";
import { sickInfo } from "../../../utils/sickInfo";

export const Sick: FC = () => {
  return (
    <div>
      {sickInfo.map((element) => (
        <p key={sickInfo.indexOf(element)}>{element}</p>
      ))}
    </div>
  );
};
