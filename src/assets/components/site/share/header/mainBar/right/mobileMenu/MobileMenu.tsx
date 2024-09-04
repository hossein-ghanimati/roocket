import MenuActions from "./menuActions/MenuActions"
import MenuHeader from "./MenuHeader"
import MenuList from "./menuList/MenuList"

type Props = {
  isMenuOpen: boolean
  onClose: () => void
}

const MobileMenu = (({isMenuOpen, onClose}: Props) => {
  return (
    <div onClick={() => onClose()} className={`w-full h-screen fixed top-0 right-0 bottom-0 z-40 transition ${isMenuOpen? "" : "translate-x-full"}`}>
      <div onClick={e =>  e.stopPropagation()}  className={`w-[276px] h-full bg-white dark:bg-gray-900 p-4`}>
        <MenuHeader onClose={onClose}/>
        <MenuList />
        <MenuActions />
      </div>
    </div>
  )
})

export default MobileMenu