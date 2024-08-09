
import { FC, PropsWithChildren, createContext, memo, useState } from "react"

type OverlayContexType = {
  isOpen: boolean;
  hideOverlay: () => void;
  showOverlay: () => void;
  toggleOverlay: () => void;
}


const OverlayContex = createContext<OverlayContexType | null>(null)

const OverlayContexProvider: FC<PropsWithChildren> = memo (({children}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const hideOverlay = () => setIsOpen(false)
  const showOverlay = () => setIsOpen(true)
  const toggleOverlay = () => setIsOpen(!isOpen)

  return <OverlayContex.Provider value={{isOpen, hideOverlay, showOverlay, toggleOverlay}} >
    {children}
  </OverlayContex.Provider>
})

export {
  OverlayContex,
  OverlayContexProvider
}

