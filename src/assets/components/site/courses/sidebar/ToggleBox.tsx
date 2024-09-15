import "@/assets/styles/tailwind/output/site/courses/toggle-box.css"

type ToggleBoxProps = {
  title: string
};

const ToggleBox = ({title}: ToggleBoxProps) => {
  return (
    <div className="h-17 bg-white dark:bg-gray-900 rounded-xl p-5 hidden md:block">
      <div className="">
        <label 
          className="relative cursor-pointer select-none flex items-center justify-between"
        >
          <span>{title}</span>
          <input
            className="toggle__input absolute size-0 opacity-0"
            type="checkbox"
            name="only_free"
            value="yes"
          />
          <span 
            className="toggle__marker relative block h-[1.5rem] w-[46px] rounded-full transition bg-custom-white dark:bg-gray-800"
          >
            <span
              className="toggle__marker-circle absolute top-0 bottom-0 right-1 my-auto size-4 rounded-full bg-white dark:bg-gray-900 transition-all"
            ></span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default ToggleBox;
