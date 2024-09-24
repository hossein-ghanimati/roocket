import CoursesPagination from "./CoursesPagination"
import CoursesWrapper from "./CoursesWrapper"
import { memo } from "react"

const CoursesList = memo(() => {
  return (
    <div>
      <CoursesWrapper/>
      <CoursesPagination />
    </div>
  )
})

export default CoursesList