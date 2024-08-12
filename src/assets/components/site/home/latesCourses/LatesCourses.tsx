import SectionHeader from "@/assets/components/elems/SectionHeader"
import { memo } from "react"

const LatesCourses = memo(() => {
  return (
    <section className="md:mb-32 mb-13">
      <div className="container">
        <SectionHeader id="latest-courses" title="آخرین دوره" href="/courses" hrefTitle="مشاهده همه دوره ها"/>
      </div>
    </section>
  )
})

export default LatesCourses