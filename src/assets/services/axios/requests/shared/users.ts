import { UserType } from "@/assets/types/share/user.type";
import sendApiReq from "../../configs/apiReq"

const getUsers = async () => {
  const response = await sendApiReq().get("/users")
  const users: UserType[] = response.data;
  return response.status < 3000 ? users : []
}

const registerUser = async (userData: Omit<UserType, "createdAt" | "id">) => {
  const response = await sendApiReq().post("/users", {...userData, createdAt: new Date()})
  const newUserData: UserType = response.data;
  console.log("New userData:", newUserData);
  return newUserData 
}

export {
  getUsers,
  registerUser
}