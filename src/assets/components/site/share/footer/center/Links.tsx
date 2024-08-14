import  { memo } from "react";
import { Link } from "react-router-dom";

const Links = memo(() => {
  return (
    <div className="md:col-span-2">
      <div className="relative flex md:items-start md:mx-0  mx-auto w-fit-content items-center justify-center md:justify-start">
        <h3 className="text-xl relative font-bold dark:text-white text-gray-800 mb-4 z-10">
          بخش های سایت
        </h3>
        <span className="z-0 w-4 h-4 flex absolute bg-blue-700 opacity-20 top-0 rounded-full -right-2"></span>
      </div>
      <ul className="flex flex-col md:items-start items-center">
        <li className="mb-3 last:mb-0 flex items-center">
          <span className="md:flex hidden w-1 h-1 ml-2 mb-1 dark:text-gray-940 bg-blue-700 opacity-30 rounded-full"></span>
          <Link
            className="text-base text-biscay-650 dark:text-gray-920 transition transform dark:hover:text-blue-450 hover:text-dark-700 duration-200 ease-linear"
            to="/panel"
          >
           پنل کاربری شما
          </Link>
        </li>

        <li className="mb-3 last:mb-0 flex items-center">
          <span className="md:flex hidden w-1 h-1 ml-2 mb-1 dark:text-gray-940 bg-blue-700 opacity-30 rounded-full"></span>
          <Link
            className="text-base text-biscay-650 dark:text-gray-920 transition transform dark:hover:text-blue-450 hover:text-dark-700 duration-200 ease-linear"
            to="/contact-us"
          >
            ارتباط در سایت
          </Link>
        </li>

        <li className="mb-3 last:mb-0 flex items-center">
          <span className="md:flex hidden w-1 h-1 ml-2 mb-1 dark:text-gray-940 bg-blue-700 opacity-30 rounded-full"></span>
          <Link
            className="text-base text-biscay-650 dark:text-gray-920 transition transform dark:hover:text-blue-450 hover:text-dark-700 duration-200 ease-linear"
            to="/articles"
          >
            مقاله ها
          </Link>
        </li>

        <li className="mb-3 last:mb-0 flex items-center">
          <span className="md:flex hidden  w-1 h-1 ml-2 mb-1 bg-blue-700 opacity-30 rounded-full"></span>
          <Link
            className="text-base text-biscay-650 dark:text-gray-920 transition transform dark:hover:text-blue-450 hover:text-dark-700 duration-200 ease-linear"
            to="/search"
          >
            جستجو
          </Link>
        </li>        
      </ul>
    </div>
  );
})

export default Links;
