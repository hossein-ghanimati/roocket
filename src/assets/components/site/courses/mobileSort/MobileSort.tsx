import { BsArrowDownUp } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import SortOption from "./SortOption";
import { useContext, useMemo } from "react";
import { CoursesSortMenuContext } from "@/assets/contexts/site/coursesSortMenuContext";
import { OverlayContext } from "@/assets/contexts/site/overlay.context";

const MobileSort = () => {
  const coursesSortMenuSetting = useContext(CoursesSortMenuContext);
  const overlaySetting = useContext(OverlayContext);
  return (
    <>
      {useMemo(
        () => (
          <div className="flex md:hidden items-center gap-6 mb-8">
            <SortOption onClick={() => null} title="فیلتر">
              <CiFilter className="size-6 shrink-0" />
            </SortOption>

            <SortOption onClick={() => {
              coursesSortMenuSetting?.setIsOpen(true)
              overlaySetting?.showOverlay()
            }} title="همه دوره ها">
              <BsArrowDownUp className="size-6 shrink-0" />
            </SortOption>
          </div>
        ),
        []
      )}
    </>
  );
};

export default MobileSort;
