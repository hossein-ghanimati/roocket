import { BsArrowDownUp } from "react-icons/bs";
import SortBtn from "./SortBtn";
import { useCallback, useMemo, useState } from "react";

const DesktopSort = () => {
  const [checkedID, setCheckedID] = useState("all")

  const chengHandler = useCallback((id: string) => {
    setCheckedID(id)
  }, [])

  return (
    <div className="hidden md:flex items-center gap-x-6 px-5 mb-8 h-16 bg-white dark:bg-gray-900 shadow-normal dark:shadow-none rounded-xl">
      {
        useMemo(() => (
          <div className="flex items-center shrink-0 gap-x-2">
            <BsArrowDownUp className="size-6 shrink-0"/>
            <span className="font-danaMedium">مرتب سازی بر اساس :</span>
          </div>
        ), [])
      }

      <div 
        className="flex gap-x-5 lg:gap-x-8 h-full"
      >
        <SortBtn onChange={chengHandler} checkedID={checkedID} id="all" title="همه دوره ها"/>
        <SortBtn onChange={chengHandler} checkedID={checkedID} id="free" title="ارزان ترین"/>
        <SortBtn onChange={chengHandler} checkedID={checkedID} id="mony" title="گرانترین"/>
        <SortBtn onChange={chengHandler} checkedID={checkedID} id="bought" title="محبوب ترین"/>
      </div>
    </div>
  );
};

export default DesktopSort;
