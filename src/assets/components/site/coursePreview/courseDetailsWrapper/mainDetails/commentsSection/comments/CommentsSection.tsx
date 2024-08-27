import { memo } from "react"
import SendingComment from "../sendingComment/SendingComment"
import Comments from "../Comments"

const CommentsSection = memo(() => {
  return (
    <section
      id="comments"
      className="lg:px-10 px-4 pt-9 pb-6 bg-white dark:bg-gray-900 shadow-sm rounded-lg"
    >
      <SendingComment />
      <Comments />
    </section>
  )
}
)
export default CommentsSection