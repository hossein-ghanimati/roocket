import { CourseBoxType } from "@/assets/types/share/course.type";
import { getUrlParam } from "../../utils/url";

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

const filterBySearch = (courses: CourseBoxType[]) => {
  const searchedValue = getUrlParam("s") || ""
  const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(searchedValue.toLowerCase()))
  console.log("Filterd Courses in func ==>", filteredCourses);
  
  return filteredCourses
}

export {
  sortByMoreExpensive,
  sortByLessExpensive,
  sortByPopular,
  sortByLast,
  filterBySearch
}