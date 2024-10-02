import { CourseBoxType } from "@/assets/types/share/course.type";
import { getUrlParam, removeUrlParam } from "../../utils/url";
import { UserType } from "@/assets/types/share/user.type";
import { getFromSession } from "../../utils/browserMemo";

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
  
  return filteredCourses
}

const filterByStaticFilters= (courses: CourseBoxType[]) => {
  const shouldFree = getUrlParam("only-free") === "yes"
  const shouldBought = getUrlParam("only-bought") === "yes";
  const user = getFromSession("user") as UserType | null
  let filteredCourses = courses;

  shouldFree ? filteredCourses = filteredCourses.filter(course => course.price === 0) : ""

  user ? shouldBought ? (
    filteredCourses = filteredCourses.filter(course => user.courses.some(userCourse => userCourse._id === course._id))
  ) : "" : removeUrlParam("only-bought")
  

  return filteredCourses
}

export {
  sortByMoreExpensive,
  sortByLessExpensive,
  sortByPopular,
  sortByLast,
  filterBySearch,
  filterByStaticFilters
}