import MenuItemType from "@/assets/types/site/menuItem.type";
import { memo, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";

const Navbar = memo(() => {
  const [menuList, setMenuList] = useState<MenuItemType[]>([]);

  useEffect(() => {
    setMenuList([
      {
        id: "21f1be62-aaaf-4e6d-b6c9-2e8b0ecff14b",
        title: "آموزش فرانت اند",
        href: "front",
        subItems: [
          {
            id: "be5d9cbd-fd9e-4d44-a1df-d19bddbbdb59",
            title: "دوره Html",
            href: "html",
          },
          {
            id: "f532120e-b9fe-4425-9178-35799ae1decb",
            title: "دوره css",
            href: "css",
          },
          {
            id: "33f19a81-a718-434d-b63f-393ce2b65b0f",
            title: "دوره javascript",
            href: "javascript",
          },
          {
            id: "ada044f4-7d5d-4939-9451-ffcb9c4e668c",
            title: "دوره reactJS",
            href: "react",
          },
        ],
      },
      {
        id: "1c1f73f7-2006-4935-9108-efa71303d7d3",
        title: "آموزش نود",
        href: "node",
        subItems: [
          {
            id: "9c96ce1a-8f32-401c-ae9a-5edab86e675d",
            title: "دوره node",
            href: "node",
          },
          {
            id: "8d524992-fa2a-4fcf-a073-7ecdea41f81a",
            title: "دوره fastify",
            href: "fastify",
          },
          {
            id: "e3bcf158-5192-4b44-a04f-e2c375f18407",
            title: "دوره nest",
            href: "nest",
          },
        ],
      },
      {
        id: "0e838f2c-c8c2-4c93-8853-ae2fb1fa3b88",
        title: "آموزش php",
        href: "php",
        subItems: [
          {
            id: "827ddb5c-12ba-491e-9bbd-a63cec8192c0",
            title: "دوره php",
            href: "php",
          },
          {
            id: "85b36a9c-33fe-4e60-9ae8-cd0c9dea5d6b",
            title: "دوره laravel",
            href: "black-python",
          },
          {
            id: "7d6f00b8-2e3a-4cfc-a5fe-dfc4b78b3e58",
            title: "دوره رباط با php",
            href: "django",
          },
        ],
      },
      {
        id: "7a615c6c-2236-4b19-ad2a-0a81b01ea23e",
        title: "آموزش پایتون",
        href: "python",
        subItems: [
          {
            id: "8d879a67-a6d3-4032-b93a-cb42b09559dc",
            title: "دوره پایتون",
            href: "python",
          },
          {
            id: "bd849c55-d4a2-4125-b5a6-b9ccd792e392",
            title: "دوره پایتون سیاه",
            href: "black-python",
          },
          {
            id: "6665c9ac-007d-437f-98d5-7d21c077a76f",
            title: "دوره جنگو",
            href: "django",
          },
          {
            id: "be5f997d-2340-447f-9e6e-11cc7df22fe8",
            title: "دوره فلاسک",
            href: "flask",
          },
        ],
      },
    ]);
  }, []);

  return (
    <div className="hidden lg:flex items-center justify-center w-11/12 h-16 mx-auto rounded-b-3xl bg-gray-200 dark:bg-gray-700 ">
      {menuList.length && (
        <ul className="flex items-center justify-center gap-7">
          <li className="font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-700 dark:text-white"
                  : "text-gray-500 dark:text-gray-200"
              }
            >
              خانه
            </NavLink>
          </li>
          <li className="font-medium">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-700 dark:text-white"
                  : "text-gray-500 dark:text-gray-300"
              }
            >
              دوره ها
            </NavLink>
          </li>

          {menuList.map((menuItem) => (
            <MenuItem key={menuItem.id} {...menuItem} />
          ))}
        </ul>
      )}
    </div>
  );
});

export default Navbar;
