import MenuItemType from "@/assets/types/site/menuItem.type";
import { memo, useEffect, useMemo, useState } from "react";
import MenuItem from "./MenuItem";
import sendGetReq from "@/assets/ts/utils/requests/sendGetReq";
import staticMenuData from "@/assets/data/staticMenuData";
import StaticItem from "./StaticItem";

const MenuList = memo(() => {
  const [menuList, setMenuList] = useState<MenuItemType[]>([]);
  useEffect(() => {
    (async function () {
      const menus = await sendGetReq("menus");
      setMenuList(menus);
    })();
  }, []);

  return (
    <ul className="py-4 my-4 border-y border-gray-300 dark:border-gray-500 space-y-4">
      {useMemo(
        () =>
          [...staticMenuData]
            .splice(0, staticMenuData.length - 1)
            .map((item) => (
              <StaticItem key={`mobile-static__${item.href}`} {...item} />
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
  );
});

export default MenuList;
