type WidgetBoxProps = {
  title: string;
  value: string | number | JSX.Element;
  icon: JSX.Element;
};

const WidgetBox = ({ title, value, icon }: WidgetBoxProps) => {
  return (
    <div className="flex flex-col items-center justify-center shadow-sm bg-white dark:bg-gray-900  rounded-md pt-3 pb-2">
      <span className="mt-1 inline-flex text-blue-700 dark:text-white">
        {icon}
      </span>

      <span className="text-xs text-gray-500 dark:text-white mt-3">{title}</span>
      <span className="text-base text-chambray-700 font-bold dark:text-gray-200 mt-[2px] px-1">
        {value}
      </span>
    </div>
  );
};

export default WidgetBox;
