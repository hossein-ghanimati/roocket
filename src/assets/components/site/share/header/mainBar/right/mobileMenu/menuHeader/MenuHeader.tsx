import { memo} from "react"
import HeaderCloseBtn from "./HeaderCloseBtn";
import MenuForm from "./MenuForm";
import StaticLogo from "@/assets/components/elems/StaticLogo";


const MenuHeader = memo(() => {
  


  return (
    <div>
      <HeaderCloseBtn/>

      <StaticLogo customClass="mt-1 flex items-center justify-center"/>

      <MenuForm/>
    </div>
  )
})

export default MenuHeader