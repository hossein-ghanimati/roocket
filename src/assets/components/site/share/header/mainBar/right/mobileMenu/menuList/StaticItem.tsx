import { memo } from "react";
import { NavLink } from "react-router-dom";
type Props = {
  href: string;
  title: string;
};
const StaticItem = memo(({ href, title }: Props) => {
  return (
    <li className="font-medium">
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive
            ? "text-gray-700 dark:text-gray-100"
            : "text-gray-500 dark:text-gray-400"
        }
      >
        {title}
      </NavLink>
    </li>
  );
});

export default StaticItem;
