import { NavigateFunction } from "react-router-dom";
import { getFromLocal, setToLocal } from "../utils/browserMemo";
import { showConfirmSwal, showInputSwal, showMsgSwal } from "../utils/swal";
import { checkUserToken } from "../utils/useActions";
import { getCodePercent, getCourseData, registerToCourse, sendRegisterRequest, validateCode } from "./funcs/utils"
import { SingleCourseType } from "@/assets/types/share/course.type";
import CommentType from "@/assets/types/share/comment.type";

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
  
  return score;
}

export {
  renderCourseData,
  renderRegisterToCourse,
  getCourseAverageScore
}