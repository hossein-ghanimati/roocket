import { showMsgSwal } from "../utils/swal";
import { FormikHelpers } from "formik";
import { getNewsLetters, sendNewsLetter } from "@/assets/services/axios/requests/shared/newsLetters";

const formSubmitHandler = async (
  values: {email: string},
  configs: FormikHelpers<{
    email: string;
}>
) => {
  
  const allNewsLetters = await getNewsLetters()
  const wasAdd = allNewsLetters?.some(newsLetter => newsLetter.email === values.email.trim());
  if (wasAdd) {
    showMsgSwal({
      title: "شما قبلا در خبرنامه ثبت نام کرده اید",
      icon: "warning",
      hasClose: true,
      btnText: "متوجه شدم"
    })
  }else{
    const registerReq = await sendNewsLetter(values.email.trim())

    if (registerReq) {
      configs.resetForm()
      showMsgSwal({
        title: "با موفقیت انجام شد",
        icon: "success",
        hasClose: true,
      })
    }else{
      showMsgSwal({
        title: "مشکلی پیش آمد",
        icon: "error",
        hasClose: true,
      })
    }
  }
};

export {
  formSubmitHandler
}