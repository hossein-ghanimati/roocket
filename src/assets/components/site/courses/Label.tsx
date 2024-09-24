import { CoursesContext } from "@/assets/contexts/site/courses.context";
import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";

const Label = () => {
  const params = useParams();
  const coursesSetting = useContext(CoursesContext);

  return (
    <>
      {useMemo(() => 
        <div className="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-15">
          <div className="flex gap-2.5 items-center">
            <span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
            <h2 className="text-center font-danaBold text-2xl lg:text-2.5xl">
              {params?.category
                ? `دوره های ${params?.category}`
                : "تمامی دوره ها"}
            </h2>
          </div>
          <span className="sm:text-xl font-danaMedium text-slate-500">
            <span id="count_item_archive">
              {coursesSetting?.mainCourses?.length}
            </span>{" "}
            دوره آموزشی{" "}
          </span>
        </div>
      , [coursesSetting?.mainCourses])}
    </>
  );
};

export default Label;
