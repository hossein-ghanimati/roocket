import SectionHeader from "@/assets/components/elems/SectionHeader";
import CourseBox from "@/assets/components/elems/boxes/CourseBox";
import SkeletonBox from "@/assets/components/elems/boxes/SkeletonBox";
import sendGetReq from "@/assets/ts/requests/sendGetReq";
import { CourseBoxType } from "@/assets/types/share/course.type";
import { memo, useEffect, useState } from "react";

const LatesCourses = memo(() => {
  const [courses, setCourses] = useState<CourseBoxType[]>([]);

  useEffect(() => {
    (async function () {
      const coursesData: CourseBoxType[] = await sendGetReq("courses");
      
      setCourses(coursesData.splice(0, 8))
    })();
  }, []);

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
          {courses.length
            ? courses.map((course) => (
                <CourseBox key={course._id} {...course} />
              ))
            : Array.from(Array(8).keys()).map((i) => <SkeletonBox isGridChild key={i} />)}
        </div>
      </div>
    </section>
  );
});

export default LatesCourses;
