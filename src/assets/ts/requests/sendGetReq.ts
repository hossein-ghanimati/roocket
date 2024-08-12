const sendGetReq = async (path: string) => {
  const getReq = await fetch(`http://localhost:4000/v1/${path}`)
  const response = await getReq.json()
  return response
}

export default sendGetReq