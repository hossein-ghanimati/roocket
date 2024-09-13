import { memo, useState } from "react"
import SendingHeader from "./SendingHeader"
import SendingContent from "./sendingContent/SendingContent"

const SendingComment = memo(() => {
  const [isOpenForm, setIsOpenForm] = useState(false)

  return (
   <>
      <SendingHeader isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm}/>
      {      
        isOpenForm ? <SendingContent/> : ""
      }
   </>
  )
})

export default SendingComment