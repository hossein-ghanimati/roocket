import { memo } from "react";

import { Skeleton } from "@nextui-org/skeleton";
import { Card } from "@nextui-org/card";

type SkeletonBoxProps = {
  isGridChild: boolean;
};

const SkeletonBox = memo(({isGridChild}: SkeletonBoxProps) => {
  return (
    <Card
      className={`skeleton-box ${isGridChild ? "xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12" : "w-screen sm:w-[380px]"} space-y-5 p-4`}
      radius="lg"
    >
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
});

export default SkeletonBox;
