import { memo } from "react";
import Right from "./Right";
import Left from "./Left";
import Particle from "@/assets/components/elems/Particle";

const Landing = memo(() => {
  return (
    <section className="xl:mt-24 lg:mt-20 mt-14 pb-28 relative">
      <Particle id="landing"/>
      <div className="container">
        <div className="relative grid grid-cols-6 xl:grid-cols-12  sm:overflow-visible overflow-hidden">
          <Right />
          <Left/>
        </div>
      </div>
    </section>
  );
});

export default Landing;
