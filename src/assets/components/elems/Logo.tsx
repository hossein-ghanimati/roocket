import { memo } from "react"
import { Link } from "react-router-dom"

const Logo = memo(() => {
  return (
    <Link to="/">
      <img src="/public/image/header/sm-logo.svg" className="sm:hidden" alt="" />
      <img src="/public/image/header/logo.svg" className="hidden sm:inline-block sm:dark:hidden" alt="" />
      <img src="/public/image/header/dark-logo.svg" className="hidden sm:dark:inline-block" alt="" />
    </Link>
  )
})

export default Logo