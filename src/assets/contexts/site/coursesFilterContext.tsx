import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

type yesNoType = "yes" | false;
type coursesFilterContextType = {
  isOnlyFree: yesNoType;
  isOnlyBought: yesNoType;
  setIsOnlyFree: Dispatch<SetStateAction<yesNoType>>;
  setIsOnlyBought: Dispatch<SetStateAction<yesNoType>>;
};

const coursesFilterContext = createContext<coursesFilterContextType | null>(
  null
);

const coursesFilterContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOnlyFree, setIsOnlyFree] = useState<yesNoType>(false);
  const [isOnlyBought, setIsOnlyBought] = useState<yesNoType>(false);

  return (
    <coursesFilterContext.Provider
      value={{ isOnlyFree, isOnlyBought, setIsOnlyFree, setIsOnlyBought }}
    >
      {children}
    </coursesFilterContext.Provider>
  );
};

export { coursesFilterContext, coursesFilterContextProvider };
