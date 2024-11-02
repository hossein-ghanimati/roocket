import { NavigateFunction } from "react-router-dom";
import { getFromLocal, setToLocal } from "../../utils/browserMemo";
import { showConfirmSwal, showMsgSwal } from "../../utils/swal";
import { getCodePercent, sendRegisterRequest } from "@/assets/services/axios/requests/shared/courses";




const registerToCourse = async (refetch: () => void, navigate: NavigateFunction, courseID: string, price: number) => {

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
          result.isConfirmed && refetch()
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

const validateCode = async (refetch: () => void, navigate: NavigateFunction, courseID: string, price: number, code: string) => {
  const codePercent = await getCodePercent(courseID, code);

  if (codePercent !== null) {
    registerToCourse(refetch, navigate, courseID, (price - (price * codePercent / 100)))
  } else {
    showMsgSwal({
      title: "کد معتبر نمی باشد",
      icon: "error",
      hasClose: true
    })
  }
}


export {
  sendRegisterRequest,
  registerToCourse,
validateCode
}