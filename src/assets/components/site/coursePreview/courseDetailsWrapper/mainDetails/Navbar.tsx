import { memo } from "react";

const Navbar = memo(() => {
  return (
    <div className="py-4 shadow-sm overflow-x-auto bg-white dark:bg-gray-900  rounded-lg mb-8 sticky top-1 z-30">
      <ul className="flex items-center px-6  quick_acsess_header">
        <li className="ml-8 sm:w-fit-content ">
          <a href="#description" className="text-15 whitespace-nowrap text-gray-400 dark:hover:text-white hover:text-gray-700 duration-200 transition flex items-center">
            <i className="ml-1 w-1 h-1 rounded-full flex"></i>
            توضیحات
          </a>
        </li>

        <li className="ml-8 sm:w-fit-content ">
          <a href="#garanti" className="text-15 whitespace-nowrap text-gray-400 dark:hover:text-white hover:text-gray-700 duration-200 transition flex items-center">
            <i className="ml-1 w-1 h-1 rounded-full flex"></i>
            گارانتی بازگشت وجه
          </a>
        </li>

        <li className="ml-8 sm:w-fit-content ">
          <a href="#sessions" className="text-15 whitespace-nowrap text-gray-400 dark:hover:text-white hover:text-gray-700 duration-200 transition flex items-center">
            <i className="ml-1 w-1 h-1 rounded-full flex"></i>
            جلسات دوره
          </a>
        </li>

        <li className="ml-8 sm:w-fit-content ">
          <a href="#comments" className="text-15 whitespace-nowrap text-gray-400 dark:hover:text-white hover:text-gray-700 duration-200 transition flex items-center">
            <i className="ml-1 w-1 h-1 rounded-full flex"></i>
            دیدگاه و پرسش
          </a>
        </li>
      </ul>
    </div>
  );
});

export default Navbar;
