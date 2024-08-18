import { getFromLocal } from "../../utils/browserMemo";

const getCourseData = async (courseName: string) => {
  try {
    const getReq = await fetch(`http://localhost:4000/v1/courses/${courseName}`, {
      headers: {
        Authorization: `Bearer ${getFromLocal("token")}`
      }
    })
    if (getReq.ok) {
      const courseData = await getReq.json();
      return courseData
    } else {
      throw "Error"
    }

  } catch (error) {
    return null;
  }

}

const sendRegisterRequest = async (courseID: string, price: number): Promise<boolean> => {
  try {
    const getReq = await fetch(`http://localhost:4000/v1/courses/${courseID}/register`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getFromLocal("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price
      })
    })
    if (!getReq.ok) {
      throw "Error"
    }
    return true
  } catch (error) {
    return false
  }
}

const getCodePercent = async (courseID: string, code: string): Promise<null | number> => {
  
  try {
    const getReq = await fetch(`http://localhost:4000/v1/offs/${code}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getFromLocal("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({course : courseID})
    })
    if (!getReq.ok) {
      throw "Error"
    }

    const result = await getReq.json();  

    return Number(result.percent)
  } catch (error) {
    return null
  }
}



export {
  getCourseData,
  sendRegisterRequest,
  getCodePercent
}