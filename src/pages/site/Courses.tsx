import Label from '@/assets/components/site/course/Label'
import DesktopSort from '@/assets/components/site/course/desktopSort/DesktopSort'
import MobileSort from '@/assets/components/site/course/mobileSort/MobileSort'
import Sidebar from '@/assets/components/site/course/sidebar/Sidebar'
import { renderCourses } from '@/assets/ts/courses/shared'
import { CourseBoxType } from '@/assets/types/share/course.type'
import { memo, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Courses = memo(() => {
  const [courses, setCourses] = useState<CourseBoxType[] |null>(null)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    
      renderCourses(navigate, params.category || "", setCourses)
    
  }, [params?.category])

  return (
    <main id='courses' className='max-w-[1920px] mx-auto overflow-x-hidden mt-8 sm:mt-10'>
      <div className="container">
        <Label courses={courses} categoryName={params.category || ""} />

        <div
          className='grid grid-cols-12 gap-y-5 md:gap-x-7'
        >
          <Sidebar/>
          <section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
            <MobileSort />
            <DesktopSort/>
          </section>
        </div>
      </div>
    </main>
  )
})

export default Courses