import { memo, useContext } from "react";
import staticMenuData from "@/assets/data/staticMenuData";
import StaticItem from "./StaticItem";
import DynamicItems from "./DynamicItems";
import { AuthContext } from "@/assets/contexts/share/auth.context";

const Navbar = memo(() => {
  const auth = useContext(AuthContext)

  return (
    <div className="hidden lg:flex items-center justify-center w-11/12 h-16 mx-auto rounded-b-3xl bg-gray-200 dark:bg-gray-700 ">
      <ul className="flex items-center justify-center gap-5 xl:gap-7">
        {[...staticMenuData]
          .splice(0, staticMenuData.length - 1)
          .map((item) => (
            <StaticItem key={`navbar-static__${item.href}`} {...item} />
          ))}

        <DynamicItems />

        {auth?.user?.role === "ADMIN" && <a target="_blank" href="https://hossein-ghanimati.github.io/asancode/panel/main" className="text-gray-500 dark:text-gray-200">
            پنل مدیریت
          </a>}
      </ul>
    </div>
  );
});

export default Navbar;
