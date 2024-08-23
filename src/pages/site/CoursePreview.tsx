import CourseMainInfo from "@/assets/components/site/coursePreview/courseMainInfo/CourseMainInfo";
import sendGetReq from "@/assets/ts/utils/requests/sendGetReq";
import { getFromLocal } from "@/assets/ts/utils/browserMemo";
import { SingleCourseType } from "@/assets/types/share/course.type";
import { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { renderCourseData } from "@/assets/ts/coursePreview/shared";
import CourseDetailsWrapper from "@/assets/components/site/coursePreview/courseDetailsWrapper/CourseDetailsWrapper";

const CoursePreview = memo(() => {
  const [course, setCourse] = useState<SingleCourseType | null>(null)
  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    renderCourseData(navigate, params.name || "", setCourse)
  }, [params.name]);

  return (
    <div id="course-preview" className="container">
      <CourseMainInfo {...course}/>
      <CourseDetailsWrapper/>
    </div>
  );
});

export default CoursePreview;
