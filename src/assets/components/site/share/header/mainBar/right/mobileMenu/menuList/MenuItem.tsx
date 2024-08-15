import MenuItemType from "@/assets/types/site/menuItem.type";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

const MenuItem = memo(({ _id, title, href, submenus }: MenuItemType) => {
  return (
    <li>
      <label htmlFor={`mobile-menu_${_id}}`} className="block space-y-1 cursor-pointer">       
       <div className="flex items-center justify-between">
          <NavLink 
            to={`/courses/${href}`}  
            className={({isActive}) => `font-medium  ${isActive ? "text-gray-700 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"}`}
          >
            {title}
          </NavLink>

          {
            submenus?.length ? <FaAngleLeft className="text-gray-500 dark:text-gray-400"/> : ""
          }
        </div>
        
        <input
          type="radio"
          name="mobile-menu-item"
          id={`mobile-menu_${_id}}`}
          className="mobile-menu-item__input hidden"
        />
        
        {submenus?.length ? (
          <ul
            className={`mobile-menu-item__dropdown hidden m-2 p-2 space-y-1 rounded bg-custom-white dark:bg-gray-800`}
          >
            {submenus?.map((subItem) => (
              <li key={subItem._id}>
                <NavLink 
                  to={`/course/${subItem.href}`}
                  className={({isActive}) => `font-medium line-clamp-1  ${isActive ? "text-gray-700 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"}`}
                >
                  {subItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
        ): ""}
      </label>
    </li>
  );
});

export default MenuItem;
