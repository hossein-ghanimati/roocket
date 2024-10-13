import { NavigateFunction } from "react-router-dom";
import { showConfirmSwal, showInputSwal } from "../utils/swal";
import { checkUserToken } from "../utils/userActions";
import { getCourseData, registerToCourse, validateCode } from "./funcs/utils"
import { SingleCourseType } from "@/assets/types/share/course.type";
import CommentType from "@/assets/types/share/comment.type";
import SessionType from "@/assets/types/share/session.type";

const renderCourseData = async (navigate: NavigateFunction, courseName: string, set: Function) => {
  const courseData:SingleCourseType = await getCourseData(courseName)
  if (courseData) {
    set(courseData)
    console.log("CourseData =>", courseData);    
  }else{
    document.title = "دوره ای یافت نشد"
    showConfirmSwal({
      title: "دوره ای یافت نشد",
      text: "لطفا با لینک های معتبر وارد صفحه بشید",
      icon: "warning",
      btnText: "مشاهده دوره ها",
      cancelText: "رفتن به خانه",
      callBack: result => {
        result.isConfirmed ? navigate("/courses") : navigate("/")
      }
      
    })
  }
}


const renderRegisterToCourse = (navigate: NavigateFunction, courseID: string, price: number) => {
  const isLogin = checkUserToken();
  if (isLogin) {
    price > 0 ?
      showInputSwal({
        title: "آیا کد تخفیف دارید ؟",
        text: "وارد کنید.",
        icon: "question",
        inputType: "text",
        cancelText: "ندارم",
        btnText: "استعلام",
        hasClose: true,
        callBack: reuslt => {
          reuslt.isConfirmed ?
            validateCode(navigate, courseID, price, reuslt.value) 
          :          
            reuslt?.dismiss === "cancel" && registerToCourse(navigate, courseID, price)
        }
      })
      : registerToCourse(navigate, courseID, price)
  } else {
    showConfirmSwal({
      title: "باید وارد حسابی شوید",
      text: "به صفحه لاگین میروید؟",
      icon: "warning",
      btnText: "برو",
      cancelText: "فعلا نه",
      hasClose: true,
      callBack: result => {
        result.isConfirmed && navigate("/login")
      }
    })
  }
}

const getCourseAverageScore = (comments: CommentType[]) => {
  let score = 0;
  comments.forEach(comment => score += comment.score)
  score = score / comments.length || 0;
  
  return Math.ceil(score);
}

const calculateCourseTime = (sesssions: SessionType[]) => {
  let h = 0;
  let m = 0;
  let s = 0;
  
  sesssions.forEach(session => m += Number(session.time.slice(0, 2)))
  sesssions.forEach(session => s += Number(session.time.slice(3, 5)))

  m += Math.floor(s / 60)
  s = s % 60

  h += Math.floor(m / 60)
  m = m % 60

  return h ? `${h}:${m}:${s}` : `${m}:${s}`
}

export {
  renderCourseData,
  renderRegisterToCourse,
  getCourseAverageScore,
  calculateCourseTime
}