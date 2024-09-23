import { IoMdCloseCircleOutline } from "react-icons/io";
import { GoTrash } from "react-icons/go";

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
        <label className="relative cursor-pointer select-none w-full flex items-center justify-between py-5">
          <span className="select-none">
            فقط دوره های رایگان
          </span>
          <input
            className="toggle__input hidden"
            type="checkbox"
            name="only_free"
            value="yes"
          />
          <span className="toggle__marker relative block h-6 w-[46px] rounded-full bg-custom-white dark:bg-gray-800 transition-all duration-150">
            <span className="toggle__marker-circle absolute top-0 bottom-0 right-1 my-auto size-4 rounded-full bg-white dark:bg-gray-900 transition-all"></span>
          </span>
        </label>
        <label className="relative cursor-pointer select-none w-full flex items-center justify-between py-5">
          <span className="select-none">در حال پیش فروش</span>
          <input
            className="toggle__input hidden"
            type="checkbox"
            name="presell"
            value="yes"
          />
          <span className="toggle__marker relative block h-6 w-[46px] rounded-full bg-custom-white dark:bg-gray-800 transition-all duration-150">
            <span className="toggle__marker-circle absolute top-0 bottom-0 right-1 my-auto size-4 rounded-full bg-white dark:bg-gray-900 transition-all"></span>
          </span>
        </label>
        <label className="relative cursor-pointer select-none w-full flex items-center justify-between py-5">
          <span className="select-none">
            دوره ها خریداری شده
          </span>
          <input
            className="toggle__input hidden"
            type="checkbox"
            name="enrolled"
            value="yes"
          />
          <span className="toggle__marker relative block h-6 w-[46px] rounded-full bg-custom-white dark:bg-gray-800 transition-all duration-150">
            <span className="toggle__marker-circle absolute top-0 bottom-0 right-1 my-auto size-4 rounded-full bg-white dark:bg-gray-900 transition-all"></span>
          </span>
        </label>
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
