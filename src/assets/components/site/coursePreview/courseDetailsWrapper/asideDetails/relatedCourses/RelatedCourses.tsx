import Courses from "./Courses"
import Title from "./Title"

const RelatedCourses = () => {
  return (
    <div
      className="mb-5 dark:shadow-teacherCardSHadow bg-white dark:bg-gray-900  rounded-md py-7 px-5"
    >
      <Title/>
      <Courses/>
    </div>
  )
}

export default RelatedCourses