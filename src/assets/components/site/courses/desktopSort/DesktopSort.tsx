import { BsArrowDownUp } from "react-icons/bs";
import Options from "./Options";

const DesktopSort = () => {  
  return (
    <div className="hidden md:flex items-center gap-x-6 px-5 mb-8 h-16 bg-white dark:bg-gray-900 shadow-normal dark:shadow-none rounded-xl">
      <div className="flex items-center shrink-0 gap-x-2">
        <BsArrowDownUp className="size-7"/>
        <span>مرتب سازی بر اساس :</span>
      </div>

      <Options/>
    </div>
  );
};

export default DesktopSort;
