import { IoMdCloseCircleOutline } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import FilterOption from "./FilterOption";
import { useContext, useEffect, useState } from "react";
import { CoursesFilterContext } from "@/assets/contexts/site/coursesFilter.context";
import { CoursesFilterMenuContext } from "@/assets/contexts/site/coursesFilterMenu.context";
import { AuthContext } from "@/assets/contexts/share/auth.context";

const MobileFilterOptions = () => {
  const coursesFilterSetting = useContext(CoursesFilterContext);
  const filterMenuSetting = useContext(CoursesFilterMenuContext);
  const authSetting = useContext(AuthContext);

  const [onlyFree, setOnlyFree] = useState(
    coursesFilterSetting?.isOnlyFree || false
  );
  const [onlyBought, setOnlyBought] = useState(
    coursesFilterSetting?.isOnlyBought || false
  );

  useEffect(
    () => setOnlyFree(coursesFilterSetting?.isOnlyFree || false),
    [coursesFilterSetting?.isOnlyFree]
  );
  useEffect(
    () => setOnlyBought(coursesFilterSetting?.isOnlyBought || false),
    [coursesFilterSetting?.isOnlyBought]
  );

  useEffect(() => {
    setOnlyFree(coursesFilterSetting?.isOnlyFree || false);
    setOnlyBought(coursesFilterSetting?.isOnlyBought || false);
  }, [filterMenuSetting?.isMenuOpen]);

  return (
    <div
      className={`${filterMenuSetting?.isMenuOpen ? "" : "invisible opacity-0"} md:hidden fixed inset-0 z-20 flex size-full flex-col bg-white dark:bg-gray-900 transition-all`}
    >
      <div className="flex h-24 items-center justify-between bg-custom-white dark:bg-gray-800 px-5">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => filterMenuSetting?.hideMenu()}
            className="filter__close-btn flex items-center justify-center"
          >
            <IoMdCloseCircleOutline className="size-6" />
          </button>
          <span className="font-danaDemiBold text-lg">فیلترها</span>
        </div>
        <button
          onClick={() => {
            setOnlyFree(false);
            setOnlyBought(false);
          }}
          className="text-red-700 dark:text-red-500 flex items-center justify-center gap-2"
        >
          حذف فیلتر ها
          <GoTrash className="size-6" />
        </button>
      </div>
      <div className="px-5 divide-y divide-gray-300 dark:divide-gray-500">
        <FilterOption
          checked={onlyFree}
          onChange={(e) => setOnlyFree(e.target.checked)}
          title="فقط دوره های رایگان"
        />
        {authSetting?.isLogin ? (
          <FilterOption
            checked={onlyBought}
            onChange={(e) => setOnlyBought(e.target.checked)}
            title="دوره های خریداری شده"
          />
        ) : (
          ""
        )}
      </div>
      <div className="mt-5 flex h-full items-end px-5 pb-8">
        <button
          onClick={() =>
            coursesFilterSetting?.acceptChange(onlyFree, onlyBought)
          }
          className="w-full text-white bg-green-500 px-4 h-12 leading-7 cursor-pointer select-none rounded-full"
        >
          اعمال فیلتر
        </button>
      </div>
    </div>
  );
};

export default MobileFilterOptions;
