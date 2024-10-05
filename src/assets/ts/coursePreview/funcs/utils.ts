import { NavigateFunction } from "react-router-dom";
import { getFromLocal, setToLocal } from "../../utils/browserMemo";
import { showConfirmSwal, showMsgSwal } from "../../utils/swal";

const getCourseData = async (courseName: string) => {
  try {
    const getReq = await fetch(`http://192.168.235.220:4000/v1/courses/${courseName}`, {
      headers: {
        Authorization: `Bearer ${getFromLocal("token")}`
      }
    })
    if (getReq.ok) {
      const courseData = await getReq.json();
      return courseData
    } else {
      throw "Error"
    }

  } catch (error) {
    return null;
  }

}

const sendRegisterRequest = async (courseID: string, price: number): Promise<boolean> => {
  try {
    const getReq = await fetch(`http://192.168.235.220:4000/v1/courses/${courseID}/register`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getFromLocal("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price
      })
    })
    if (!getReq.ok) {
      throw "Error"
    }
    return true
  } catch (error) {
    return false
  }
}

const getCodePercent = async (courseID: string, code: string): Promise<null | number> => {
  
  try {
    const getReq = await fetch(`http://192.168.235.220:4000/v1/offs/${code}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getFromLocal("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({course : courseID})
    })
    if (!getReq.ok) {
      throw "Error"
    }

    const result = await getReq.json();  

    return Number(result.percent)
  } catch (error) {
    return null
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


export {
  getCourseData,
  sendRegisterRequest,
  getCodePercent,
  registerToCourse,
validateCode
}