import { getCourses } from "@/assets/services/axios/requests/shared/courses"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom";

const useCourses = () => {
  const params = useParams();

  const {data: courses} = useQuery(["courses", params.category], getCourses)
  

  return {courses}
}

export default useCourses