import { FC, PropsWithChildren, createContext, useState } from "react";

type CoursesFilterMenuContextType = {
  isMenuOpen: boolean;
  openMenu: () => void;
  hideMenu: () => void;
};
const CoursesFilterMenuContext =
  createContext<CoursesFilterMenuContextType | null>(null);
const CoursesFilterMenuContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const hideMenu = () => setIsMenuOpen(false);

  return (
    <CoursesFilterMenuContext.Provider
      value={{ isMenuOpen, openMenu, hideMenu }}
    >
      {
        children
      }
    </CoursesFilterMenuContext.Provider>
  );
};

export { CoursesFilterMenuContext, CoursesFilterMenuContextProvider };
