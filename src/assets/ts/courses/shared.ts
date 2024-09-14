import { CourseBoxType } from "@/assets/types/share/course.type"
import { Dispatch, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"
import sendGetReq from "../utils/requests/sendGetReq"
import { showConfirmSwal } from "../utils/swal"


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

export {
  renderCourses
}