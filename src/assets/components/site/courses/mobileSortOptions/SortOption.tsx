import SortOptionsType from "@/assets/types/site/sortOptions.type";
import { FC } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

type SortOptionProps = {
  title: string;
  id: SortOptionsType
  checkedID: SortOptionsType;
  onClick: (id: SortOptionsType) => void;
};

const SortOption: FC<SortOptionProps> = ({checkedID, id, title, onClick}) => {
  const checked = id === checkedID
  return (
    <button
      onClick={() => onClick(id)}
      className={`w-full  flex select-none items-center justify-between py-5 transition-all ${checked ? "text-green-600 dark:text-green-400" : ""}`}
    >
      <span>{title}</span>
      {
        checked ?
          <IoIosCheckmarkCircleOutline className="size-5" />
        : ""
      }
    </button>
  );
};

export default SortOption;
