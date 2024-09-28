import { CourseBoxType } from "@/assets/types/share/course.type"
import { Dispatch, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"
import sendGetReq from "../utils/requests/sendGetReq"
import { showConfirmSwal } from "../utils/swal"
import SortOptionsType from "@/assets/types/site/sortOptions.type"
import { sortByLast, sortByLessExpensive, sortByMoreExpensive, sortByPopular } from "./funcs/shared"


const renderCourses = async (
  navigate:  NavigateFunction,
  categoryName: string,
  setCourses: Dispatch<SetStateAction<CourseBoxType[] | null>>
) => {
  const courses: CourseBoxType[] = await sendGetReq(`courses${categoryName.length ? `/category/${categoryName}` : ""}`)
  console.log("Courses -->", courses);
  
  if (courses?.length) {
    setCourses(courses)
  }else{
    setCourses([])
    document.title = "دوره ای ثبت نشده"
    showConfirmSwal({
      title: "دوره ای یافت نشد",
      text: `${categoryName.length ? "برای این دسته بندی" : ""} هیچ دوره ای وجود ندارد`,
      icon: "warning",
      btnText: "رفتن به خانه",
      callBack: result => {
        result.isConfirmed ? navigate("/") : window.close()
      }
      
    })
  }  
}

const renderCoursesSort = (courses: CourseBoxType[],courseOption: SortOptionsType): CourseBoxType[] => {
  
  let sortedCourses: CourseBoxType[] = [...courses];
  switch (courseOption) {
    case "all":
      sortByLast(courses)
      break

    case "more-expensive":
      sortedCourses = sortByMoreExpensive(courses)   
      break;
    case "less-expensive":
      sortedCourses = sortByLessExpensive(courses)
      break;
    case "popular":
      sortedCourses = sortByPopular(courses)
      break;
  }

  

  return sortedCourses
}


export {
  renderCourses,
  renderCoursesSort
}