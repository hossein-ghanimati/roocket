import axios from "axios";
import { getFromLocal } from "../../../ts/utils/browserMemo";



const sendApiReq = (includeAuthorization = false) => {
  

  const apiReq = axios.create({
    baseURL: 'http://192.168.78.80:4000/v1',
  });

  apiReq.interceptors.request.use((config) => {
    
    includeAuthorization ? config.headers.set({
      Authorization: `Bearer ${getFromLocal("token")}`
    }) : "";


    return config
  })

  apiReq.interceptors.response.use(
    (response) => {
      console.log(`${response.config.url?.slice(1)} ${response.config.method?.toUpperCase()} response =>`, response);
      return response    
    },
    err => {
      console.warn("Your Req Has An Err :", err)
      return Promise.reject(err)
    }
  )
  
  

  return apiReq

}




export default sendApiReq