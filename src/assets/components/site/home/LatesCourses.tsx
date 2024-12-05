import SectionHeader from "@/assets/components/elems/SectionHeader";
import CourseBox from "@/assets/components/elems/boxes/CourseBox";
import SkeletonBox from "@/assets/components/elems/boxes/SkeletonBox";
import useCourses from "@/assets/hooks/shared/useCourses";
import { memo } from "react";

const LatesCourses = memo(() => {
  const {courses} = useCourses();

  return (
    <section className="mb-13">
      <div className="container">
        <SectionHeader
          id="latest-courses"
          title="آخرین دوره"
          href="/courses"
          hrefTitle="مشاهده همه دوره ها"
        />
        <div className="grid grid-cols-12 gap-6 ">
          {courses?.length
            ? [...courses.slice(0, 8)].map((course) => (
                <CourseBox key={course._id} {...course} />
              ))
            : Array.from(Array(8).keys()).map((i) => <SkeletonBox isGridChild key={i} />)}
        </div>
      </div>
    </section>
  );
});

export default LatesCourses;
