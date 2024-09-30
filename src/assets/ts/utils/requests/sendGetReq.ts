const sendGetReq = async (path: string) => {
  const getReq = await fetch(`http://192.168.235.220:4000/v1/${path}`)
  if (getReq.ok) {
    const response = await getReq.json()
    return response
  } 

  return null  
}

export default sendGetReq