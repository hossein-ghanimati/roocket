import { memo } from "react";
import Top from "./top/Top";
import Bottom from "./bottom/Bottom";

const NewArticles = memo(() => {
  return (
    <section className="md:mt-52">
      <div className="container relative">      
        <Top />
        <Bottom />
      </div>
    </section>
  );
});

export default NewArticles;
