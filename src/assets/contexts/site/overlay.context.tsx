
import { FC, PropsWithChildren, createContext, memo, useState } from "react"

type OverlayContextType = {
  isOpen: boolean;
  hideOverlay: () => void;
  showOverlay: () => void;
  toggleOverlay: () => void;
}


const OverlayContext = createContext<OverlayContextType | null>(null)

const OverlayContextProvider: FC<PropsWithChildren> = memo (({children}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const hideOverlay = () => setIsOpen(false)
  const showOverlay = () => setIsOpen(true)
  const toggleOverlay = () => setIsOpen(!isOpen)

  return <OverlayContext.Provider value={{isOpen, hideOverlay, showOverlay, toggleOverlay}} >
    {children}
  </OverlayContext.Provider>
})

export {
  OverlayContext,
  OverlayContextProvider
}

