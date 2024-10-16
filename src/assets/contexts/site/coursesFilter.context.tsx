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
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { CoursesContext } from "./courses.context";
import { CoursesFilterMenuContext } from "./coursesFilterMenu.context";
import { AuthContext } from "../share/auth.context";
import { useParams } from "react-router-dom";

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
  const authSetting = useContext(AuthContext)
  const coursesSetting = useContext(CoursesContext);
  const filterMenuSetting = useContext(CoursesFilterMenuContext)
  const params = useParams()

  const [isOnlyFree, setIsOnlyFree] = useState<boolean>(
    getUrlParam("only-free") === "yes"
  );
  const [isOnlyBought, setIsOnlyBought] = useState<boolean>(
    getUrlParam("only-bought") === "yes"
  );


  const changeOnlyFree: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    e.target.checked
      ? setUrlParam(e.target.name, e.target.value)
      : removeUrlParam(e.target.name);
    setIsOnlyFree(e.target.checked);
    applyFilters(coursesSetting);
  }, [coursesSetting])

  const changeOnlyBought: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    e.target.checked
      ? setUrlParam(e.target.name, e.target.value)
      : removeUrlParam(e.target.name);
    setIsOnlyBought(e.target.checked);
    applyFilters(coursesSetting);
  }, [coursesSetting])

  const acceptChange =useCallback( (isOnlyFree: boolean ,isOnlyBought: boolean) => {
    isOnlyFree
      ? setUrlParam("only-free", "yes")
      : removeUrlParam("only-free");
    isOnlyBought
      ? setUrlParam("only-bought", "yes")
      : removeUrlParam("only-bought");

    setIsOnlyFree(isOnlyFree)
    setIsOnlyBought(isOnlyBought)
    applyFilters(coursesSetting)
    filterMenuSetting?.hideMenu()
  }, [coursesSetting])

  useEffect(() => {
    removeUrlParam("only-bought")
    setIsOnlyBought(false);
    applyFilters(coursesSetting)
  } , [authSetting?.isLogin])

  useEffect(() => {    
    setIsOnlyFree(getUrlParam("only-free") === "yes")
    setIsOnlyBought(getUrlParam("only-bought") === "yes")
  }, [params?.category])

  return (
    <CoursesFilterContext.Provider
      value={{ isOnlyFree, isOnlyBought, changeOnlyFree, changeOnlyBought, acceptChange }}
    >
      {children}
    </CoursesFilterContext.Provider>
  );
};

export { CoursesFilterContext, CoursesFilterContextProvider };
