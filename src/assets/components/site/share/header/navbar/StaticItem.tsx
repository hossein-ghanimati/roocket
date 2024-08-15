import { memo } from "react";
import { NavLink } from "react-router-dom";

type Props = { 
  href: string ;
  title: string;
};

const StaticItem = memo(({ href, title }: Props) => {  
  return (
    <li className="font-medium hover:text-gray-700 hover:dark:text-white">
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive
            ? "text-gray-700 dark:text-white"
            : "text-gray-500 dark:text-gray-200"
        }
      >
        {title}
      </NavLink>
    </li>
  );
})

export default StaticItem;
