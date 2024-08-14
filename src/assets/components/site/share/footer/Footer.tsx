import { memo } from "react";
import Bottom from "./Bottom";
import Center from "./center/Center";
import Top from "./top/Top";

const Footer = memo(() => {
  return (
    <footer className="relative z-0">
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
