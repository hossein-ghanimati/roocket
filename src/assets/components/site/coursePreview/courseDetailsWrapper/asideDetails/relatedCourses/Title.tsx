const Title = () => {
  return (
    <div className="flex items-start mb-4">
      <div className="text-biscay-700 dark:text-white ml-2">
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.7 10C3.7 12.0428 3.81037 13.6365 4.08778 14.8848C4.36343 16.1251 4.79459 16.9809 5.40685 17.5932C6.0191 18.2054 6.87493 18.6366 8.11522 18.9122C9.36346 19.1896 10.9572 19.3 13 19.3C15.0428 19.3 16.6365 19.1896 17.8848 18.9122C19.1251 18.6366 19.9809 18.2054 20.5931 17.5932C21.2054 16.9809 21.6366 16.1251 21.9122 14.8848C22.1896 13.6365 22.3 12.0428 22.3 10C22.3 7.95723 22.1896 6.36346 21.9122 5.11522C21.6366 3.87493 21.2054 3.01911 20.5931 2.40685C19.9809 1.7946 19.1251 1.36343 17.8848 1.08778C16.6365 0.810369 15.0428 0.700001 13 0.700001C10.9572 0.700001 9.36346 0.810369 8.11522 1.08778C6.87493 1.36343 6.0191 1.7946 5.40685 2.40685C4.79459 3.01911 4.36343 3.87493 4.08778 5.11522C3.81037 6.36346 3.7 7.95723 3.7 10Z"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            opacity="0.4"
            d="M11.3335 5.83331H14.6668"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.8335 10H17.1668"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            opacity="0.4"
            d="M11.3335 14.1667L14.6668 14.1667"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.46011 13.7404L6.22153 15.2615C6.29615 15.4109 6.44019 15.5144 6.60723 15.5384L8.31056 15.7836C8.7314 15.8443 8.89887 16.3544 8.5943 16.6466L7.36258 17.8302C7.24153 17.9465 7.18643 18.1139 7.21506 18.2782L7.50575 19.9491C7.57734 20.3624 7.1374 20.6778 6.76125 20.4822L5.23884 19.6928C5.08959 19.6153 4.91084 19.6153 4.76116 19.6928L3.23875 20.4822C2.8626 20.6778 2.42266 20.3624 2.49468 19.9491L2.78494 18.2782C2.81357 18.1139 2.75847 17.9465 2.63742 17.8302L1.4057 16.6466C1.10113 16.3544 1.2686 15.8443 1.68944 15.7836L3.39277 15.5384C3.55981 15.5144 3.70428 15.4109 3.77891 15.2615L4.53989 13.7404C4.72819 13.3643 5.27181 13.3643 5.46011 13.7404Z"
            fill="white"
            stroke="#FFA826"
            stroke-width="1.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div>
        <span className="mb-4 text-biscay-700 dark:text-white text-17 font-bold">
          مطالب مرتبط
        </span>
        <p className="font-normal line-clamp-2 text-xs">
          شما می‌توانید مطالب مرتبط به این مطلب را اینجا مشاهده کنید
        </p>
      </div>
    </div>
  );
};

export default Title;
