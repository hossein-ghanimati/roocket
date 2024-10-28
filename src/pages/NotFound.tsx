import useDocTitle from "@/assets/hooks/shared/useDocTitle"
import { memo } from "react"

const NotFound = memo(() => {

  useDocTitle("404 | Not Found")

  return (
    <div>NotFound</div>
  )
})

export default NotFound