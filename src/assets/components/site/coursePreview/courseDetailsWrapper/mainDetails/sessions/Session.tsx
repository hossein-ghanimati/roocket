import SessionType from "@/assets/types/share/session.type";
import { FaLockOpen } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { renderRegisterToCourse } from "@/assets/ts/coursePreview/shared";

type SessionProps = SessionType & {
  number: number;
  isUserRegistered: boolean;
  courseID: string;
  coursePrice: number;
};

const Session = memo((props: SessionProps) => {
  const navigate = useNavigate()
  return (
    <div className=" overflow-hidden md:flex-row flex-col flex relative dark:!bg-dark-900 bg-gray-210  dark:bg-opacity-0  bg-opacity-10 md:items-center  justify-between border rounded-lg dark:border-opacity-0 border-gray-210  md:py-4 py-2 md:pl-5 pl-2 md:pr-0 pr-12 mb-2">
      <div className="flex items-center md:w-1/2 w-full">
        <div className="w-14 flex md:relative absolute right-0 top-1/2 transform md:-translate-y-0 -translate-y-1/2 border-gray-210 border-l md:h-fit-content h-5/6 justify-center items-center">
          <span className="text-gray-500 md:text-xl text-md  font-bold text-center relative">
            {props.number}
            <i className="absolute rounded-full bottom-0 right-2/4 transform translate-x-2/4 w-full bg-gray-500 flex h-1 min-w-22px"></i>
          </span>
        </div>

        {(props.free && true) || props.isUserRegistered ? (
          <Link
            to={`/episode/${props._id}`}
            className="text-dark-650 dark:text-white dark:hover:text-blue-400 hover:text-dark-700 md:text-xl text-md   pr-5  h-7 overflow-hidden leading-7 hover:text-gray-900 transition duration-200 line-clamp-1"
          >
            {props.title}
          </Link>
        ) : (
          <span className="text-dark-650 dark:text-white dark:hover:text-blue-400 hover:text-dark-700 md:text-xl text-md   pr-5  h-7 overflow-hidden leading-7 hover:text-gray-900 transition duration-200 line-clamp-1">
            {props.title}
          </span>
        )}
      </div>

      <div className="flex items-center md:justify-between sm:mt-0 mt-2 justify-end md:w-1/2 w-full">
        <span className="flex gap-1 items-center text-gray-300 dark:text-white sm:text-base text-sm">
          {props.time}
          <CiClock2 className="text-gray-600 dark:text-white"/>
        </span>
        <div className="flex items-center   justify-end">
          <span
            className="flex items-center text-gray-500 bg-gray-500 bg-opacity-10 pt-2 pb-1.5 md:mr-6 mr-3 px-3 rounded-md text-13 font-semibold hover:bg-opacity-100 group transition duration-200 hover:text-white"
          >
            {
              (props.free && true) || props.isUserRegistered ?
                <Link
                  to={`/episode/${props._id}`}
                  className="flex items-center justify-center gap-2"
                >
                  مشاهده
                  {
                    props.isUserRegistered ?
                      <FaUnlock/>
                    :
                      <FaLockOpen/>
                  }
                </Link>
              : 
                <button
                  className="flex items-center justify-center gap-2"
                  onClick={() => renderRegisterToCourse(navigate, props.courseID, props.coursePrice)}
                >
                  ثبت نام
                  <FaLock/>
                </button>
            }          
            
          </span>
        </div>
      </div>
    </div>
  );
});

export default Session;
