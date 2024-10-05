import { memo } from "react"
import CourseScore from "./courseScore/CourseScore"

const AsideDetails = memo(() => {
  return (
    <aside
      className=" col-span-4 xl:col-span-3 lg:order-last  h-max"
    >
      <CourseScore/>
    </aside>
  )
})

export default AsideDetails