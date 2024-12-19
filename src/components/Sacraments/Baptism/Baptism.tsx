import { FC } from "react";
import { baptismInfo } from "../../../utils/baptismInfo";

export const Baptism: FC = () => {
  return (
    <div>
      {baptismInfo.map((element) => (
        <p key={baptismInfo.indexOf(element)}>{element}</p>
      ))}
    </div>
  );
};
