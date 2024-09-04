import DangerAlert from "@/assets/components/elems/DangerAlert"
import { CourseContext } from "@/assets/contexts/site/course.context"
import { memo, useContext } from "react"

const Comments = memo(() => {
  const course = useContext(CourseContext)

  return (
    course?.comments?.length ? 
      <div>Comments</div>
    :
      <DangerAlert text="کامنتی ثبت نشده است، شما اولین نفر باشید ..."/>
  )
})

export default Comments