import { FC, PropsWithChildren, ReactNode } from "react";

type SortOptionProps = {
  title: string;
};

const SortOption: FC<PropsWithChildren<SortOptionProps>> = ({
  title,
  children
}) => {
  return (
    <div className="flex  cursor-pointer select-none items-center justify-center rounded-full h-[56px] bg-white dark:bg-gray-900 gap-1 sm:gap-2 w-1/2" id="filter-btn">
      {
        children
      }
      <span>{title}</span>
    </div>
  );
};

export default SortOption;