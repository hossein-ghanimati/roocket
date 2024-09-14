import { BsArrowDownUp } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import SortOption from "./SortOption";



const MonileSort = () => {
  return (
    <div className="flex md:hidden items-center gap-6 mb-8">
      <SortOption title="فیلتر">
        <CiFilter className="size-6 shrink-0"/>
      </SortOption>

      <SortOption title="همه دوره ها">
        <BsArrowDownUp className="size-6 shrink-0"/>
      </SortOption>
    </div>
  );
};

export default MonileSort;
