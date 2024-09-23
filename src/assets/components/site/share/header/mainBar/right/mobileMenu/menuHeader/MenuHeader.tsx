import { memo} from "react"
import HeaderCloseBtn from "./HeaderCloseBtn";
import MenuLogo from "./MenuLogo";
import MenuForm from "./MenuForm";


const MenuHeader = memo(() => {
  


  return (
    <div>
      <HeaderCloseBtn/>

      <MenuLogo/>

      <MenuForm/>
    </div>
  )
})

export default MenuHeader