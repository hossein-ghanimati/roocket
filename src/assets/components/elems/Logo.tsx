import smLogo from "/public/image/header/sm-logo.svg"
import logo from "/public/image/header/logo.svg"
import darkLogo from "/public/image/header/dark-logo.svg"

import { memo } from "react"
import { Link } from "react-router-dom"

const Logo = memo(() => {
  return (
    <Link to="/">
      <img src={smLogo} className="sm:hidden" alt="" />
      <img src={logo} className="hidden sm:inline-block sm:dark:hidden" alt="" />
      <img src={darkLogo} className="hidden sm:dark:inline-block" alt="" />
    </Link>
  )
})

export default Logo