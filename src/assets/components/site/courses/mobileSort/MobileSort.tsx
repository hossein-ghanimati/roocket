import { BsArrowDownUp } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import SortOption from "./SortOption";
import { useContext, useMemo } from "react";
import { CoursesSortMenuContext } from "@/assets/contexts/site/coursesSortMenuContext";
import { OverlayContext } from "@/assets/contexts/site/overlay.context";
import { CoursesSortContext } from "@/assets/contexts/site/coursesSort.context";

const MobileSort = () => {
  const coursesSortMenuSetting = useContext(CoursesSortMenuContext);
  const courseSortSetting = useContext(CoursesSortContext);
  const overlaySetting = useContext(OverlayContext);

  const sortTitle = useMemo(() => {
    let sortTitle = null
    switch (courseSortSetting?.sortOption) {
      case "all":
        sortTitle = "همه دوره ها"
        break;
      case "more-expensive":
        sortTitle = "گرانترین"
        break;
      case "less-expensive":
        sortTitle = "ارزانترین"
        break;
      case "popular":
        sortTitle = "محبوبترین"
        break;
    }

    return sortTitle
  }, [courseSortSetting?.sortOption])

  return (
    <div className="flex md:hidden items-center gap-6 mb-8">
      {useMemo(
        () => (
          <SortOption onClick={() => null} title="فیلتر">
            <CiFilter className="size-6 shrink-0" />
          </SortOption>
        ),
        []
      )}
      {useMemo(
        () => (
          <SortOption
            onClick={() => {
              coursesSortMenuSetting?.setIsOpen(true);
              overlaySetting?.showOverlay();
            }}
            title={sortTitle || ""}
          >
            <BsArrowDownUp className="size-6 shrink-0" />
          </SortOption>
        ),
        [sortTitle]
      )}
    </div>
  );
};

export default MobileSort;
