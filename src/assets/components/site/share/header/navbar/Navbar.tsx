import { memo, useEffect, useMemo, useState } from "react";
import MenuItem from "./MenuItem";
import MenuItemType from "@/assets/types/site/menuItem.type";
import sendGetReq from "@/assets/ts/requests/sendGetReq";
import staticMenuData from "@/assets/data/staticMenuData";
import StaticItem from "./StaticItem";

const Navbar = memo(() => {
  const [menuList, setMenuList] = useState<MenuItemType[]>([]);

  useEffect(() => {
    (async function () {
      const menus = await sendGetReq("menus");
      setMenuList(menus);
    })();
  }, []);

  return (
    <div className="hidden lg:flex items-center justify-center w-11/12 h-16 mx-auto rounded-b-3xl bg-gray-200 dark:bg-gray-700 ">
      <ul className="flex items-center justify-center gap-5 xl:gap-7">
        {useMemo(
          () =>
            [...staticMenuData]
              .splice(0, staticMenuData.length - 1)
              .map((item) => (
                <StaticItem key={`navbar-static__${item.href}`} {...item} />
              )),
          []
        )}

        {useMemo(
          () =>
            menuList.length
              ? menuList.map((menuItem) => (
                  <MenuItem key={menuItem._id} {...menuItem} />
                ))
              : "",
          [menuList]
        )}

        {useMemo(
          () => (
            <StaticItem {...staticMenuData[staticMenuData.length - 1]} />
          ),
          []
        )}
      </ul>
    </div>
  );
});

export default Navbar;
