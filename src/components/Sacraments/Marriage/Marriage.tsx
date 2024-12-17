import { FC } from "react";
import { marriageInfo } from "../../../utils/marriageInfo";

export const Marriage: FC = () => {
  return (
    <div>
      {marriageInfo.map((element) => (
        <div key={marriageInfo.indexOf(element)}>
          <p>{element.text}</p>
          {element.list.length && <ul></ul>}
        </div>
      ))}
    </div>
  );
};
