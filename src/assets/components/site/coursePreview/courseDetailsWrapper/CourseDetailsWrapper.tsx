import { memo } from "react"
import MainDetails from "./mainDetails/MainDetails"
import AsideDetails from "./asideDetails/AsideDetails"

const CourseDetailsWrapper = memo(() => {
  return (
    <section className="lg:grid grid-cols-12 relative gap-5 xl:gap-8">
      <AsideDetails/>
      <MainDetails/>
    </section>
  )
})

export default CourseDetailsWrapper