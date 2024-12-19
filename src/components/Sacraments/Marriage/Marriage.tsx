import { FC } from "react";
import { marriageInfo } from "../../../utils/marriageInfo";

export const Marriage: FC = () => {
  return (
    <div>
      {marriageInfo.map((element) => (
        <div key={marriageInfo.indexOf(element)}>
          <p>{element.text}</p>
          {element.list.length ? (
            <ul>
              {element.list.map((option) => (
                <li key={element.list.indexOf(option)}>{option}</li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};
