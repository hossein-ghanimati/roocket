import CourseBox from "@/assets/components/elems/boxes/CourseBox";
import SkeletonBox from "@/assets/components/elems/boxes/SkeletonBox";
import { CoursesContext } from "@/assets/contexts/site/courses.context";
import { memo, useContext, useMemo } from "react";

const CoursesWrapper = memo(() => {
  const coursesSetting = useContext(CoursesContext);

  return (
    <div className="grid grid-cols-8 xs:grid-cols-12 lg:grid-cols-8 xl:lg:grid-cols-9 gap-6 sm:gap-7 mt-20">
      {coursesSetting?.shownCourses?.length ? [...(coursesSetting.shownCourses || [])]
        ?.splice(
          coursesSetting?.paginationNumber
            ? (coursesSetting?.paginationNumber - 1) * 6
            : 0,
          6
        )
        .map((course) => <CourseBox {...course} />)
        : Array.from(Array(6).keys()).map((i) => <SkeletonBox isGridChild key={i} />)
      }
    </div>
  );
});

export default CoursesWrapper;
