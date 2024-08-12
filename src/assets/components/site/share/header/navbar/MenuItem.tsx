import MenuItemType from "@/assets/types/site/menuItem.type";
import { memo } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const MenuItem = memo(({ title, href, submenus }: MenuItemType) => {
  return (
    <li className="group relative">
      <div className="flex items-center justify-between gap-1 cursor-pointer">
        <NavLink
          to={`/courses/${href}`}
          className={({ isActive }) =>
            `font-medium hover:text-gray-700 hover:dark:text-white ${isActive ? "text-gray-700 dark:text-white" : "text-gray-500 dark:text-gray-300"}`
          }
        >
          {title}
        </NavLink>

        {submenus?.length ? (
          <FaAngleDown className="transition text-gray-500 dark:text-gray-300 group-hover:rotate-180" />
        ): ""}
      </div>

      {submenus?.length ? (
        <div
          className="group-hover:block hidden absolute top-full pt-5 z-10"
        >
          <ul
            className={`w-48 m-2 p-2 space-y-1 rounded-md border border-gray-300 dark:border-gray-800 bg-gray-200 dark:bg-gray-700 shadow-lg`}
          >
            {submenus?.map((subItem) => (
              <li key={subItem._id}>
                <NavLink
                  to={`/course/${subItem.href}`}
                  className={({ isActive }) =>
                    `font-medium hover:text-gray-700 hover:dark:text-white  ${isActive ? "text-gray-700 dark:text-white" : "text-gray-500 dark:text-gray-300"}`
                  }
                >
                  {subItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ): ""}
    </li>
  );
});

export default MenuItem;
