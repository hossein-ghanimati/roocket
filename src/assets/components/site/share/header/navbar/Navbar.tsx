import { memo } from "react";
import staticMenuData from "@/assets/data/staticMenuData";
import StaticItem from "./StaticItem";
import DynamicItems from "./DynamicItems";

const Navbar = memo(() => {
  return (
    <div className="hidden lg:flex items-center justify-center w-11/12 h-16 mx-auto rounded-b-3xl bg-gray-200 dark:bg-gray-700 ">
      <ul className="flex items-center justify-center gap-5 xl:gap-7">
        {[...staticMenuData]
          .splice(0, staticMenuData.length - 1)
          .map((item) => (
            <StaticItem key={`navbar-static__${item.href}`} {...item} />
          ))}

        <DynamicItems />

        {<StaticItem {...staticMenuData[staticMenuData.length - 1]} />}
      </ul>
    </div>
  );
});

export default Navbar;
