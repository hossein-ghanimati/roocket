import { CourseContext } from "@/assets/contexts/site/course.context";
import sendGetReq from "@/assets/ts/utils/requests/sendGetReq";
import { CourseBoxType } from "@/assets/types/share/course.type";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courseSetting = useContext(CourseContext);
  const [courses, setCourses] = useState<CourseBoxType[] | null>(null);

  useEffect(() => {
    (async function () {
      const data = await sendGetReq(
        `courses/related/${courseSetting?.shortName}`
      );
      setCourses(data);
    })();
  }, [courseSetting?._id]);

  return (
    <div className="mb-8">
      {courses?.map((course) =>(
          <div
            key={course._id}
            className="flex items-start bg-custom-white dark:bg-gray-950 rounded shadow-sm mb-3 py-4 px-4"
          >
            <div className="space-y-2 w-full">
              <div className="relative">
                <span className="w-1 h-full bg-blue-700 dark:bg-blue-400 rounded-l-md -right-4 absolute"></span>
                <Link
                  to={`/course/${course.shortName}`}
                  className="text-biscay-700 dark:text-white dark:hover:text-blue-400 font-bold text-15 hover:text-blue-700 transition duration-200"
                >
                  {course.name}
                </Link>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Courses;
