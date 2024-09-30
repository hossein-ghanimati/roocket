import CoursesPagination from "./CoursesPagination"
import CoursesWrapper from "./CoursesWrapper"
import { memo } from "react"
import GoTopBtn from "./GoTopBtn"

const CoursesList = memo(() => {
  return (
    <div>
      <CoursesWrapper/>

      <GoTopBtn/>
      
      <CoursesPagination />
    </div>
  )
})

export default CoursesList