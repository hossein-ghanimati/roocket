import { memo } from "react"
import ContentHeader from "./ContentHeader"
import ContentEditor from "./ContentEditor"
import ContentFooter from "./ContentFooter"

const SendingContent = memo(() => {
  return (
    <div>
      <ContentHeader/>
      <ContentEditor/>
      <ContentFooter/>
    </div>
  )
})

export default SendingContent