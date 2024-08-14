import { memo } from "react";
import About from "./About";
import Links from "./Links";
import ContactUs from "./ContactUs";

const Center = memo(() => {
  return (
    <div className="grid md:grid-cols-9 grid-cols-1 xl:gap-20 gap-7">
      <About />

      <Links/>

      <ContactUs />
    </div>
  );
});

export default Center;
