
import Dashboard from "@/pages/dashboard/Dashboard";
import { RouteObject } from "react-router-dom";
import DashboardComments from "@/pages/dashboard/DashboardComments";
import DashboardTickets from "@/pages/dashboard/DashboardTickets";
import DashboardCategories from "@/pages/dashboard/DashboardCategories";
import DashboardCourses from "@/pages/dashboard/DashboardCourses";
import DashboardMenus from "@/pages/dashboard/DashboardMenus";
import DashboardOffers from "@/pages/dashboard/DashboardOffers";
import DashboardSessions from "@/pages/dashboard/DashboardSessions";
import DashboardTicketPreview from "@/pages/dashboard/DashboardTicketPreview";
import DashboardUsers from "@/pages/dashboard/DashboardUsers";

const dashboardRoutes : RouteObject[] = [
  {path: "", element: <Dashboard/>},
  {path: "comments", element: <DashboardComments/>},
  {path: "tickets", element: <DashboardTickets/>},
  {path: "categories", element: <DashboardCategories/>},
  {path: "courses", element: <DashboardCourses/>},
  {path: "menus", element: <DashboardMenus/>},
  {path: "offers", element: <DashboardOffers/>},
  {path: "sessions", element: <DashboardSessions/>},
  {path: "ticket-preview/:id", element: <DashboardTicketPreview/>},
  {path: "users", element: <DashboardUsers/>},
]

export default dashboardRoutes