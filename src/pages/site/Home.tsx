import CategoriesSection from "@/assets/components/site/home/CategoriesSection";
import Landing from "@/assets/components/site/home/landing/Landing";
import LatesCourses from "@/assets/components/site/home/LatesCourses";
import NewArticles from "@/assets/components/site/home/newArticles/NewArticles";
import Propaganda from "@/assets/components/site/home/Propaganda";
import RoocketFeedback from "@/assets/components/site/home/roocketFeedback/RoocketFeedback";
import SiteDescription from "@/assets/components/site/home/SiteDescription";
import useDocTitle from "@/assets/hooks/shared/useDocTitle";
import { memo } from "react";

const Home = memo(() => {
  useDocTitle("راکت | خانه")

  return ( 
  <main id="home">
    <Landing />
    <LatesCourses />
    <CategoriesSection />
    <RoocketFeedback />
    <NewArticles/>
    <Propaganda/>
    <SiteDescription />
  </main>
)});

export default Home;
