import { NavigateFunction } from "react-router-dom";
import { getFromLocal, setToLocal } from "../utils/browserMemo";
import { showConfirmSwal, showInputSwal, showMsgSwal } from "../utils/swal";
import { checkUserToken } from "../utils/useActions";
import { getCodePercent, getCourseData, sendRegisterRequest } from "./funcs/utils"
import { SingleCourseType } from "@/assets/types/share/course.type";

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

const registerToCourse = async (navigate: NavigateFunction, courseID: string, price: number) => {
  const walletValue = getFromLocal("wallet") || 0;
  if (walletValue < price) {
    showConfirmSwal({
      title: "موجودی کیف پول کافی نیست",
      text: "آیا مایل به شارژش هستی ؟",
      icon: "error",
      cancelText: "نه بیخیال",
      btnText: "برو به کیف پول",
      hasClose: true,
      callBack: result => {
        result.isConfirmed && navigate("/panel/wallet")
      }
    })
  } else {
    const registerReq = await sendRegisterRequest(courseID, price);
    if (registerReq) {
      console.log(price);

      const newWalletValue = walletValue - price;
      setToLocal("wallet", newWalletValue)

      showConfirmSwal({
        title: "ثبت نام با موفقیت انجام شد",
        text: "برای دسترسی به جلسات صفحه را رفرش کنید",
        icon: "success",
        cancelText: "فعلا نه",
        btnText: "رفرش کن",
        callBack: result => {
          result.isConfirmed && navigate(0)
        }
      })
    } else {
      showMsgSwal({
        title: "مشکلی در ثبت نام به وجود آمد",
        icon: "error",
        hasClose: true
      })
    }
  }
}

const validateCode = async (navigate: NavigateFunction, courseID: string, price: number, code: string) => {
  const codePercent = await getCodePercent(courseID, code);

  if (codePercent !== null) {
    registerToCourse(navigate, courseID, (price - (price * codePercent / 100)))
  } else {
    showMsgSwal({
      title: "کد معتبر نمی باشد",
      icon: "error",
      hasClose: true
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

export {
  renderCourseData,
  renderRegisterToCourse
}