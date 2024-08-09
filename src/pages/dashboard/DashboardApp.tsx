import { memo } from "react"
import { Outlet } from "react-router-dom"

const DashboardApp = memo((): JSX.Element => {
  return (
    <div id="dashboard-app">
      <Outlet/>
    </div>
  )
})

export default DashboardApp