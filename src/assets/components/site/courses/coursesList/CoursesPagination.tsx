import { CoursesContext } from "@/assets/contexts/site/courses.context";
import { useContext } from "react";
import { Pagination } from "@nextui-org/pagination";

const CoursesPagination = () => {
  const coursesSetting = useContext(CoursesContext);

  return (
    <>
      {coursesSetting?.shownCourses?.length !== undefined &&
      coursesSetting?.shownCourses?.length > 6 ? (
        <div className="flex items-center justify-center">
          <Pagination
            total={Math.ceil(coursesSetting?.shownCourses.length / 6)}
            page={coursesSetting.paginationNumber}
            color="success"
            variant={"bordered"}
            onChange={(page) => {
              coursesSetting.setPaginationNumber(page);
              scrollTo(0, 0);
            }}
            className="mb-1"
          ></Pagination>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CoursesPagination;
