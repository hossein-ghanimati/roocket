const sendGetReq = async (path: string, isAuth: boolean) => {
  const getReq = await fetch(`http://localhost:4000/v1/${path}`)
  if (getReq.ok) {
    const response = await getReq.json()
    return response
  } 

  return null  
}

export default sendGetReq