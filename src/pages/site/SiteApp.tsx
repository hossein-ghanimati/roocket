import Header from "@/assets/components/site/share/header/Header"
import { memo } from "react"
import { Outlet } from "react-router-dom"


const SiteApp = memo(() => {
  return (
    <div id="site-app">
      <Header/>
      <Outlet/>
    </div>
  )
})

export default SiteApp