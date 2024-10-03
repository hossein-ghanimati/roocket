import { applyFilters } from "@/assets/ts/courses/shared";
import {
  getUrlParam,
  removeUrlParam,
  setUrlParam,
} from "@/assets/ts/utils/url";
import {
  ChangeEventHandler,
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { CoursesContext } from "./courses.context";

type CoursesFilterContextType = {
  isOnlyFree: boolean;
  isOnlyBought: boolean;
  changeOnlyFree: ChangeEventHandler<HTMLInputElement>;
  changeOnlyBought: ChangeEventHandler<HTMLInputElement>;
  acceptChange: (isOnlyFree: boolean, isOnlyBought: boolean) => void;
};

const CoursesFilterContext = createContext<CoursesFilterContextType | null>(
  null
);

const CoursesFilterContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const coursesSetting = useContext(CoursesContext);

  const [isOnlyFree, setIsOnlyFree] = useState<boolean>(
    getUrlParam("only-free") === "yes"
  );
  const [isOnlyBought, setIsOnlyBought] = useState<boolean>(
    getUrlParam("only-bought") === "yes"
  );

  const changeOnlyFree: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.checked
      ? setUrlParam(e.target.name, e.target.value)
      : removeUrlParam(e.target.name);
    setIsOnlyFree(e.target.checked);
    applyFilters(coursesSetting);
  };

  const changeOnlyBought: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.checked
      ? setUrlParam(e.target.name, e.target.value)
      : removeUrlParam(e.target.name);
    setIsOnlyBought(e.target.checked);
    applyFilters(coursesSetting);
  };

  const acceptChange = (isOnlyFree: boolean ,isOnlyBought: boolean) => {
    isOnlyFree
      ? setUrlParam("only-free", "yes")
      : removeUrlParam("only-free");
    isOnlyBought
      ? setUrlParam("only-bought", "yes")
      : removeUrlParam("only-bought");

    setIsOnlyFree(isOnlyFree)
    setIsOnlyBought(isOnlyBought)
    applyFilters(coursesSetting)
  }

  return (
    <CoursesFilterContext.Provider
      value={{ isOnlyFree, isOnlyBought, changeOnlyFree, changeOnlyBought, acceptChange }}
    >
      {children}
    </CoursesFilterContext.Provider>
  );
};

export { CoursesFilterContext, CoursesFilterContextProvider };
