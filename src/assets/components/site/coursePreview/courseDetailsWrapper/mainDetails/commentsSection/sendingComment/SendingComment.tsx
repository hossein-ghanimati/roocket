import { memo, useState } from "react"
import SendingHeader from "./SendingHeader"
import SendingContent from "./sendingContent/SendingContent"
import SendingFooter from "./sendingFooter/SendingFooter"

const SendingComment = memo(() => {
  const [isOpenForm, setIsOpenForm] = useState(false)

  return (
   <>
      <SendingHeader isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm}/>
      {      
        isOpenForm ? (
          <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg mb-8 pt-9 pb-8 md:px-7 px-4">
            <SendingContent/>
            <SendingFooter cancelClickHandler={() => setIsOpenForm(false)} />
          </div>
        ) : ""
      }
   </>
  )
})

export default SendingComment