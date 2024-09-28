import { IoMdCloseCircleOutline } from "react-icons/io";
import SortOption from "./SortOption";
import { useCallback, useContext, useMemo } from "react";
import { CoursesSortContext } from "@/assets/contexts/site/coursesSort.context";
import SortOptionsType from "@/assets/types/site/sortOptions.type";
import { CoursesSortMenuContext } from "@/assets/contexts/site/coursesSortMenuContext";
import { OverlayContext } from "@/assets/contexts/site/overlay.context";
import CloserWrapper from "@/assets/components/elems/CloserWrapper";

const MobileSortOptions = () => {
  const courseSortSetting = useContext(CoursesSortContext);
  const coursesSortMenuSetting = useContext(CoursesSortMenuContext);
  const overlaySetting = useContext(OverlayContext);

  const clickHandler = useCallback((id: SortOptionsType) => {
    courseSortSetting?.setOption(id);
  }, []);

  const closerFuncs = useCallback(() => {
    coursesSortMenuSetting?.setIsOpen(false);
    overlaySetting?.hideOverlay();
  }, [])

  return (
    <>
      {useMemo(
        () => (
          
          <CloserWrapper
            closerFuncs={closerFuncs}
            isHidden={coursesSortMenuSetting?.isOpen === undefined ? true : !coursesSortMenuSetting.isOpen}
            hiddenClass="translate-y-full"
            customClass="md:hidden"
          >
            <div
              className={`absolute bottom-0 left-0 right-0 z-40`}
            >
              <div className="flex h-16 items-center justify-between rounded-t-2xl px-5 bg-white dark:bg-gray-900">
                <span className="text-lg">مرتب سازی بر اساس</span>
                <button
                  onClick={closerFuncs}
                >
                  <IoMdCloseCircleOutline className="size-5" />
                </button>
              </div>
              <div className="bg-custom-white dark:bg-gray-800 px-5 divide-y divide-gray-300 dark:divide-gray-500">
                <SortOption
                  onClick={clickHandler}
                  checkedID={courseSortSetting?.sortOption || "all"}
                  id="all"
                  title="همه دوره ها"
                />
                <SortOption
                  onClick={clickHandler}
                  checkedID={courseSortSetting?.sortOption || "all"}
                  id="more-expensive"
                  title="گرانترین"
                />
                <SortOption
                  onClick={clickHandler}
                  checkedID={courseSortSetting?.sortOption || "all"}
                  id="less-expensive"
                  title="ارزانترین"
                />
                <SortOption
                  onClick={clickHandler}
                  checkedID={courseSortSetting?.sortOption || "all"}
                  id="popular"
                  title="محبوبترین"
                />
              </div>
            </div>
          </CloserWrapper>
        ),
        [courseSortSetting?.sortOption, coursesSortMenuSetting?.isOpen]
      )}
    </>
  );
};

export default MobileSortOptions;
