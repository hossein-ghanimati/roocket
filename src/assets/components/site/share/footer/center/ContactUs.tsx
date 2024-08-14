import { memo } from "react";

const ContactUs = memo(() => {
  return (
    <div className="md:col-span-3">
      <div className="relative flex md:items-start md:mx-0  mx-auto w-fit-content items-center">
        <h3 className="text-xl relative font-bold dark:tew dark:text-white text-biscay-700 mb-4 z-10">
          ارتباط با ما
        </h3>
        <span className="z-0 w-4 h-4 flex absolute bg-blue-700 opacity-20 top-0 rounded-full -right-2"></span>
      </div>

      <ul>
        <li className="flex items-center justify-between mb-7 last:mb-0">
          <span className="flex items-center">
            <span className="relative ml-3">
              <i className="flex w-5 h-5 bg-blue-700 opacity-20 rounded-full"></i>

              <svg
                className="dark:text-blue-400 text-blue-980 absolute -top-1 -left-2"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5632 4.17184C15.4183 3.54105 15.2294 3.0782 15.0064 2.72729C14.2794 3.41662 13.3594 4.25301 12.3603 4.98727C10.9828 5.99965 9.61574 6.69415 8.50008 6.69415C7.38443 6.69415 6.01733 5.99965 4.63986 4.98727C3.64079 4.25301 2.72075 3.41662 1.99377 2.72729C1.77081 3.0782 1.58187 3.54105 1.437 4.17184C1.43013 4.20176 1.42338 4.23196 1.41675 4.26247C2.07618 4.86961 2.86033 5.55149 3.70121 6.1695C5.10702 7.2027 6.83246 8.18184 8.50008 8.18184C10.1677 8.18184 11.8931 7.2027 13.299 6.1695C14.1398 5.55149 14.924 4.86961 15.5834 4.26246C15.5768 4.23196 15.57 4.20176 15.5632 4.17184Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 7.5C0 13.6762 1.50025 15 8.5 15C15.4997 15 17 13.6762 17 7.5C17 1.32375 15.4997 0 8.5 0C1.50025 0 0 1.32375 0 7.5ZM8.5 13.75C6.7824 13.75 5.49884 13.6672 4.5262 13.4764C3.56964 13.2889 3.0028 13.0139 2.62683 12.6822C2.25086 12.3505 1.9393 11.8503 1.72671 11.0063C1.51055 10.1481 1.41667 9.01553 1.41667 7.5C1.41667 5.98447 1.51055 4.85192 1.72671 3.99371C1.9393 3.14968 2.25086 2.64953 2.62683 2.31779C3.0028 1.98605 3.56964 1.71115 4.5262 1.52357C5.49884 1.33284 6.7824 1.25 8.5 1.25C10.2176 1.25 11.5012 1.33284 12.4738 1.52357C13.4304 1.71115 13.9972 1.98605 14.3732 2.31779C14.7491 2.64953 15.0607 3.14968 15.2733 3.99371C15.4895 4.85192 15.5833 5.98447 15.5833 7.5C15.5833 9.01553 15.4895 10.1481 15.2733 11.0063C15.0607 11.8503 14.7491 12.3505 14.3732 12.6822C13.9972 13.0139 13.4304 13.2889 12.4738 13.4764C11.5012 13.6672 10.2176 13.75 8.5 13.75Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>

            <span className="text-sm font-medium text-dark-550 dark:text-gray-920">
              {" "}
              ایمیل:{" "}
            </span>
          </span>
          <a
            className="dark:text-white line-clamp-1 text-biscay-650 dark:hover:text-blue-450 font-medium text-xs transition transform  hover:text-dark-700 duration-200 ease-linear"
            href="mailto:hossein.ghanimati1398@gmail.com"
          >
            hossein@gmail.com
          </a>
        </li>
        <li className="flex items-center justify-between mb-7 last:mb-0">
          <span className="flex items-center">
            <span className="relative ml-3">
              <i className="flex w-5 h-5 bg-blue-700 opacity-20 rounded-full"></i>
              <svg
                className="dark:text-blue-400 text-blue-980 absolute -top-1 -left-2"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.14715 9.85653L8.80585 8.19987M7.14715 9.85653C5.93121 11.0732 0.81617 8.93438 1.73474 6.22947C2.6533 3.52456 12.7125 0.221534 14.7459 2.25616C16.7793 4.29079 13.4633 14.3879 10.772 15.2723C8.08068 16.1567 5.93121 11.0732 7.14715 9.85653Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>

            <span className="text-sm font-medium text-dark-550 dark:text-gray-920">
              {" "}
              آی دی تلگرام:{" "}
            </span>
          </span>
          <a
            className="dark:text-white text-biscay-650 dark:hover:text-blue-450 font-medium text-sm transition ltr transform  hover:text-dark-700 duration-200 ease-linear"
            target="_blank"
            href="https://t.me/ulasoy"
          >
            ulasoy@
          </a>
        </li>
      </ul>
    </div>
  );
});

export default ContactUs;
