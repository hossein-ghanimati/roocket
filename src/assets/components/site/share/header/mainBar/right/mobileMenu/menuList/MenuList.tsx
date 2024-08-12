import MenuItemType from "@/assets/types/site/menuItem.type";
import { memo, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";
import sendGetReq from "@/assets/ts/requests/sendGetReq";

const MenuList = memo(() => {
  const [menuList, setMenuList] = useState<MenuItemType[]>([]);
  useEffect(() => {
    (async function () {
      const menus = await sendGetReq('menus')
      setMenuList(menus)
    }())
  }, []);

  return (
    <ul className="py-4 my-4 border-y border-gray-300 dark:border-gray-500 space-y-4">
      <li className="font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-gray-700 dark:text-gray-100"
              : "text-gray-500 dark:text-gray-400"
          }
        >
          خانه
        </NavLink>
      </li>
      <li className="font-medium">
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? "text-gray-700 dark:text-gray-100"
              : "text-gray-500 dark:text-gray-400"
          }
        >
          دوره ها
        </NavLink>
      </li>
      {menuList.map((menuItem) => (
        <MenuItem key={menuItem._id} {...menuItem} />
      ))}
    </ul>
  );
});

export default MenuList;
