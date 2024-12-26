import { RouteObject } from "react-router-dom";

import siteRoutes from "./siteRoutes";
import panelRoutes from "./panelRoutes";
import dashboardRoutes from "./dashboardRoutes";

import NotFound from "@/pages/NotFound";
import DashboardApp from "@/pages/dashboard/DashboardApp";
import SiteApp from "@/pages/site/SiteApp";
import PanelApp from "@/pages/panel/PanelApp";

const routes: RouteObject[] = [
  { path: "/", element: <SiteApp />, children: siteRoutes },

  { path: "/panel", element: <PanelApp />, children: panelRoutes },

  { path: "/dashboard", element: <DashboardApp />, children: dashboardRoutes },

  { path: "/*", element: <NotFound /> },
];

export default routes;
