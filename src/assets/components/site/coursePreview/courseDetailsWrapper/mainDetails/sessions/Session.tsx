import SessionType from "@/assets/types/share/session.type";

import { memo } from "react";
import { Link } from "react-router-dom";

type SessionProps = SessionType & {number: number}

const Session = memo((props: SessionProps) => {
  return (
    <div className=" overflow-hidden md:flex-row flex-col flex relative dark:!bg-dark-900 bg-gray-210  dark:bg-opacity-0  bg-opacity-10 md:items-center  justify-between border rounded-lg dark:border-opacity-0 border-gray-210  md:py-4 py-2 md:pl-5 pl-2 md:pr-0 pr-12 mb-2">
      <div className="flex items-center md:w-1/2 w-full">
        <div className="w-14 flex md:relative absolute right-0 top-1/2 transform md:-translate-y-0 -translate-y-1/2 border-gray-210 border-l md:h-fit-content h-5/6 justify-center items-center">
          <span className="text-gray-500 md:text-xl text-md  font-bold text-center relative">
            {
              props.number
            }
            <i className="absolute rounded-full bottom-0 right-2/4 transform translate-x-2/4 w-full bg-gray-500 flex h-1 min-w-22px"></i>
          </span>
        </div>

        <Link
          to={`/episode/${props._id}`}
          className="text-dark-650 dark:text-white dark:hover:text-blue-400 hover:text-dark-700 md:text-xl text-md   pr-5  h-7 overflow-hidden leading-7 hover:text-gray-900 transition duration-200 line-clamp-1"
        >
          {
            props.title
          }
        </Link>
      </div>

      <div className="flex items-center md:justify-between sm:mt-0 mt-2 justify-end md:w-1/2 w-full">
        <span className="flex items-center text-gray-300 dark:text-white sm:text-base text-sm">
          {props.time}
          <svg
            className="mb-1 mr-1"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.593771 7.42999C0.593771 8.88334 0.67242 10.0107 0.867812 10.8899C1.06171 11.7623 1.36257 12.3536 1.78212 12.7731C2.20166 13.1927 2.79289 13.4935 3.66534 13.6874C4.54452 13.8828 5.67189 13.9615 7.12525 13.9615C8.57861 13.9615 9.70598 13.8828 10.5852 13.6874C11.4576 13.4935 12.0488 13.1927 12.4684 12.7731C12.8879 12.3536 13.1888 11.7623 13.3827 10.8899C13.5781 10.0107 13.6567 8.88334 13.6567 7.42999C13.6567 5.97663 13.5781 4.84926 13.3827 3.97007C13.1888 3.09763 12.8879 2.5064 12.4684 2.08685C12.0488 1.66731 11.4576 1.36644 10.5852 1.17255C9.70598 0.977155 8.57861 0.898505 7.12525 0.898505C5.67189 0.898505 4.54452 0.977155 3.66534 1.17255C2.79289 1.36644 2.20166 1.66731 1.78212 2.08685C1.36257 2.5064 1.06171 3.09763 0.867812 3.97007C0.67242 4.84926 0.593771 5.97663 0.593771 7.42999Z"
              stroke="#98A3B8"
              stroke-width="1.18754"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7.125 3.86731C7.125 3.86731 7.125 6.24239 7.125 6.83616C7.125 7.42994 7.125 7.42994 7.71877 7.42994C8.31255 7.42994 10.6876 7.42994 10.6876 7.42994"
              stroke="#98A3B8"
              stroke-width="1.18754"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
        <div className="flex items-center   justify-end">
          <Link
            to={`/episode/${props._id}`}
            className="flex items-center text-gray-500 bg-gray-500 bg-opacity-10 pt-2 pb-1.5 md:mr-6 mr-3 px-3 rounded-md text-13 font-semibold hover:bg-opacity-100 group transition duration-200 hover:text-white"
          >
            مشاهده
            <svg
              className="mr-1"
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-current transition duration-200 text-gray-500 group-hover:text-white"
                d="M7.24633 5.00009C7.24633 5.31615 7.52993 5.66681 7.99874 5.66681C8.46755 5.66681 8.75115 5.31615 8.75115 5.00009C8.75115 4.68402 8.46755 4.33336 7.99874 4.33336C7.52993 4.33336 7.24633 4.68402 7.24633 5.00009Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                className="fill-current transition duration-200 text-gray-500 group-hover:text-white"
                d="M0.298885 5.75498C-0.100931 5.32192 -0.10093 4.67825 0.298885 4.24519C1.51832 2.92435 4.37283 0.333008 7.99945 0.333008C11.6261 0.333008 14.4806 2.92435 15.7 4.24519C16.0998 4.67825 16.0998 5.32192 15.7 5.75498C14.4806 7.07582 11.6261 9.66716 7.99945 9.66716C4.37283 9.66716 1.51832 7.07582 0.298885 5.75498ZM5.91288 5.00009C5.91288 6.10475 6.84675 7.00026 7.99874 7.00026C9.15073 7.00026 10.0846 6.10475 10.0846 5.00009C10.0846 3.89542 9.15073 2.99991 7.99874 2.99991C6.84675 2.99991 5.91288 3.89542 5.91288 5.00009Z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Session;
