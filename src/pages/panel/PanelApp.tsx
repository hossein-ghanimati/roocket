import { memo } from "react"
import { Outlet } from "react-router-dom"


const PanelApp = memo(() => {
  return (
    <div id="panel-app">
      <Outlet />
    </div>
  )
}
)
export default PanelApp