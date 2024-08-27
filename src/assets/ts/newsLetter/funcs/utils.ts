const sendRegisterReq = async (email: string) => {
  const sendReq = await fetch("http://localhost:4000/v1/newsletters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email})
  })

  return sendReq.ok
}

export{
  sendRegisterReq
}