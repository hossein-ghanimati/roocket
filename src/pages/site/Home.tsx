import CategoriesSection from "@/assets/components/site/home/CategoriesSection";
import Landing from "@/assets/components/site/home/landing/Landing";
import LatesCourses from "@/assets/components/site/home/LatesCourses";
import NewArticles from "@/assets/components/site/home/newArticles/NewArticles";
import RoocketFeedback from "@/assets/components/site/home/roocketFeedback/RoocketFeedback";
import { memo } from "react";

const Home = memo(() => (
  <div id="home">
    <Landing />
    <LatesCourses />
    <CategoriesSection />
    <RoocketFeedback />
    <NewArticles/>
  </div>
));

export default Home;
