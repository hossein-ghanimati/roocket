import { useCallback, useContext } from "react";
import OptionItem from "./OptionItem";
import SortOptionsType from "@/assets/types/site/sortOptions.type";
import { CoursesSortContext } from "@/assets/contexts/site/coursesSort.context";

const Options = () => {
  const courseSortSetting = useContext(CoursesSortContext)

  const changeHandler = useCallback((id: SortOptionsType) => {
    courseSortSetting?.setOption(id)
  }, []);

  return (
    <div className="flex gap-x-5 lg:gap-x-8 h-full">
      <OptionItem
        onChange={changeHandler}
        checkedID={courseSortSetting?.sortOption || "all"}
        id="all"
        title="همه دوره ها"
      />
      <OptionItem
        onChange={changeHandler}
        checkedID={courseSortSetting?.sortOption || "all"}
        id="more-expensive"
        title="گرانترین"
      />
      <OptionItem
        onChange={changeHandler}
        checkedID={courseSortSetting?.sortOption || "all"}
        id="less-expensive"
        title="ارزانترین"
      />
      <OptionItem
        onChange={changeHandler}
        checkedID={courseSortSetting?.sortOption || "all"}
        id="popular"
        title="محبوبترین"
      />
    </div>
  );
};

export default Options;
