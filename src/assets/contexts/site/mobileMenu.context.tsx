import { FC, PropsWithChildren, createContext, useCallback, useContext, useState } from "react";
import { OverlayContext } from "./overlay.context";

type MobileMenuContextType = {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const MobileMenuContext = createContext<null | MobileMenuContextType>(null)

const MobileMenuContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const overlaySetting = useContext(OverlayContext)

  const openMenu = useCallback(() => {
    overlaySetting?.showOverlay();
    setIsMenuOpen(true)
  }, [])
  const closeMenu = useCallback(() => {
    overlaySetting?.hideOverlay();
    setIsMenuOpen(false)
  }, [])

  return (
    <MobileMenuContext.Provider value={{isMenuOpen, openMenu, closeMenu}}>
      {
        children
      }
    </MobileMenuContext.Provider>
  )
}

export {
  MobileMenuContext,
  MobileMenuContextProvider
}