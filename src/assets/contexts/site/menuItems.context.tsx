import sendGetReq from "@/assets/ts/utils/requests/sendGetReq";
import MenuItemType from "@/assets/types/site/menuItem.type";
import {
  FC,
  PropsWithChildren,
  createContext,
  memo,
  useEffect,
  useState,
} from "react";

const MenuItemsContext = createContext<null | MenuItemType[]>(null);

const MenuItemsContextProvider: FC<PropsWithChildren> = memo(({ children }) => {
  const [menuList, setMenuList] = useState<MenuItemType[]>([]);
  useEffect(() => {
    (async function () {
      const menus = await sendGetReq("menus");
      setMenuList(menus);
    })();
  }, []);
  

  return (
    <MenuItemsContext.Provider value={menuList}>
      {children}
    </MenuItemsContext.Provider>
  );
});

export { MenuItemsContext, MenuItemsContextProvider };
