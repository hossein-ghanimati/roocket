import { getCourses } from "@/assets/services/axios/requests/shared/courses"
import { CourseBoxType } from "@/assets/types/share/course.type";
import { useQuery } from "react-query"
import { useParams } from "react-router-dom";

const useCourses = () => {
  const params = useParams();

  const {data: courses} = useQuery(["courses"], getCourses, {
    select: queryData => {
      const selectedData: CourseBoxType[] = queryData as CourseBoxType[]
      return params.category 
        ? selectedData.filter(course => course.categoryID.name === params.category)
        : selectedData
    }
  })
  

  return {courses}
}

export default useCourses