import { CiSearch } from "react-icons/ci";

const FormInput = () => {
  return (
    <form>
      <div className="h-17 bg-white dark:bg-gray-900 rounded-xl p-4 md:p-5">
        <div className="flex justify-between gap-x-6 h-full text-slate-500 dark:text-white">
          <input
            type="text"
            name="s"
            className="md:font-danaMedium placeholder-slate-500 bg-transparent flex-grow"
            placeholder="جستجو بین دوره ها"
          />
          <button type="submit">
            <CiSearch className="size-7"/>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInput;
