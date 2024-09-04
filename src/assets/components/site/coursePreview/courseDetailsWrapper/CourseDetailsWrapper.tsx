import { memo, useContext } from "react"
import MainDetails from "./mainDetails/MainDetails"
import AsideDetails from "./asideDetails/AsideDetails"
import { CourseContext } from "@/assets/contexts/site/course.context"

const CourseDetailsWrapper = memo(() => {
  const course = useContext(CourseContext)

  return (
    course ? <section className="lg:grid grid-cols-12 relative gap-5 xl:gap-8">
      <AsideDetails/>
      <MainDetails/>
    </section>
    : ""
  )
})

export default CourseDetailsWrapper