import { memo } from "react"
import MainBar from "./mainBar/MainBar"
import Navbar from "./navbar/Navbar"
import { MenuItemsContextProvider } from "@/assets/contexts/site/menuItems.context"

const Header = memo(() => {
  return (
    <header
     className="container mt-8">
      <MenuItemsContextProvider>
        <MainBar />
        <Navbar />
      </MenuItemsContextProvider>
    </header>
  )
})

export default Header