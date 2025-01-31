import { memo } from "react"
import CourseScore from "./CourseScore"
import CourseWidgets from "./courseWidgets/CourseWidgets"
import TeacherInfo from "./TeacherInfo"
import RelatedCourses from "./relatedCourses/RelatedCourses"

const AsideDetails = memo(() => {
  return (
    <aside
      className="sticky top-3 block col-span-4 xl:col-span-3 md:order-last  h-max "
    >
      <CourseScore/>
      <CourseWidgets/>
      <TeacherInfo/>
      <RelatedCourses/>
    </aside>
  )
})

export default AsideDetails