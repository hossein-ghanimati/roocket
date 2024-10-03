import { getUrlParam } from "@/assets/ts/utils/url";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

type CoursesFilterContextType = {
  isOnlyFree: boolean;
  isOnlyBought: boolean;
  setIsOnlyFree: Dispatch<SetStateAction<boolean>>;
  setIsOnlyBought: Dispatch<SetStateAction<boolean>>;
};

const CoursesFilterContext = createContext<CoursesFilterContextType | null>(
  null
);

const CoursesFilterContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOnlyFree, setIsOnlyFree] = useState<boolean>(getUrlParam("only-free") === "yes");
  const [isOnlyBought, setIsOnlyBought] = useState<boolean>(getUrlParam("only-bought") === "yes");

  return (
    <CoursesFilterContext.Provider
      value={{ isOnlyFree, isOnlyBought, setIsOnlyFree, setIsOnlyBought }}
    >
      {children}
    </CoursesFilterContext.Provider>
  );
};

export { CoursesFilterContext, CoursesFilterContextProvider };
