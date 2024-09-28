import { memo, useContext } from "react"
import MenuActions from "./menuActions/MenuActions"
import MenuHeader from "./menuHeader/MenuHeader"
import MenuList from "./menuList/MenuList"
import { MobileMenuContext } from "@/assets/contexts/site/mobileMenu.context"
import CloserWrapper from "@/assets/components/elems/CloserWrapper"

const MobileMenu = memo(() => {
  const mobileMenuSetting = useContext(MobileMenuContext)

  return (
    <CloserWrapper closerFuncs={() => mobileMenuSetting?.closeMenu()} isHidden={!mobileMenuSetting?.isMenuOpen || false} hiddenClass="translate-x-full">
      <div onClick={e =>  e.stopPropagation()}  className={`w-[276px] h-full bg-white dark:bg-gray-900 p-4`}>
        <MenuHeader />
        <MenuList />
        <MenuActions />
      </div>
    </CloserWrapper>
  )
})

export default MobileMenu