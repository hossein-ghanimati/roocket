import { memo } from "react"
import MainBar from "./mainBar/MainBar"
import Navbar from "./navbar/Navbar"

const Header = memo(() => {
  return (
    <header
     className="container mt-8">
      <MainBar />
      <Navbar />
    </header>
  )
})

export default Header