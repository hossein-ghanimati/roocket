import { UserType } from "@/assets/types/share/user.type";
import { getFromLocal } from "./browserMemo";

const getUser = async () => {
  const getReq = await fetch("https://sabzlearnsite-backend.liara.run/v1/auth/me", {
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

const generateAuthPagesLink = (page : "login" | "register") => {
  const slicedHash = location.hash.slice(1)
  const path = location.hash.slice(1, location.hash.indexOf("?"))
  const afterPage = slicedHash.startsWith("/login") || slicedHash.startsWith("/register") ? "/" : path
  return `/${page}?after=${afterPage}`
}


export {
  getUser,
  generateAuthPagesLink
}