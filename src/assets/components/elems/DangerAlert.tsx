import { memo } from "react";

type Props = {
  text?: string;
};

const DangerAlert = memo(({ text = "مشکلی پیش آمده ..." }: Props) => (
  <div className="bg-red-100 dark:bg-red-200 text-red-900 sm:text-lg md:text-xl font-bold font-yekan px-4 py-8 rounded-lg shadow">
    <p className="line-clamp-1">{text}</p>
  </div>
));

export default DangerAlert;
