import { memo } from "react";
import Right from "./Right";
import Left from "./Left";

const RoocketFeedback = memo(() => {
  return (
    <section id="feedback" className="py-24 overflow-hidden">
      <div className="container">
        <div className="items-center grid lg:grid-cols-12 grid-cols-1">
          <Right />

          <Left />
        </div>
      </div>
    </section>
  );
});

export default RoocketFeedback;
