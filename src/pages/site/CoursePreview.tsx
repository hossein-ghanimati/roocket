import CourseMainInfo from "@/assets/components/site/coursePreview/courseMainInfo/CourseMainInfo";
import { memo } from "react";
import CourseDetailsWrapper from "@/assets/components/site/coursePreview/courseDetailsWrapper/CourseDetailsWrapper";
import { CourseContextProvider } from "@/assets/contexts/site/course.context";

const CoursePreview = memo(() => {
  

  return (
    <CourseContextProvider>
      <div id="course-preview" className="container">
        <CourseMainInfo/>
        <CourseDetailsWrapper/>
      </div>
    </CourseContextProvider>
  );
});

export default CoursePreview;
