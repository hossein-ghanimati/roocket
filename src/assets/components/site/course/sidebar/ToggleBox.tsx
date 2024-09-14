import "@/assets/styles/site/courses/toggle-box.css"

type ToggleBoxProps = {
  title: string
};

const ToggleBox = ({title}: ToggleBoxProps) => {
  return (
    <div className="h-17 bg-white dark:bg-gray-900 rounded-xl p-5 hidden md:block">
      <div className="">
        <label className="toggle flex items-center justify-between">
          <span className="font-danaDemiBold">{title}</span>
          <input
            className="toggle__input"
            type="radio"
            name="only_free"
            value="yes"
          />
          <span className="toggle__marker"></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleBox;
