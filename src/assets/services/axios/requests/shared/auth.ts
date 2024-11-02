import sendApiReq from "../../configs/apiReq"

const login = async (userData: {
  identifier: string
  password: string
}) => {
  const response = await sendApiReq().post("/auth/login", userData).catch(() => {})
  const token = response?.data?.accessToken
  console.log(response)
  return token
}

export {
  login
}