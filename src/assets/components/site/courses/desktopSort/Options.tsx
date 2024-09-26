import { useCallback, useContext, useState } from "react";
import OptionItem from "./OptionItem";
import { CoursesContext } from "@/assets/contexts/site/courses.context";
import { renderCoursesSort } from "@/assets/ts/courses/shared";
import SortOptionsType from "@/assets/types/site/sortOptions.type";
import { setUrlParam } from "@/assets/ts/utils/url";

const Options = () => {
  const [checkedID, setCheckedID] = useState("all");
  const coursesSetting = useContext(CoursesContext)

  const changeHandler = useCallback((id: SortOptionsType) => {
    setCheckedID(id);    
    const sortedCourses = renderCoursesSort(coursesSetting?.shownCourses || [] ,id)
    console.log(sortedCourses);
    
    coursesSetting?.setShownCourses(sortedCourses)
    coursesSetting?.setPaginationNumber(1)
    setUrlParam("page", 1)
  }, [coursesSetting]);

  return (
    <div className="flex gap-x-5 lg:gap-x-8 h-full">
      <OptionItem
        onChange={changeHandler}
        checkedID={checkedID}
        id="all"
        title="همه دوره ها"
      />
      <OptionItem
        onChange={changeHandler}
        checkedID={checkedID}
        id="more-expensive"
        title="گرانترین"
      />
      <OptionItem
        onChange={changeHandler}
        checkedID={checkedID}
        id="less-expensive"
        title="ارزانترین"
      />
      <OptionItem
        onChange={changeHandler}
        checkedID={checkedID}
        id="popular"
        title="محبوبترین"
      />
    </div>
  );
};

export default Options;
