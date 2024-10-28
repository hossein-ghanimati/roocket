import { CourseBoxType } from "@/assets/types/share/course.type";
import sendApiReq from "../../configs/apiReq"

const getCourses = async () => {
  const response = await sendApiReq().get("/courses")
  const courses: CourseBoxType[] = response.data;

  return response.status < 300 ? courses : null
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
}