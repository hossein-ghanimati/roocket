// import sendGetReq from "@/assets/ts/utils/requests/sendGetReq";
import useMenuItems from "@/assets/hooks/shared/useMenuItems";
import MenuItemType from "@/assets/types/site/menuItem.type";
import {
  FC,
  PropsWithChildren,
  createContext,
  memo,
} from "react";

const MenuItemsContext = createContext<undefined | null | MenuItemType[]>(null);

const MenuItemsContextProvider: FC<PropsWithChildren> = memo(({ children }) => {
  const {menuItems} = useMenuItems()
  

  return (
    <MenuItemsContext.Provider value={menuItems}>
      {children}
    </MenuItemsContext.Provider>
  );
});

export { MenuItemsContext, MenuItemsContextProvider };
