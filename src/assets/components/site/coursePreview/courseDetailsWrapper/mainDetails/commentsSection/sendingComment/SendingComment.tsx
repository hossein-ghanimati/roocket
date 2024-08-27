import { memo, useState } from "react"
import SendingHeader from "./SendingHeader"
import SendingContent from "./sendingContent/SendingContent"

const SendingComment = memo(() => {
  const [isOpenForm, setIsOpenForm] = useState(false)

  return (
   <>
      <SendingHeader setIsOpenForm={setIsOpenForm}/>
      {      
        isOpenForm ? <SendingContent/> : ""
      }
   </>
  )
})

export default SendingComment