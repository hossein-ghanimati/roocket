
import { memo} from "react";
import ArtilceBox from "./ArtilceBox";
import SkeletonBox from "@/assets/components/elems/boxes/SkeletonBox";
import useArticles from "@/assets/hooks/shared/useArticles";

const Bottom = memo(() => {
  const { articles } = useArticles();

  return (
    <div className="xl:w-1/2 w-full xl:absolute right-1/2 -top-1/2 xl:mt-0 mt-12">
      <div className="grid grid-cols-12 sm:gap-6 xl:absolute top-2/4 right-0">
        <div className="sm:col-span-6 col-span-12 ">
          {articles?.length && articles.length > 0 ? (
            <ArtilceBox {...articles[0]} />
          ) : (
            <div className="m-4">
              <SkeletonBox isGridChild={false} />
            </div>
          )}
          {articles?.length && articles.length > 1 ? (
            <ArtilceBox {...articles[1]} />
          ) : (
            <div className="m-4">
              <SkeletonBox isGridChild={false} />
            </div>
          )}
        </div>
        <div className="sm:col-span-6 col-span-12 xl:mt-11">
          {articles?.length && articles.length > 2 ? (
            <ArtilceBox {...articles[2]} />
          ) : (
            <div className="m-4">
              <SkeletonBox isGridChild={false} />
            </div>
          )}
          {articles?.length && articles.length > 3 ? (
            <ArtilceBox {...articles[3]} />
          ) : (
            <div className="m-4">
              <SkeletonBox isGridChild={false} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Bottom;
