import { Dispatch, FormEvent, SetStateAction } from "react";
import { showMsgSwal } from "../utils/swal";
import sendGetReq from "../utils/requests/sendGetReq";
import { sendRegisterReq } from "./funcs/utils";

const formSubmitHandler = async (
  event: FormEvent<HTMLFormElement>,
  inputValue: string,
  setInput: Dispatch<SetStateAction<string>>,
  setIsSending: Dispatch<SetStateAction<boolean>>

) => {
  event.preventDefault();
  setIsSending(true);
  const allNewsLetters: NewLetterType[] = await sendGetReq("newsletters")
  const wasAdd = allNewsLetters.some(newsLetter => newsLetter.email === inputValue);
  if (wasAdd) {
    setIsSending(false)
    showMsgSwal({
      title: "شما قبلا در خبرنامه ثبت نام کرده اید",
      icon: "warning",
      hasClose: true,
      btnText: "متوجه شدم"
    })
  }else{
    const registerReq = await sendRegisterReq(inputValue.trim())
    setIsSending(false)

    if (registerReq) {
      setInput("")
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