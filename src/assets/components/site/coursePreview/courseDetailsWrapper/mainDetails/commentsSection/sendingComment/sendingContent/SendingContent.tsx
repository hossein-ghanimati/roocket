import { memo } from "react"
import ContentHeader from "./ContentHeader"
import ContentEditor from "./ContentEditor"

const SendingContent = memo(() => {
  return (
    <div>
      <ContentHeader/>
      <ContentEditor/>
    </div>
  )
})

export default SendingContent