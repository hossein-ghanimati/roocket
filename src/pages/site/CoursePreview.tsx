import CourseMainInfo from "@/assets/components/site/coursePreview/courseMainInfo/CourseMainInfo";
import sendGetReq from "@/assets/ts/requests/sendGetReq";
import { getFromLocal } from "@/assets/ts/utils/browserMemo";
import { SingleCourseType } from "@/assets/types/share/course.type";
import { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CoursePreview = memo(() => {
  const [course, setCourse] = useState<SingleCourseType | null>(null)
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    if (params.name) {
      (async function(){
        const getReq = await fetch(`http://localhost:4000/v1/courses/${params.name}`, {
          headers: {
            Authorization: `Bearer ${getFromLocal("token")}`
          }
        })
        const courseData = await getReq.json();

        setCourse(courseData)        
        console.log("Course Data => ", courseData);
        
      }())
    } else {
      navigate("/");
    }
  }, [params.name]);

  return (
    <div id="course-preview" className="container">
      <CourseMainInfo {...course}/>
    </div>
  );
});

export default CoursePreview;
