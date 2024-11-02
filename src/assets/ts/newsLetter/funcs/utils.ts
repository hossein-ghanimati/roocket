const sendRegisterReq = async (email: string) => {
  try {
    const sendReq = await fetch("http://192.168.120.198:4000/v1/newsletters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    })

    if (sendReq.ok) {
      return true
    } else {
      throw "Error"
    }
  } catch (error) {
    console.log("catch");
    
    return false
  }
}

export {
  sendRegisterReq
}