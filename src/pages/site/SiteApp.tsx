import Footer from "@/assets/components/site/share/footer/Footer"
import Header from "@/assets/components/site/share/header/Header"
import { memo } from "react"
import { Outlet } from "react-router-dom"


const SiteApp = memo(() => {
  return (
    <div id="site-app">
      <Header/>
      <Outlet/>
      <Footer />
    </div>
  )
})

export default SiteApp