import { MenuItemsContext } from "@/assets/contexts/site/menuItems.context"
import { memo, useContext } from "react"
import MenuItem from "./MenuItem"

const DynamicItems = memo(() => {
  const menuList = useContext(MenuItemsContext);

  return (
    menuList?.length
    ? menuList.map((menuItem) => 
        <MenuItem key={menuItem._id} {...menuItem} />
      )
    : ""
  )
})

export default DynamicItems