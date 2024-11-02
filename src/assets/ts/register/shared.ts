import { register } from "@/assets/services/axios/requests/shared/auth"
import { showMsgSwal } from "../utils/swal"

const renderUserRegistering = async (userData: {
  username: string
  email: string
  password: string
}) => {
  const registerReq = await register(userData).catch((err) => err)
  const wasUser = registerReq?.response?.data?.message === "username or email is duplicate."
  // console.log(wasUser);
  const token = registerReq?.data?.accessToken
  
  if (wasUser) {
    showMsgSwal({
      title: "مشخصات قبلا استفاده شده است",
      icon: "warning",
      hasClose: true
    })
  }else if (!token){
    showMsgSwal({
      title: "مشکلی پیش آمده است",
      icon: "error",
      hasClose: true
    })
  }
  
  return  (wasUser || !token) ? null : token 
}

export {
  renderUserRegistering
}