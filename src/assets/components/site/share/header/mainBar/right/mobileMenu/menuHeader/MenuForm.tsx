import { FormEventHandler, useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";

const MenuForm = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState("")
  const {pathname} = useLocation()
  const formSubmitHandler: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    navigate(`/courses?s=${inputValue.trim()}`)
    setInputValue("")
  }


  return (
    <form
      className="mt-3 w-full h-10 mx-auto relative"
      onSubmit={formSubmitHandler}
    >
      <div
        className={`py-1 w-full bg-custom-white dark:bg-gray-800  absolute inset-0 rounded-md`}
      >
        <label
          htmlFor="main-search-input"
          className="w-full flex items-center justify-between gap-2 px-2 h-full"
        >
          <input
            id="main-search-input"
            type="text"
            disabled={pathname.includes("courses")}
            placeholder="جستجو کنید..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-transparent w-8/12 border-none outline-none"
          />
          {useMemo(() => (
            <button type="submit" disabled={pathname.includes("courses")}>
              <CiSearch className="size-5" />
            </button>
          ), [pathname])}
        </label>
      </div>
    </form>
  );
};

export default MenuForm;
