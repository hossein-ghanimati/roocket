import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

type CoursesSortMenuContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const CoursesSortMenuContext = createContext<CoursesSortMenuContextType | null>(
  null
);

const CoursesSortMenuContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CoursesSortMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CoursesSortMenuContext.Provider>
  );
};

export { CoursesSortMenuContext, CoursesSortMenuContextProvider };
