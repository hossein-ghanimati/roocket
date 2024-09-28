import { CourseBoxType } from "@/assets/types/share/course.type";

const sortByMoreExpensive = (courses: CourseBoxType[]) : CourseBoxType[] => {  
  const sortedCourses = courses.sort((a, b) => b.price - a.price);  
  return sortedCourses;
}
const sortByLessExpensive = (courses: CourseBoxType[]) : CourseBoxType[] => {
  const sortedCourses = courses.sort((a, b) => a.price - b.price);
  return sortedCourses;
}
const sortByPopular = (courses: CourseBoxType[]) : CourseBoxType[] => {
  const sortedCourses = courses.sort((a, b) => b.registers - a.registers);
  return sortedCourses;
}

const sortByLast = (courses: CourseBoxType[]) : CourseBoxType[] => {
  const sortedCourses = courses.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  return sortedCourses
}

export {
  sortByMoreExpensive,
  sortByLessExpensive,
  sortByPopular,
  sortByLast
}