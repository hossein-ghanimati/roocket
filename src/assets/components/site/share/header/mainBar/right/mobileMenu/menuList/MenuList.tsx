
import { memo } from "react";
import staticMenuData from "@/assets/data/staticMenuData";
import StaticItem from "./StaticItem";
import DynamicItems from "./DynamicItems";

const MenuList = memo(() => {
  return (
    <ul className="py-4 my-4 border-y border-gray-300 dark:border-gray-500 space-y-4">
      {[...staticMenuData].splice(0, staticMenuData.length - 1).map((item) => (
        <StaticItem key={`mobile-static__${item.href}`} {...item} />
      ))}

      <DynamicItems />

      {<StaticItem {...staticMenuData[staticMenuData.length - 1]} />}
    </ul>
  );
});

export default MenuList;
