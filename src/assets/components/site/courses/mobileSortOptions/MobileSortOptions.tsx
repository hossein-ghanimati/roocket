import { IoMdCloseCircleOutline } from "react-icons/io";
import SortOption from "./SortOption";



const MobileSortOptions = () => {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-20 translate-y-full transition-transform"
    >
      <div 
        className="flex h-16 items-center justify-between rounded-t-2xl px-5 bg-white dark:bg-gray-900"
      >
        <span className="text-lg">مرتب سازی بر اساس</span>
        <button>
          <IoMdCloseCircleOutline className="size-5"/>
        </button>
      </div>
      <div 
        className="bg-custom-white dark:bg-gray-800 px-5 divide-y divide-gray-300 dark:divide-gray-500"
      >
        <SortOption title="همه دوره ها" checked/>
        <SortOption title="گرانترین"/>
        <SortOption title="ارزانترین"/>
        <SortOption title="محبوبترین"/>
      </div>
    </div>
  );
};

export default MobileSortOptions;
