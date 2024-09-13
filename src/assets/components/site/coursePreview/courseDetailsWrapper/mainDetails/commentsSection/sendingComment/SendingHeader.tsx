import { Dispatch, SetStateAction, memo, useMemo } from "react";

const SendingHeader = memo((
  {isOpenForm, setIsOpenForm}: {isOpenForm: boolean ,setIsOpenForm: Dispatch<SetStateAction<boolean>>}
) => {
  return (
    <>
      {useMemo(
        () => (
          <div className="flex items-center sm:flex-row flex-col justify-between mb-6">
            <h2 className="text-blue-700 dark:text-white text-27 font-bold sm:mb-0 mb-3 flex items-center ">
              <i className="w-2 h-2 bg-blue-700 dark:bg-white rounded-full ml-1 md:flex hidden"></i>
              دیدگاه و پرسش
            </h2>

            <div className={`flex flex-wrap  justify-center sm:w-fit w-full relative ${isOpenForm ? "hidden" : ""}`}>
              <button
                className="group border justify-center sm:mt-0 mt-4 sm:w-fit-content w-full border-blue-700 bg-blue-700 text-sm dark:hover:bg-transparent dark:hover:text-white dark:hover:border-white text-white px-3 h-12 rounded flex items-center font-semibold transition duration-200 hover:bg-white hover:text-blue-700 hover:shadow-sm"
                onClick={() => setIsOpenForm(true)}
              >
                افزودن دیدگاه و پرسش جدید
                <svg
                  className="mr-1"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    opacity="0.5"
                    d="M4.75 12.5C4.75 14.2328 4.84383 15.5741 5.07592 16.6184C5.30612 17.6543 5.66226 18.3514 6.15542 18.8446C6.64859 19.3377 7.34575 19.6939 8.38157 19.9241C9.4259 20.1562 10.7672 20.25 12.5 20.25C14.2328 20.25 15.5741 20.1562 16.6184 19.9241C17.6543 19.6939 18.3514 19.3377 18.8446 18.8446C19.3377 18.3514 19.6939 17.6543 19.9241 16.6184C20.1562 15.5741 20.25 14.2328 20.25 12.5C20.25 10.7672 20.1562 9.4259 19.9241 8.38157C19.6939 7.34575 19.3377 6.64859 18.8446 6.15542C18.3514 5.66226 17.6543 5.30613 16.6184 5.07592C15.5741 4.84383 14.2328 4.75 12.5 4.75C10.7672 4.75 9.4259 4.84383 8.38157 5.07592C7.34575 5.30613 6.64859 5.66226 6.15542 6.15542C5.66226 6.64859 5.30612 7.34575 5.07592 8.38157C4.84383 9.4259 4.75 10.7672 4.75 12.5Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    stroke="currentColor"
                    opacity="0.5"
                    d="M7.01992 17.9803C8.24521 19.2055 9.25998 20.0876 10.1626 20.662C11.0578 21.2316 11.8026 21.4728 12.5 21.4728C13.1974 21.4728 13.9422 21.2316 14.8374 20.662C15.74 20.0876 16.7548 19.2055 17.9801 17.9803C19.2054 16.755 20.0874 15.7402 20.6618 14.8376C21.2314 13.9424 21.4726 13.1976 21.4726 12.5002C21.4726 11.8027 21.2314 11.058 20.6618 10.1627C20.0874 9.26017 19.2054 8.24539 17.9801 7.0201C16.7548 5.79482 15.74 4.91274 14.8374 4.33839C13.9422 3.76874 13.1974 3.5276 12.5 3.5276C11.8026 3.5276 11.0578 3.76874 10.1626 4.33839C9.25998 4.91274 8.24521 5.79482 7.01992 7.0201C5.79463 8.24539 4.91255 9.26017 4.33821 10.1627C3.76856 11.058 3.52741 11.8027 3.52741 12.5002C3.52741 13.1976 3.76856 13.9424 4.33821 14.8376C4.91255 15.7402 5.79463 16.755 7.01992 17.9803Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    stroke="currentColor"
                    d="M9.66699 12.4997H12.5003M15.3337 12.4997H12.5003M12.5003 12.4997V9.66634V15.333"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>{" "}
              </button>
            </div>
          </div>
        ),
        [isOpenForm]
      )}
    </>
  );
});



export default SendingHeader;
