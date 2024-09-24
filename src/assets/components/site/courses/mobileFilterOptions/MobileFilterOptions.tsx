import { IoMdCloseCircleOutline } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import FilterOption from "./FilterOption";

const MobileFilterOptions = () => {
  return (
    <div className="invisible opacity-0 fixed inset-0 z-20 flex size-full flex-col bg-white dark:bg-gray-900 transition-all">
      <div className="flex h-24 items-center justify-between bg-custom-white dark:bg-gray-800 px-5">
        <div className="flex items-center justify-center gap-2">
          <button className="filter__close-btn flex items-center justify-center">
            <IoMdCloseCircleOutline className="size-6" />
          </button>
          <span className="font-danaDemiBold text-lg">فیلترها</span>
        </div>
        <button className="text-red-700 dark:text-red-500 flex items-center justify-center gap-2">
          حذف فیلتر ها
          <GoTrash className="size-6" />
        </button>
      </div>
      <div
        className="px-5 divide-y divide-gray-300 dark:divide-gray-500"
      >
        <FilterOption title="فقط دوره های رایگان"/>
        <FilterOption title="دوره های خریداری شده"/>
      </div>
      <div
        className="mt-5 flex h-full items-end px-5 pb-8"
      >
        <button className="w-full text-white bg-green-500 px-4 h-12 leading-7 cursor-pointer select-none rounded-full">
          اعمال فیلتر
        </button>
      </div>
    </div>
  );
};

export default MobileFilterOptions;
