import { AuthContext } from "@/assets/contexts/share/auth.context";
import { CoursesContext } from "@/assets/contexts/site/courses.context";
import "@/assets/styles/tailwind/output/site/courses/toggle-box.css";
import { applyFilters } from "@/assets/ts/courses/shared";

import {ChangeEventHandler, useContext, useEffect} from "react";

type ToggleBoxProps = {
  title: string;
  name: string;
  needUser?: boolean;
  checked: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const ToggleBox = ({ title, name, needUser = false, onChange, checked }: ToggleBoxProps) => {
  const coursesSetting = useContext(CoursesContext);
  const authSetting = useContext(AuthContext);

  useEffect(() => {   
    applyFilters(coursesSetting);
  }, [authSetting?.user]);

  return needUser ? (
    authSetting?.user ? (
      <div className="h-17 bg-white dark:bg-gray-900 rounded-xl p-5 hidden md:block">
        <div className="">
          <label className="relative cursor-pointer select-none flex items-center justify-between">
            <span>{title}</span>
            <input
              className="toggle__input hidden"
              type="checkbox"
              name={name}
              value="yes"
              checked={checked}
              onChange={onChange}
            />
            <span className="toggle__marker relative block h-[1.5rem] w-[46px] rounded-full transition bg-custom-white dark:bg-gray-800">
              <span className="toggle__marker-circle absolute top-0 bottom-0 right-1 my-auto size-4 rounded-full bg-white dark:bg-gray-900 transition-all"></span>
            </span>
          </label>
        </div>
      </div>
    ) : (
      ""
    )
  ) : (
    <div className="h-17 bg-white dark:bg-gray-900 rounded-xl p-5 hidden md:block">
      <div className="">
        <label className="relative cursor-pointer select-none flex items-center justify-between">
          <span>{title}</span>
          <input
            className="toggle__input hidden"
            type="checkbox"
            name={name}
            value="yes"
            checked={checked}
            onChange={onChange}
          />
          <span className="toggle__marker relative block h-[1.5rem] w-[46px] rounded-full transition bg-custom-white dark:bg-gray-800">
            <span className="toggle__marker-circle absolute top-0 bottom-0 right-1 my-auto size-4 rounded-full bg-white dark:bg-gray-900 transition-all"></span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default ToggleBox;
