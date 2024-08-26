import { memo } from "react";

const Propaganda = memo(() => {
  return (
    <div className="space-y-4 mb-4 lg:mb-8 ">
      <a
      target="_blank"
        href="https://pachim.sh"
        className="lg:flex group hidden flex-col bg-white group-hover:bg-gray-50 overflow-hidden items-center border border-gray-80 border-opacity-60 dark:border-opacity-5 rounded-lg"
      >
        <div className="inline-block overflow-hidden w-full ">
          <img
            className="w-full h-full object-cover transform transition duration-200"
            src="/public/image/propaganda/hs2QtzGeVDvW8nPnts5rBYgEhwWKeIGv5zuoiUsi.jpg"
          />
        </div>
      </a>
    </div>
  );
});

export default Propaganda;
