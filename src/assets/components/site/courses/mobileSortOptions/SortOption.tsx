import { FC } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

type SortOptionProps = {
  title: string;
  checked?: boolean;
};

const SortOption: FC<SortOptionProps> = ({ title, checked = false }) => {
  return (
    <button
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
