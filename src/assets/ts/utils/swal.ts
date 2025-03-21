import Swal, { SweetAlertIcon, SweetAlertInput, SweetAlertResult } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

type showMsgSwalType = {
  title: string
  icon: SweetAlertIcon
  hasClose?: boolean,
  btnText?: string,
}

const showMsgSwal = ({ title, icon, hasClose = false, btnText = "باشه" }: showMsgSwalType) => {
  withReactContent(Swal).fire({
    title,
    icon,
    showCloseButton: hasClose,
    confirmButtonText: btnText
  })
}

type showToastSwalType = {
  title: string
  icon: SweetAlertIcon
  timer?: number
}

const showToastSwal = ({
  title,
  icon,
  timer = 2500
}: showToastSwalType) => {
  withReactContent(Swal).fire({
    title,
    icon,
    timer, // مدت زمان نمایش به میلی‌ثانیه
    timerProgressBar: true,
    toast: true,
    position: "top-right",
    showConfirmButton: false,
  })
}

type showConfirmSwalType = {
  title: string
  text?: string
  icon: SweetAlertIcon
  hasClose?: boolean
  btnText?: string
  cancelText?: string
  callBack: (result: SweetAlertResult) => void
}

const showConfirmSwal = ({ title, text, icon, cancelText = "نه", btnText = "باشه", callBack, hasClose = false }: showConfirmSwalType) => {
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

const showLoadingSwal =  ({task}: {task: string;}) => (
  withReactContent(Swal).fire({
    title: `در حال ${task}...`,
    icon: "info",
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  })
)

type showInputSwalType = {
  title: string
  text?: string
  icon: SweetAlertIcon
  inputType?: SweetAlertInput
  hasClose?: boolean
  btnText?: string
  cancelText?: string
  callBack: (result: SweetAlertResult) => void
}

const showInputSwal = ({ title, text, icon, inputType: input = "text", cancelText = "نه", btnText = "باشه", callBack, hasClose = false }: showInputSwalType) => {
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
  showToastSwal,
  showMsgSwal,
  showConfirmSwal,
  showInputSwal,
  showLoadingSwal
}