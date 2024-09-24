import { FC } from "react";

type FilterOptionProps = {
  title: string;
};

const FilterOption: FC<FilterOptionProps> = ({ title }) => {
  return (
    <label className="relative cursor-pointer select-none w-full flex items-center justify-between py-5">
      <span className="select-none">{title}</span>
      <input
        className="toggle__input hidden"
        type="checkbox"
        name="presell"
        value="yes"
      />
      <span className="toggle__marker relative block h-6 w-[46px] rounded-full bg-gray-300 dark:bg-gray-600 transition-all duration-150">
        <span className="toggle__marker-circle absolute top-0 bottom-0 right-1 my-auto size-4 rounded-full bg-white dark:bg-gray-900 transition-all"></span>
      </span>
    </label>
  );
};

export default FilterOption;
