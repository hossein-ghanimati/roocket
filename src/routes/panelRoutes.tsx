import Panel from "@/pages/panel/Panel";
import PanelComments from "@/pages/panel/PanelComments";
import PanelCourses from "@/pages/panel/PanelCourses";
import PanelProfile from "@/pages/panel/PanelProfile";
import PanelTicketPreview from "@/pages/panel/PanelTicketPreview";
import PanelTickets from "@/pages/panel/PanelTickets";
import { RouteObject } from "react-router-dom";

const panelRoutes : RouteObject[] = [
  {path: "", element: <Panel/>},
  {path: "comments", element: <PanelComments/>},
  {path: "courses", element: <PanelCourses/>},
  {path: "profile", element: <PanelProfile/>},
  {path: "tickets", element: <PanelTickets/>},
  {path: "ticket-preview/:id", element: <PanelTicketPreview/>},
]

export default panelRoutes