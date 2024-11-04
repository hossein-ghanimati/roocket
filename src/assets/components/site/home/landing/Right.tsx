import Counter from "@/assets/components/elems/Counter";
import { memo } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const Right = memo(() => {
  return (
    <div className="col-span-6 z-0 order-1 xl:order-none  xl:text-right text-center xl:mt-0 sm:mt-510 mt-345">
      <h2 className="text-biscay-700 dark:text-white font-yekan font-bold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl  xl:max-w-lg-m xl:mb-4 lg:!leading-21">
        داستان برنامه‌نویس شدنت از 
          اینجا
          شروع میشه!
      </h2>
      <p className="mt-2 sm:mt-4 text-gray-500 dark:text-gray-300 font-normal sm:text-lg md:text-xl lg:text-2xl xl:max-w-xl-m !leading-10 mb-8">
         یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست که
          <span className="text-gray-700 dark:text-gray-100">
            <Typewriter
              
              delaySpeed={3000}
              deleteSpeed={30}
              loop={true}
              typeSpeed={100}
              words={[
                ' تلاش و تمرین ',
                ' دوره مناسب ',
                ' نقشه راه درست ',
                ' تیم راکت رو '
              ]}
            />
          </span>
         داشته باشید.
      </p>
      <Link
        to="/courses"
        className="inline-flex transition-all ease-in-out dark:hover:bg-gray-700 dark:bg-blue-700 bg-blue-700 hover:bg-gray-800 rounded-lg py-5 px-7 mb-14"
      >
        <span className="font-medium text-xl text-white">
          شروع یادگیری برنامه‌نویسی
        </span>
        <svg
          className="mr-2"
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M17.6954 12.4962L21.6468 12.1467C22.5335 12.1467 23.2525 12.8727 23.2525 13.7681C23.2525 14.6635 22.5335 15.3895 21.6468 15.3895L17.6954 15.04C16.9997 15.04 16.4357 14.4705 16.4357 13.7681C16.4357 13.0645 16.9997 12.4962 17.6954 12.4962"
            fill="white"
          ></path>
          <path
            d="M4.42637 12.5604C4.48813 12.4981 4.71885 12.2345 4.93559 12.0157C6.19989 10.6449 9.50107 8.40347 11.228 7.71751C11.4902 7.60808 12.1532 7.37512 12.5086 7.35864C12.8477 7.35864 13.1716 7.43748 13.4804 7.59279C13.8661 7.81046 14.1738 8.15403 14.3439 8.55878C14.4522 8.83882 14.6224 9.68009 14.6224 9.69539C14.7913 10.6143 14.8834 12.1086 14.8834 13.7606C14.8834 15.3325 14.7913 16.7656 14.6527 17.6999C14.6375 17.7163 14.4674 18.76 14.2821 19.1177C13.943 19.7719 13.28 20.1766 12.5704 20.1766H12.5086C12.046 20.1613 11.0742 19.7554 11.0742 19.7413C9.43931 19.0553 6.21621 16.9221 4.92044 15.5043C4.92044 15.5043 4.55455 15.1396 4.39608 14.9125C4.14904 14.5854 4.02552 14.1806 4.02552 13.7759C4.02552 13.3241 4.16419 12.904 4.42637 12.5604"
            fill="white"
          ></path>
        </svg>
      </Link>
      <ul className="flex flex-wrap xl:max-w-xl">
        <li className="xl:w-6/12 sm:w-1/2 w-full flex justify-start  mb-6 rounded-xl">
          <svg
            className="ml-4"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.15"
              cx="21.4155"
              cy="21.5525"
              r="13.8275"
              transform="rotate(-36.651 21.4155 21.5525)"
              fill="#E81C4D"
            ></circle>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.0432 3.4589C16.1689 1.90568 14.3052 0.973391 12.3791 0.973389C10.4529 0.973389 8.58925 1.90568 5.71494 3.4589L5.66333 3.48679C4.24222 4.25471 3.11182 4.86554 2.34149 5.38588C1.95135 5.64941 1.59935 5.92484 1.3381 6.22484C1.07383 6.5283 0.836426 6.93396 0.836426 7.43725V14.8245C0.836426 15.3345 1.24985 15.7479 1.75984 15.7479C2.26982 15.7479 2.68325 15.3345 2.68325 14.8245V9.71094C3.19973 10.0359 3.83998 10.3961 4.58945 10.8055C4.5299 11.5482 4.52998 12.5083 4.53007 13.7474L4.53008 13.901C4.53008 18.5181 5.90983 19.4415 12.3473 19.4415C18.3812 19.4415 20.228 18.5181 20.228 13.901C20.228 12.5893 20.228 11.5817 20.1622 10.809C21.0898 10.3024 21.8505 9.87105 22.4166 9.48863C22.8067 9.2251 23.1587 8.94967 23.42 8.64967C23.6843 8.3462 23.9217 7.94054 23.9217 7.43725C23.9217 6.93396 23.6843 6.5283 23.42 6.22483C23.1587 5.92484 22.8067 5.64941 22.4166 5.38588C21.6463 4.86555 20.5159 4.25471 19.0948 3.4868L19.0432 3.4589ZM18.3645 11.7804C15.8668 13.1137 14.1493 13.9011 12.3791 13.9011C10.6081 13.9011 8.89004 13.113 6.39073 11.7789C6.37715 12.3309 6.3769 13.0206 6.3769 13.901C6.3769 16.1773 6.75931 16.6617 7.08659 16.8917C7.33186 17.0641 7.7906 17.2616 8.69009 17.3996C9.58312 17.5366 10.7639 17.5947 12.3473 17.5947C13.8247 17.5947 14.9599 17.537 15.8408 17.4001C16.726 17.2626 17.2299 17.0628 17.5283 16.8645C17.9408 16.5904 18.3812 16.0445 18.3812 13.901C18.3812 13.0204 18.3798 12.331 18.3645 11.7804ZM3.37523 6.91628C3.03344 7.14715 2.83624 7.3168 2.73122 7.43725C2.83624 7.55771 3.03344 7.72736 3.37523 7.95823C4.0603 8.42098 5.10889 8.9889 6.59293 9.79084C9.57742 11.4036 11.0095 12.0543 12.3791 12.0543C13.7486 12.0543 15.1807 11.4036 18.1652 9.79085C19.6492 8.9889 20.6978 8.42098 21.3829 7.95823C21.7246 7.72736 21.9219 7.55771 22.0269 7.43725C21.9219 7.31679 21.7247 7.14714 21.3829 6.91627C20.6978 6.45352 19.6492 5.8856 18.1652 5.08366C15.1807 3.47091 13.7486 2.82021 12.3791 2.82021C11.0095 2.82021 9.57742 3.4709 6.59293 5.08366C5.1089 5.88561 4.06031 6.45353 3.37523 6.91628ZM22.0893 7.52173L22.0881 7.51925C22.089 7.52091 22.0893 7.52173 22.0893 7.52173ZM22.0881 7.35525L22.0893 7.35278C22.0893 7.35277 22.089 7.35359 22.0881 7.35525ZM2.66996 7.35526C2.66909 7.35359 2.66874 7.35277 2.66879 7.35278L2.66996 7.35526Z"
              fill="#E81C4D"
            ></path>
          </svg>
          <span className="text-gray-450 dark:text-white font-semibold text-22">
            بیش از <Counter  /> دوره آموزشی
          </span>
        </li>
        <li className="xl:w-5/12 sm:w-1/2 w-full flex justify-start  mb-6 rounded-xl">
          <svg
            className="ml-4"
            width="39"
            height="40"
            viewBox="0 0 39 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5834 10.0833C15.0772 10.0833 14.6667 10.4937 14.6667 10.9999C14.6667 11.5062 15.0772 11.9166 15.5834 11.9166H17.4167C17.923 11.9166 18.3334 11.5062 18.3334 10.9999C18.3334 10.4937 17.923 10.0833 17.4167 10.0833H15.5834Z"
              fill="#98A3B8"
            ></path>
            <path
              d="M19.9553 6.41675H15.6249C15.0175 6.41675 14.4161 6.5353 13.855 6.76565C13.2939 6.99596 12.7841 7.33358 12.3546 7.75919C11.9251 8.18479 11.5845 8.69004 11.3521 9.24611C11.1196 9.80219 11 10.3982 11 11.0001C11 11.602 11.1196 12.198 11.3521 12.7541C11.5845 13.3101 11.9251 13.8154 12.3546 14.241C12.7841 14.6666 13.2939 15.0042 13.855 15.2345C14.4161 15.4649 15.0175 15.5834 15.6249 15.5834H19.9553C20.0489 15.0415 20.1187 14.4336 20.1667 13.7501H15.6249C15.2605 13.7501 14.8996 13.6789 14.563 13.5407C14.2263 13.4026 13.9204 13.2 13.6627 12.9446C13.405 12.6893 13.2006 12.3861 13.0612 12.0525C12.9217 11.7188 12.8499 11.3612 12.8499 11.0001C12.8499 10.639 12.9217 10.2813 13.0612 9.94771C13.2006 9.61406 13.405 9.3109 13.6627 9.05555C13.9204 8.80017 14.2263 8.59761 14.563 8.45941C14.8996 8.32122 15.2605 8.25008 15.6249 8.25008H20.1667C20.1187 7.56655 20.0489 6.9587 19.9553 6.41675Z"
              fill="#98A3B8"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 11C0 20.0585 1.9415 22 11 22C20.0585 22 22 20.0585 22 11C22 1.9415 20.0585 0 11 0C1.9415 0 0 1.9415 0 11ZM1.83333 11C1.83333 13.2228 1.95483 14.8838 2.23457 16.1426C2.50968 17.3805 2.91288 18.114 3.39943 18.6006C3.88597 19.0871 4.61954 19.4903 5.85743 19.7654C7.11615 20.0452 8.77722 20.1667 11 20.1667C13.2228 20.1667 14.8838 20.0452 16.1426 19.7654C17.3805 19.4903 18.114 19.0871 18.6006 18.6006C19.0871 18.114 19.4903 17.3805 19.7654 16.1426C20.0452 14.8838 20.1667 13.2228 20.1667 11C20.1667 8.77722 20.0452 7.11615 19.7654 5.85743C19.4903 4.61954 19.0871 3.88597 18.6006 3.39943C18.114 2.91288 17.3805 2.50968 16.1426 2.23457C14.8838 1.95483 13.2228 1.83333 11 1.83333C8.77722 1.83333 7.11615 1.95483 5.85743 2.23457C4.61954 2.50968 3.88597 2.91288 3.39943 3.39943C2.91288 3.88597 2.50968 4.61954 2.23457 5.85743C1.95483 7.11615 1.83333 8.77722 1.83333 11Z"
              fill="#98A3B8"
            ></path>
            <circle
              opacity="0.15"
              cx="19.348"
              cy="20.348"
              r="13.8275"
              transform="rotate(-33.8601 19.348 20.348)"
              fill="#98A3B8"
            ></circle>
          </svg>
          <span className="text-gray-450 dark:text-white font-semibold text-22">
            ضمانت بازگشت وجه
          </span>
        </li>
        <li className="xl:w-6/12 sm:w-1/2 w-full flex justify-start mb-6 rounded-xl">
          <svg
            className="ml-4"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.15"
              cx="19.7208"
              cy="19.8873"
              r="13.8275"
              transform="rotate(-36.651 19.7208 19.8873)"
              fill="#9018EE"
            ></circle>
            <path
              d="M3 13C3 15.4477 3.13246 17.3463 3.46153 18.827C3.78807 20.2963 4.29478 21.2921 5.00136 21.9986C5.70794 22.7052 6.70365 23.2119 8.17298 23.5385C9.65366 23.8675 11.5523 24 14 24C16.4477 24 18.3463 23.8675 19.827 23.5385C21.2963 23.2119 22.2921 22.7052 22.9986 21.9986C23.7052 21.2921 24.2119 20.2963 24.5385 18.827C24.8675 17.3463 25 15.4477 25 13C25 10.5523 24.8675 8.65366 24.5385 7.17298C24.2119 5.70365 23.7052 4.70794 22.9986 4.00136C22.2921 3.29478 21.2963 2.78807 19.827 2.46153C18.3463 2.13246 16.4477 2 14 2C11.5523 2 9.65366 2.13246 8.17298 2.46153C6.70365 2.78807 5.70794 3.29478 5.00136 4.00136C4.29478 4.70794 3.78807 5.70365 3.46153 7.17298C3.13246 8.65366 3 10.5523 3 13Z"
              stroke="#9018EE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M13.1577 9.18182L14.9195 7.33429C15.3244 6.90978 16.0046 6.88646 16.4388 7.2822L19.658 10.2159C20.0923 10.6117 20.1161 11.2766 19.7113 11.7011L17.8182 13.6864M13.1577 9.18182L8.28868 14.2877C8.08633 14.4999 7.98271 14.7844 8.00236 15.0738L8.20234 18.0187C8.23993 18.5724 8.71141 19.0021 9.27903 19L12.2983 18.9888C12.595 18.9877 12.8781 18.8667 13.0805 18.6545L17.8182 13.6864M13.1577 9.18182L17.8182 13.6864"
              stroke="#9018EE"
              strokeWidth="2"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="text-gray-450 dark:text-white font-semibold text-22">
            یادگیری با تمرین و آزمون
          </span>
        </li>
        <li className="xl:w-5/12 sm:w-1/2 w-full flex justify-start  mb-6 rounded-xl">
          <svg
            className="ml-4"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9609 6.54199C17.3785 6.92151 20.0785 9.61787 20.4617 13.0354"
              stroke="#51B6FF"
              strokeWidth="1.38512"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M13.9609 9.81372C15.5963 10.1314 16.8743 11.4103 17.1929 13.0457"
              stroke="#51B6FF"
              strokeWidth="1.38512"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8938 15.7506C14.5773 19.4331 15.4129 15.1728 17.7582 17.5165C20.0193 19.777 21.3198 20.2299 18.4541 23.0939C18.0953 23.3822 15.8154 26.8517 7.80314 18.8415C-0.210096 10.8303 3.25728 8.54805 3.54574 8.18931C6.41738 5.31741 6.86344 6.62453 9.12447 8.88499C11.4688 11.2297 7.21038 12.0681 10.8938 15.7506Z"
              stroke="#51B6FF"
              strokeWidth="1.38512"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <circle
              opacity="0.15"
              cx="21.2863"
              cy="19.8875"
              r="13.8275"
              transform="rotate(-36.651 21.2863 19.8875)"
              fill="#51B6FF"
            ></circle>
          </svg>
          <span className="text-gray-450 dark:text-white font-semibold text-22">
            پشتیبانی <Counter  /> ساعته
          </span>
        </li>
      </ul>
    </div>
  );
});

export default Right;
