import Logo from "@/assets/components/elems/Logo";
import { FormEventHandler, memo, useContext, useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { OverlayContext } from "@/assets/contexts/site/overlay.context";
import { useLocation, useNavigate } from "react-router-dom";

const Center = memo(() => {
  const [inputValue, setInputValue] = useState<string>("");
  const overlaySetting = useContext(OverlayContext);
  const [isShowingInput, setIsShowingInput] = useState<boolean>(false);
  const navigate = useNavigate();
  const {pathname} = useLocation()

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    navigate(`/courses?s=${inputValue.trim()}`);
    overlaySetting?.hideOverlay();
    setInputValue("")
  };

  return (
    <div className="lg:w-6/12">
      {useMemo(
        () => (
          <div className="lg:hidden">
            <Logo />
          </div>
        ),
        []
      )}

      {useMemo(() => (
        <form
          className="hidden lg:block w-full h-10 mx-auto relative"
          onSubmit={formSubmitHandler}
        >
          <div
            className={`-mr-2 py-1 w-full bg-custom-white dark:bg-gray-800  absolute inset-0 rounded-md ${isShowingInput ? "z-40" : ""}`}
          >
            <label
              htmlFor="main-search-input"
              className="w-full flex items-center justify-start gap-2 px-2 h-full"
            >
              <button type="submit" disabled={pathname.includes("courses")}>
                <CiSearch className="size-5" />
              </button>
              <input
                disabled={pathname.includes("courses")}
                id="main-search-input"
                type="text"
                placeholder="جستجو کنید..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => setIsShowingInput(false)}
                onFocus={() => {
                  overlaySetting?.showOverlay();
                  setIsShowingInput(true);
                }}
                className="bg-transparent w-8/12 border-none outline-none"
              />
            </label>
          </div>
        </form>
      ), [isShowingInput, inputValue, pathname])}
    </div>
  );
});

export default Center;
