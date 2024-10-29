import { UserType } from "@/assets/types/share/user.type";
import { getFromLocal } from "./browserMemo";

const getUser = async () => {
  const getReq = await fetch("http://192.168.235.193:4000/v1/auth/me", {
    headers: {
      Authorization: `Bearer ${getFromLocal("token")}`
    }
  })
  const user: UserType | null = getReq.ok ? await getReq.json() : null;

  return{
    user: user,
    isLogin: getReq.ok ? true : false
  }
}

const generateAuthPagesLink = (page : "login" | "register") => 
  `/${page}?after=${location.pathname === "/login" || location.pathname === "/register" ? "/" : location.pathname}`


export {
  getUser,
  generateAuthPagesLink
}