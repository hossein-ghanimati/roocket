import sendApiReq from "../../configs/apiReq";

const getNewsLetters = async () => {
  const response = await sendApiReq().get("/newsletters")
  const newsLetters: NewLetterType[] = response.data;

  return response.status < 300 ? newsLetters : null
}

const sendNewsLetter = async (email: string) => {
  const response = await sendApiReq().post("/newsletters", {email})
  return response.status < 300
}

export {
  getNewsLetters,
sendNewsLetter
}