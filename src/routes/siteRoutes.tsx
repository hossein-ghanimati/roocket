import ArticlePreview from "@/pages/site/ArticlePreview"
import Articles from "@/pages/site/Articles"
import Basket from "@/pages/site/Basket"
import CoursePreview from "@/pages/site/CoursePreview"
import Courses from "@/pages/site/Courses"
import Episode from "@/pages/site/Episode"
import Home from "@/pages/site/Home"
import Login from "@/pages/site/Login"
import Search from "@/pages/site/Search"
import { RouteObject } from "react-router-dom"
import Register from "@/pages/site/Register"


const siteRoutes: RouteObject[] = [
  {path: "/", element: <Home/>},

  {path: "articles", element: <Articles/>},
  {path: "articles/:category", element: <Articles/>},

  
  {path: "courses/:category", element: <Courses/>},
  {path: "courses", element: <Courses/>},

  {path: "course/:name", element: <CoursePreview/>},
  {path: "article/:name", element: <ArticlePreview/>},
  {path: "episode/:id", element: <Episode/>},
  
  {path: "search/:value", element: <Search/>},
  {path: "search", element: <Search/>},

  {path: "basket", element: <Basket/>},

  {path: "login", element: <Login/>},
  {path: "register", element: <Register/>},

]

export default siteRoutes