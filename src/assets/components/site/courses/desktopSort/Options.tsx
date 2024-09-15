import { useCallback, useState } from "react";
import OptionItem from "./OptionItem";

const Options = () => {
  const [checkedID, setCheckedID] = useState("all");

  const changeHandler = useCallback((id: string) => setCheckedID(id), []);

  return (
    <div className="flex gap-x-5 lg:gap-x-8 h-full">
      <OptionItem
        onChange={changeHandler}
        checkedID={checkedID}
        id="all"
        title="همه دوره ها"
      />
      <OptionItem
        onChange={changeHandler}
        checkedID={checkedID}
        id="more-expensive"
        title="گرانترین"
      />
      <OptionItem
        onChange={changeHandler}
        checkedID={checkedID}
        id="less-expensive"
        title="ارزانترین"
      />
      <OptionItem
        onChange={changeHandler}
        checkedID={checkedID}
        id="popular"
        title="محبوبترین"
      />
    </div>
  );
};

export default Options;
