import { UserType } from "@/assets/types/share/user.type";
import { getFromLocal } from "../utils/browserMemo";

const getUser = async () => {
  const getReq = await fetch("http://192.168.235.220:4000/v1/auth/me", {
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


export {
  getUser
}