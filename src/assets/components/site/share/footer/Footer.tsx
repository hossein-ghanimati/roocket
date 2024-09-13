import { memo } from "react";
import Bottom from "./Bottom";
import Center from "./center/Center";
import Top from "./top/Top";
import ParticleEl from "@/assets/components/elems/Particle";

const Footer = memo(() => {
  return (
    <footer className="relative z-0">
      <ParticleEl id="footer"/>
      <div className="container">
        <div className="content pb-10 pt-10">
          <Top />

          <Center/>

          <Bottom/>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
