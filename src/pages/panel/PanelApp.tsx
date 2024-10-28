import { AuthContext } from "@/assets/contexts/share/auth.context";
import { memo, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PanelApp = memo(() => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    auth?.isLogin ? "" : navigate("/login");
  }, [auth]);

  return (
    auth?.isLogin && (
      <div id="panel-app">
        <Outlet />
      </div>
    )
  );
});
export default PanelApp;
