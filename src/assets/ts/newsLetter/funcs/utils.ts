const sendRegisterReq = async (email: string) => {
  try {
    const sendReq = await fetch("https://academic.liara.run/v1/newsletters", {
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