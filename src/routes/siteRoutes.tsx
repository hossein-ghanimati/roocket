import ArticlePreview from "@/pages/site/ArticlePreview"
import Articles from "@/pages/site/Articles"
import Basket from "@/pages/site/Basket"
import CoursePreview from "@/pages/site/CoursePreview"
import Courses from "@/pages/site/Courses"
import Episode from "@/pages/site/Episode"
import Home from "@/pages/site/Home"
import Search from "@/pages/site/Search"
import { RouteObject } from "react-router-dom"


const siteRoutes: RouteObject[] = [
  {path: "/", element: <Home/>},
  {path: "articles", element: <Articles/>},
  {path: "article/:id", element: <ArticlePreview/>},
  {path: "courses", element: <Courses/>},
  {path: "courses/:category", element: <Courses/>},
  {path: "course/:id", element: <CoursePreview/>},
  {path: "episode/:id", element: <Episode/>},
  {path: "basket", element: <Basket/>},
  {path: "search/:value", element: <Search/>},

]

export default siteRoutes