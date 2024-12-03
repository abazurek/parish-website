import { createContext, useContext } from "react";

interface IWardContext {
  subsite: string | null;
}

export const WardContext = createContext<IWardContext>({} as IWardContext);
export const useWardContext = () => useContext(WardContext);
