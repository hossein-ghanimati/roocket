import { CourseBoxType } from "@/assets/types/share/course.type";
import { FC } from "react";

type LabelProps = {
  courses: CourseBoxType[] | null;
  categoryName: string;
};

const Label: FC<LabelProps> = ({courses, categoryName}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-y-2 items-center justify-between mb-8 lg:mb-15">
      <div className="flex gap-2.5 items-center">
        <span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
        <h2 className="text-center font-danaBold text-2xl lg:text-2.5xl">
          {
            categoryName ? `دوره های ${categoryName}` : "تمامی دوره ها"
          }
        </h2>
      </div>
      <span className="sm:text-xl font-danaMedium text-slate-500">
        <span id="count_item_archive">{courses?.length}</span> دوره آموزشی{" "}
      </span>
    </div>
  );
};

export default Label;
