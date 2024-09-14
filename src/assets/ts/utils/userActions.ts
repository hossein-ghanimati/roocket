import { getFromLocal } from "./browserMemo"

const checkUserToken = (): boolean =>{
  const userToken = getFromLocal("token");
  return userToken ? true: false
}

export {
  checkUserToken
}