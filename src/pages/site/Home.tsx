import CategoriesSection from "@/assets/components/site/home/categoriesSection/CategoriesSection";
import Landing from "@/assets/components/site/home/landing/Landing";
import LatesCourses from "@/assets/components/site/home/LatesCourses";
import { memo } from "react";

const Home = memo(() => (
  <div id="home">
    <Landing />
    <LatesCourses />
    <CategoriesSection />
  </div>
));

export default Home;
