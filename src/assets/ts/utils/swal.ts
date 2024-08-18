import Swal, { SweetAlertIcon, SweetAlertInput, SweetAlertResult } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

type showMsgSwalType =  {
  title: string
  icon: SweetAlertIcon
  hasClose?: boolean,
  btnText?: string,
}

const showMsgSwal = ({title, icon, hasClose = false, btnText = "باشه"}: showMsgSwalType) => {
  withReactContent(Swal).fire({
    title,   
    icon,
    showCloseButton: hasClose,
    confirmButtonText: btnText
  })
}

type showConfirmSwalType =  {
  title: string
  text? : string
  icon: SweetAlertIcon
  hasClose?: boolean
  btnText?: string
  cancelText?: string
  callBack: (result : SweetAlertResult) => void
}

const showConfirmSwal = ({title, text, icon, cancelText = "نه", btnText = "باشه", callBack, hasClose = false}: showConfirmSwalType) => {
  withReactContent(Swal).fire({
    title,   
    text,
    icon,
    showCloseButton: hasClose,
    showConfirmButton: true,
    showCancelButton: true,
    cancelButtonText: cancelText,
    confirmButtonText: btnText
  }).then(callBack)
}

type showInputSwalType = {
  title: string
  text? : string
  icon: SweetAlertIcon
  inputType?: SweetAlertInput
  hasClose?: boolean
  btnText?: string
  cancelText?: string
  callBack: (result : SweetAlertResult) => void
}

const showInputSwal = ({title, text, icon, inputType : input = "text", cancelText = "نه", btnText = "باشه", callBack, hasClose = false}: showInputSwalType) => {
withReactContent(Swal).fire({
    title,   
    text,
    icon,
    input,
    showCloseButton: hasClose,
    showConfirmButton: true,
    showCancelButton: true,
    cancelButtonText: cancelText,
    confirmButtonText: btnText
  }).then(callBack)
}

export {
  showMsgSwal,
  showConfirmSwal,
  showInputSwal
}