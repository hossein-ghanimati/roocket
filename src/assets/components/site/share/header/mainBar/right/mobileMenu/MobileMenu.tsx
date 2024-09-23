import { memo, useContext } from "react"
import MenuActions from "./menuActions/MenuActions"
import MenuHeader from "./menuHeader/MenuHeader"
import MenuList from "./menuList/MenuList"
import { MobileMenuContext } from "@/assets/contexts/site/mobileMenu.context"

const MobileMenu = memo(() => {
  const mobileMenuSetting = useContext(MobileMenuContext)

  return (
    <div onClick={() => mobileMenuSetting?.closeMenu()} className={`w-full h-screen fixed top-0 right-0 bottom-0 z-40 transition ${mobileMenuSetting?.isMenuOpen? "" : "translate-x-full"}`}>
      <div onClick={e =>  e.stopPropagation()}  className={`w-[276px] h-full bg-white dark:bg-gray-900 p-4`}>
        <MenuHeader />
        <MenuList />
        <MenuActions />
      </div>
    </div>
  )
})

export default MobileMenu