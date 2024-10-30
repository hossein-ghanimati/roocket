import { CourseBoxType, SingleCourseType } from "@/assets/types/share/course.type";
import sendApiReq from "../../configs/apiReq"

const getCourses = async () => {
  const response = await sendApiReq().get("/courses")
  const courses: CourseBoxType[] = response.data;

  return response.status < 300 ? courses : null
}
const getRelatedCourses = async (mainCourse: string) => {
  const response = await sendApiReq().get(`/courses/related/${mainCourse}`)
  const courses: CourseBoxType[] = response.data;

  return response.status < 300 ? courses : null
}

const getCourse = async (courseShortName: string) => {
  const response = await sendApiReq(true).get(`/courses/${courseShortName}`)
  const course: SingleCourseType = response.data;
  
  return response.status < 300 ? course : null
}



// const sendCourse = async (courseData: Omit<CourseType, "createdAt" | "id">) => {
//   return sendApiReq().post("/courses", {
//     ...courseData,
//     createdAt: new Date()
//   })
// }
const deleteCourse = async (courseID: string) => {
  return sendApiReq().delete(`/courses/${courseID}`)
}

export {
  getCourses,
  // sendCourse,
  deleteCourse,
  getCourse,
  getRelatedCourses
}