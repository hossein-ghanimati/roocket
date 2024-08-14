import CategoriesSection from "@/assets/components/site/home/CategoriesSection";
import Landing from "@/assets/components/site/home/landing/Landing";
import LatesCourses from "@/assets/components/site/home/LatesCourses";
import RoocketFeedback from "@/assets/components/site/home/roocketFeedback/RoocketFeedback";
import { memo } from "react";

const Home = memo(() => (
  <div id="home">
    <Landing />
    <LatesCourses />
    <CategoriesSection />
    <RoocketFeedback />
  </div>
));

export default Home;
