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
    <main className='courses'>
      
    </main>
  )
})

export default Courses