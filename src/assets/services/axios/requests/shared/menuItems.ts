import MenuItemType from "@/assets/types/site/menuItem.type";
import sendApiReq from "../../configs/apiReq";

const getMenuItems = async () => {
  const response = await sendApiReq().get("/menus")
  const menuItems: MenuItemType[] = response.data;

  return response.status < 300 ? menuItems : null
}

export {
  getMenuItems
}