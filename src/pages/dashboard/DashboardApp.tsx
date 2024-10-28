import { AuthContext } from "@/assets/contexts/share/auth.context";
import { generateAuthPagesLink } from "@/assets/ts/utils/auth";
import { memo, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardApp = memo(() => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    auth?.user?.role === "ADMIN"
      ? ""
      : navigate(generateAuthPagesLink("login"));
  }, []);

  return (
    auth?.user?.role === "ADMIN" && (
      <div id="dashboard-app">
        <Outlet />
      </div>
    )
  );
});

export default DashboardApp;
