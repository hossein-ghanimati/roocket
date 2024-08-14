
import { memo, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";
import MenuItemType from "@/assets/types/site/menuItem.type";
import sendGetReq from "@/assets/ts/requests/sendGetReq";

const Navbar = memo(() => {
  const [menuList, setMenuList] = useState<MenuItemType[]>([]);

  useEffect(() => {
    (async function () {
      const menus = await sendGetReq('menus')
      setMenuList(menus)
    }())
  }, []);

  return (
    <div className="hidden lg:flex items-center justify-center w-11/12 h-16 mx-auto rounded-b-3xl bg-gray-200 dark:bg-gray-700 ">
      
        <ul className="flex items-center justify-center gap-7">
          <li className="font-medium hover:text-gray-700 hover:dark:text-white">
            <NavLink
              to="/#latest-courses"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-700 dark:text-white"
                  : "text-gray-500 dark:text-gray-200"
              }
            >
              خانه
            </NavLink>
          </li>
          <li className="font-medium hover:text-gray-700 hover:dark:text-white">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-700 dark:text-white"
                  : "text-gray-500 dark:text-gray-300"
              }
            >
              دوره ها
            </NavLink>
          </li>

          {menuList.length ? 
            menuList.map((menuItem) => (
            <MenuItem key={menuItem._id} {...menuItem} />
            ))
          : ""}
        </ul>
      
    </div>
  );
});

export default Navbar;
