import { memo } from "react"
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import ScrollToTop from "./ScrollToTop";

const Router = memo(() => {
  const router = useRoutes(routes);
  
  return (
    <>

      {router}
            <ScrollToTop/>
    </>
  )
})

export default Router
