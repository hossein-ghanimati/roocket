import { getCourses } from "@/assets/services/axios/requests/shared/courses"
import { useQuery } from "react-query"

const useCourses = (courseCategory: (null | string) = null) => {
  const {data: courses} = useQuery(["courses", courseCategory], getCourses)

  return {courses}
}

export default useCourses