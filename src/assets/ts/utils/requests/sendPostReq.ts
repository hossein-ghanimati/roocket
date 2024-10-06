import { getFromLocal } from "../browserMemo"

const sendPostReq = async (path: string, body: {}) => {
  const sendReq = await fetch(`http://192.168.235.220:4000/v1/${path}`, {
    method: "POST",
    headers: {
      Authorization: `bearer ${getFromLocal("token")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
  console.log(sendReq);
  
  return sendReq.ok  
}

export default sendPostReq