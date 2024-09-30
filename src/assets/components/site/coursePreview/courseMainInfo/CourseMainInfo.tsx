
import { Skeleton } from "@nextui-org/skeleton";
import { memo, useContext } from "react";
import { TiHeartFullOutline } from "react-icons/ti";
import { IoMdShare } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { renderRegisterToCourse } from "@/assets/ts/coursePreview/shared";
import { CourseContext } from "@/assets/contexts/site/course.context";


const CourseMainInfo = memo(() => {
    const navigate = useNavigate()
    const course = useContext(CourseContext)
    

    return (
      <section className="mt-10 mb-9">
        <div className="container">
          <div className="bg-white dark:bg-gray-900 rounded-lg dark:shadow-whiteShadow sm:pt-6 pt-3 sm:pb-4 pb-3 shadow-sm">
            <div>
              <div className="flex lg:flex-row flex-col items-center xl:px-10 sm:px-5 px-3">
                <div className="lg:w-8/12 w-full flex flex-col lg:text-right text-center">
                  <div id="description" className="flex  items-center md:mb-5 mb-3 ">
                    <h1 className="text-biscay-700 dark:text-white md:text-4xl text-2xl font-bold inline-block w-full">
                      {course?.name || (
                        <Skeleton className="rounded w-1/2">
                          <div className="h-8  rounded bg-default-300"></div>
                        </Skeleton>
                      )}
                    </h1>
                  </div>
                  <p  className="text-gray-500 dark:text-gray-300 md:text-xl  text-base font-normal md:leading-8 leading-7 mb-5">
                    {course?.description || (
                      <>
                        <Skeleton className="rounded w-full">
                          <div className="h-3  rounded bg-default-300"></div>
                        </Skeleton>
                        <Skeleton className="rounded w-1/2 mt-1">
                          <div className="h-3  rounded bg-default-300"></div>
                        </Skeleton>
                      </>
                    )}
                  </p>
                  <div className="flex lg:flex-row flex-col items-center justify-between mb-2 lg:mb-0"></div>
                  <div className="flex lg:flex-row flex-col items-center justify-between lg:ml-3">
                    <div className="flex items-center lg:flex-row flex-col">
                      <button
                        onClick={() => (course?._id !== undefined && course?.price !== undefined) && renderRegisterToCourse(navigate, course?._id, course?.price)}
                        disabled={course?.price === undefined || course?.isUserRegisteredToThisCourse}
                        className="flex items-center font-bold md:text-lg text-sm group text-white bg-blue-700 disabled:bg-opacity-50 disabled:border-opacity-30 md:h-14 h-10 md:px-9 px-4 rounded \ transition duration-200 hover:bg-transparent hover:text-blue-700 border border-blue-700"
                      >
                        {
                          
                          course?.isUserRegisteredToThisCourse ? "شما دانشجوی این دوره هستید" : "خرید نقدی دوره (امکان دانلود)"
                        }
                        <svg
                          className="mr-1 mb-1"
                          width="23"
                          height="19"
                          viewBox="0 0 23 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="currentColor"
                            d="M4.73678 9.95638C10.9561 13.5636 11.7339 13.5637 17.9532 9.95638C24.1726 6.3491 24.1726 6.3491 17.9532 2.74183C11.7339 -0.865436 10.9561 -0.865446 4.73678 2.74183C1.62711 4.54547 0.0722656 5.44729 0.0722656 6.34911V14.4655C0.0722656 14.9635 0.476023 15.3673 0.974084 15.3673C1.47214 15.3673 1.8759 14.9635 1.8759 14.4655L1.8759 8.57971C1.8759 8.43679 2.03439 8.35027 2.15544 8.42626C2.84479 8.85901 3.70524 9.35808 4.73678 9.95638Z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M4.73678 10.8583C10.9561 14.4655 11.7339 14.4655 17.9532 10.8583L18.308 10.6524C18.5895 10.489 18.9445 10.6682 18.9652 10.9931C18.9965 11.4841 19.0104 12.0377 19.0104 12.6618C19.0104 17.1709 17.2068 18.0728 11.314 18.0728C5.02702 18.0728 3.67954 17.1709 3.67954 12.6618C3.67954 12.038 3.69291 11.4846 3.72307 10.9938C3.74307 10.6682 4.09864 10.4879 4.38077 10.6517L4.73678 10.8583Z"
                          ></path>
                        </svg>
                      </button>

                      <a
                        href="https://roocket.ir/what-is-vip"
                        className="mr-3 group sm:my-0 pt-3 lg:pt-0 my-3 flex items-center font-bold text-customOrange-700 text-sm transform transition duration-200 "
                      >
                        رایگان برای اعضای ویژه
                        <svg
                          className="mr-2 mb-1"
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.51948 0.49939C7.20651 0.49939 6.97288 0.669886 6.84031 0.790031C6.69449 0.922194 6.56604 1.08946 6.45512 1.25667C6.23117 1.59427 6.0115 2.03534 5.81242 2.4844C5.41124 3.38935 5.04899 4.42988 4.85966 4.99791C4.85688 5.00625 4.8487 5.0128 4.8388 5.01314C4.24561 5.03319 3.15848 5.08639 2.21094 5.22535C1.74282 5.294 1.27138 5.38866 0.903294 5.52572C0.722052 5.59321 0.524397 5.68579 0.361363 5.82009C0.196358 5.95602 0 6.19425 0 6.53779C0 6.77538 0.0898927 6.98571 0.171263 7.1358C0.258481 7.29668 0.373748 7.45612 0.497041 7.60667C0.744163 7.90843 1.07092 8.23147 1.40876 8.5387C2.08766 9.15608 2.87387 9.76573 3.32118 10.1028C3.32824 10.1081 3.33152 10.117 3.3286 10.1266C3.15682 10.6905 2.85847 11.7225 2.66868 12.6796C2.57441 13.155 2.50162 13.6376 2.49068 14.0451C2.48525 14.2479 2.49418 14.4577 2.53471 14.6502C2.57247 14.8294 2.65544 15.081 2.86777 15.2687C3.10609 15.4793 3.39291 15.5072 3.59151 15.4949C3.7946 15.4824 3.99799 15.4236 4.17924 15.3552C4.54528 15.217 4.95846 14.9859 5.35463 14.7363C6.15498 14.2321 7.00245 13.5776 7.4844 13.1928C7.49312 13.1858 7.50593 13.1856 7.51508 13.193C7.99693 13.5781 8.84509 14.2329 9.65143 14.7375C10.0508 14.9874 10.4682 15.2186 10.8406 15.3565C11.0254 15.425 11.2309 15.4827 11.4358 15.495C11.637 15.507 11.9159 15.4788 12.1539 15.2834C12.3769 15.1003 12.4695 14.8489 12.5125 14.6624C12.5578 14.466 12.5683 14.2527 12.5633 14.0484C12.5532 13.6378 12.4766 13.1534 12.3774 12.6782C12.1776 11.7209 11.8614 10.6887 11.6785 10.1223C11.6752 10.1123 11.6787 10.1029 11.686 10.0974C12.1355 9.75846 12.92 9.14965 13.5966 8.53378C13.9333 8.22731 14.2588 7.90519 14.5049 7.60424C14.6278 7.45408 14.7426 7.29503 14.8294 7.13449C14.9105 6.98466 15 6.77483 15 6.53779C15 6.19461 14.804 5.9565 14.6392 5.82053C14.4763 5.68622 14.2789 5.59364 14.0979 5.52616C13.7303 5.38912 13.2595 5.29446 12.792 5.22578C11.8457 5.08678 10.7594 5.03343 10.1649 5.01326C10.1549 5.01292 10.1468 5.00639 10.1441 4.99799C9.95906 4.42827 9.6059 3.38863 9.21283 2.48492C9.0178 2.03654 8.80202 1.5959 8.58089 1.25844C8.47137 1.09131 8.34406 0.923719 8.19875 0.791128C8.06628 0.670254 7.83292 0.49939 7.51948 0.49939Z"
                            fill="#FFA826"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="flex flex-col lg:items-end lg:mt-0 mt-2 items-center">
                          <div className="flex items-center text-biscay-700 dark:text-white justify-end">
                            <span className=" text-5xl font-bold">
                              {course?.price !== undefined ? course?.price == 0 ? "رایگان" : course?.price.toLocaleString() : (
                                <Skeleton className="rounded w-20">
                                  <div className="h-8  rounded bg-default-300"></div>
                                </Skeleton>
                              )}
                            </span>
                            {course?.price ? (
                              <svg
                                className="mr-2"
                                width="25"
                                height="27"
                                viewBox="0 0 25 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.52917 11.5828C3.03731 11.5828 3.48194 11.502 3.86304 11.3403C4.2557 11.1786 4.58484 10.9592 4.85046 10.682C5.11608 10.4048 5.31818 10.0815 5.45677 9.71193C5.59535 9.35392 5.67619 8.97281 5.69929 8.5686H3.96698C3.378 8.5686 2.89295 8.50509 2.51184 8.37805C2.13074 8.25101 1.83047 8.06623 1.61105 7.82371C1.39162 7.58119 1.23571 7.29247 1.14332 6.95756C1.06248 6.6111 1.02206 6.22422 1.02206 5.79691C1.02206 5.35806 1.08558 4.94231 1.21261 4.54965C1.33965 4.157 1.52443 3.81053 1.76695 3.51027C2.00948 3.21 2.30974 2.97325 2.66775 2.80002C3.03731 2.61524 3.45884 2.52285 3.93234 2.52285C4.31344 2.52285 4.67723 2.58637 5.02369 2.71341C5.37015 2.84044 5.67619 3.04254 5.94181 3.31971C6.20743 3.58533 6.41531 3.93757 6.56544 4.37642C6.72712 4.80372 6.80797 5.32342 6.80797 5.9355V7.37331H8.47098C8.60956 7.37331 8.70195 7.42528 8.74815 7.52922C8.80589 7.62161 8.83476 7.76597 8.83476 7.9623C8.83476 8.17017 8.80589 8.32608 8.74815 8.43002C8.70195 8.52241 8.60956 8.5686 8.47098 8.5686H6.77332C6.75022 9.13449 6.63474 9.67151 6.42686 10.1796C6.23053 10.6878 5.95336 11.1324 5.59535 11.5135C5.23734 11.8946 4.81004 12.1949 4.31344 12.4143C3.81685 12.6453 3.25674 12.7608 2.63311 12.7608H0.796861L0.692923 11.5828H2.52917ZM2.09609 5.72762C2.09609 6.01634 2.12496 6.26464 2.18271 6.47251C2.252 6.68039 2.36171 6.85362 2.51184 6.9922C2.67353 7.11924 2.88718 7.2174 3.1528 7.2867C3.41842 7.34444 3.75333 7.37331 4.15754 7.37331H5.71661V6.07408C5.71661 5.21948 5.54916 4.6074 5.21424 4.23784C4.87933 3.86828 4.41738 3.6835 3.8284 3.6835C3.27406 3.6835 2.84676 3.86828 2.54649 4.23784C2.24622 4.6074 2.09609 5.10399 2.09609 5.72762ZM11.3338 7.37331C11.4839 7.37331 11.582 7.42528 11.6282 7.52922C11.686 7.62161 11.7149 7.76597 11.7149 7.9623C11.7149 8.17017 11.686 8.32608 11.6282 8.43002C11.582 8.52241 11.4839 8.5686 11.3338 8.5686H8.47545C8.32531 8.5686 8.22715 8.52241 8.18095 8.43002C8.12321 8.33763 8.09434 8.19327 8.09434 7.99694C8.09434 7.78907 8.12321 7.63316 8.18095 7.52922C8.22715 7.42528 8.32531 7.37331 8.47545 7.37331H11.3338ZM14.1927 7.37331C14.3429 7.37331 14.441 7.42528 14.4872 7.52922C14.545 7.62161 14.5738 7.76597 14.5738 7.9623C14.5738 8.17017 14.545 8.32608 14.4872 8.43002C14.441 8.52241 14.3429 8.5686 14.1927 8.5686H11.3344C11.1843 8.5686 11.0861 8.52241 11.0399 8.43002C10.9822 8.33763 10.9533 8.19327 10.9533 7.99694C10.9533 7.78907 10.9822 7.63316 11.0399 7.52922C11.0861 7.42528 11.1843 7.37331 11.3344 7.37331H14.1927ZM17.0517 7.37331C17.2019 7.37331 17.3 7.42528 17.3462 7.52922C17.404 7.62161 17.4328 7.76597 17.4328 7.9623C17.4328 8.17017 17.404 8.32608 17.3462 8.43002C17.3 8.52241 17.2019 8.5686 17.0517 8.5686H14.1934C14.0433 8.5686 13.9451 8.52241 13.8989 8.43002C13.8412 8.33763 13.8123 8.19327 13.8123 7.99694C13.8123 7.78907 13.8412 7.63316 13.8989 7.52922C13.9451 7.42528 14.0433 7.37331 14.1934 7.37331H17.0517ZM19.9107 7.37331C20.0608 7.37331 20.159 7.42528 20.2052 7.52922C20.2629 7.62161 20.2918 7.76597 20.2918 7.9623C20.2918 8.17017 20.2629 8.32608 20.2052 8.43002C20.159 8.52241 20.0608 8.5686 19.9107 8.5686H17.0524C16.9023 8.5686 16.8041 8.52241 16.7579 8.43002C16.7002 8.33763 16.6713 8.19327 16.6713 7.99694C16.6713 7.78907 16.7002 7.63316 16.7579 7.52922C16.8041 7.42528 16.9023 7.37331 17.0524 7.37331H19.9107ZM21.4705 7.37331C21.9209 7.37331 22.2789 7.25205 22.5445 7.00953C22.8217 6.767 22.9602 6.43209 22.9602 6.00479V3.61421H24.0862V6.00479C24.0862 6.82475 23.8553 7.45993 23.3933 7.91033C22.9429 8.34918 22.3251 8.5686 21.5397 8.5686H19.9114C19.7612 8.5686 19.6631 8.52241 19.6169 8.43002C19.5591 8.33763 19.5303 8.19327 19.5303 7.99694C19.5303 7.78907 19.5591 7.63316 19.6169 7.52922C19.6631 7.42528 19.7612 7.37331 19.9114 7.37331H21.4705ZM24.2595 1.39685H22.8736V0.166916H24.2595V1.39685ZM22.0594 1.39685H20.6736V0.166916H22.0594V1.39685ZM10.2553 22.2221C10.2553 22.8458 10.1571 23.429 9.96076 23.9718C9.76444 24.5261 9.48149 25.0054 9.11193 25.4096C8.74237 25.8253 8.29197 26.1545 7.76073 26.397C7.24104 26.6395 6.65206 26.7608 5.99378 26.7608H4.97172C3.67826 26.7608 2.67353 26.3624 1.95751 25.5655C1.24149 24.7686 0.883476 23.6773 0.883476 22.2914V19.2599H1.99215V22.2568C1.99215 22.7534 2.0499 23.2038 2.16538 23.608C2.29242 24.0122 2.48297 24.3587 2.73704 24.6474C3.00267 24.9476 3.3318 25.1786 3.72446 25.3403C4.11712 25.502 4.59061 25.5828 5.14495 25.5828H5.90717C6.44996 25.5828 6.92345 25.4904 7.32766 25.3056C7.73186 25.1324 8.06678 24.8957 8.3324 24.5954C8.60956 24.2951 8.81167 23.9429 8.9387 23.5387C9.07729 23.1345 9.14658 22.713 9.14658 22.2741V17.6142H10.2553V22.2221ZM6.0804 17.2331H4.62526V15.9685H6.0804V17.2331ZM14.7322 22.5686C14.4319 22.5686 14.1432 22.5282 13.866 22.4473C13.5889 22.355 13.3406 22.2048 13.1211 21.9969C12.9133 21.7891 12.7458 21.5177 12.6188 21.1828C12.4917 20.8363 12.4282 20.409 12.4282 19.9009V11.8283H13.5542V19.693C13.5542 20.178 13.6582 20.5822 13.866 20.9056C14.0855 21.2174 14.4377 21.3733 14.9227 21.3733H15.2172C15.4713 21.3733 15.5983 21.5696 15.5983 21.9623C15.5983 22.3665 15.4713 22.5686 15.2172 22.5686H14.7322ZM15.5025 21.3733C15.9529 21.3733 16.2936 21.2636 16.5246 21.0442C16.7556 20.8247 16.871 20.5303 16.871 20.1607V19.5024C16.871 18.4977 17.1251 17.7124 17.6333 17.1465C18.1529 16.5806 18.869 16.2977 19.7813 16.2977C20.2548 16.2977 20.6706 16.3727 21.0286 16.5229C21.3866 16.673 21.6811 16.8866 21.9121 17.1638C22.1546 17.441 22.3336 17.7701 22.4491 18.1512C22.5646 18.5323 22.6223 18.9539 22.6223 19.4158C22.6223 20.409 22.3625 21.1828 21.8428 21.7371C21.3231 22.2914 20.6128 22.5686 19.712 22.5686C19.2501 22.5686 18.8055 22.482 18.3781 22.3088C17.9508 22.124 17.6159 21.8006 17.3734 21.3387C17.2695 21.6043 17.1424 21.8179 16.9923 21.9796C16.8422 22.1413 16.6863 22.2683 16.5246 22.3607C16.3629 22.4416 16.1897 22.4993 16.0049 22.534C15.8317 22.5571 15.6642 22.5686 15.5025 22.5686H15.2254C15.0752 22.5686 14.9771 22.5224 14.9309 22.43C14.8731 22.3376 14.8442 22.1933 14.8442 21.9969C14.8442 21.7891 14.8731 21.6332 14.9309 21.5292C14.9771 21.4253 15.0752 21.3733 15.2254 21.3733H15.5025ZM21.5136 19.5197C21.5136 18.9192 21.3808 18.4342 21.1152 18.0646C20.8496 17.6835 20.3934 17.4929 19.7467 17.4929C18.5456 17.4929 17.9451 18.1916 17.9451 19.589C17.9451 20.178 18.1068 20.6226 18.4301 20.9229C18.765 21.2232 19.1923 21.3733 19.712 21.3733C20.301 21.3733 20.7456 21.2116 21.0459 20.8883C21.3577 20.5649 21.5136 20.1087 21.5136 19.5197Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/6 w-full relative lg:order-last order-first lg:mr-14 lg:h-64 sm:h-80 h-48 lg:mb-0 mb-5 overflow-hidden rounded">
                  {course ? (
                    course.sessions.length ? 
                     (<video 
                        src={`http://192.168.235.220:4000/courses/covers/${course?.sessions[0].video}`}
                        poster={`http://192.168.235.220:4000/courses/covers/${course?.cover}`}
                        className="size-full bg-cover shadow-lg rounded h-max"
                        controls
                      ></video>)
                    : (<img
                      className="size-full bg-cover transform transition duration-200 hover:scale-110"
                      src={`http://192.168.235.220:4000/courses/covers/${course?.cover}`}
                      alt={course.name}
                    />)
                  ) : (
                    <Skeleton className="rounded size-full">
                      <div className="h-8  rounded bg-default-300"></div>
                    </Skeleton>
                  )}
                </div>
              </div>
              <hr className="mt-7 mb-5 border-gray-100 dark:border-gray-900 dark:border-opacity-10 mx-4" />
              <div className="flex items-center sm:flex-row flex-col justify-between md:px-10 px-5">
                <ul className="flex items-center">
                  <li className="ml-7 flex items-center cursor-pointer group">
                    <div className="flex items-center">
                      {course?.courseStudentsCount !== undefined ? (
                        <>
                          <TiHeartFullOutline className="size-7"/>
                          <span className="text-dark-550 dark:text-dark-200 font-medium text-17 mt-1 group-hover:text-red-450">
                            {course?.courseStudentsCount * 5}
                          </span>
                        </>
                      ) : (
                        <Skeleton className="rounded size-5">
                          <div className="h-8  rounded bg-default-300"></div>
                        </Skeleton>
                      )}
                    </div>
                  </li>
                  <li className="ml-7 flex items-center cursor-pointer group">
                    <a href="#comments" className="flex items-center">                      
                      {course?.comments !== undefined ? (
                        <>
                          <svg
                            className="ml-1"
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="fill-current text-gray-300 dark:text-dark-200 group-hover:text-green-700"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6397 0C20.9066 0 22.8927 1.66715 22.8927 10.0027C22.8927 15.4208 21.9552 18.755 17.7353 18.755C15.4802 18.755 14.8094 19.8263 14.1847 20.8238C13.6405 21.6929 13.1313 22.506 11.6399 22.506C10.1487 22.506 9.63949 21.6929 9.09526 20.8238C8.47058 19.8263 7.79973 18.755 5.54457 18.755C1.3247 18.755 0.386719 15.3142 0.386719 10.0027C0.386719 1.76547 2.37287 0 11.6397 0ZM12.5775 7.502C12.5775 6.9841 12.9973 6.56425 13.5152 6.56425H16.3285C16.8464 6.56425 17.2662 6.9841 17.2662 7.502C17.2662 8.01991 16.8464 8.43975 16.3285 8.43975H13.5152C12.9973 8.43975 12.5775 8.01991 12.5775 7.502ZM6.95097 10.3153C6.43306 10.3153 6.01322 10.7351 6.01322 11.253C6.01322 11.7709 6.43306 12.1908 6.95097 12.1908H16.3285C16.8464 12.1908 17.2662 11.7709 17.2662 11.253C17.2662 10.7351 16.8464 10.3153 16.3285 10.3153H6.95097Z"
                            ></path>
                          </svg>
                          <span className="text-dark-550 font-medium text-17 mt-1 dark:text-dark-200 group-hover:text-green-700">
                            {course?.comments.length}
                          </span>
                        </>
                      ) : (
                        <Skeleton className="rounded size-5">
                          <div className="h-8  rounded bg-default-300"></div>
                        </Skeleton>
                      )}
                    </a>
                  </li>                  
                </ul>
                <div className="flex sm:mt-0 mt-5 items-center">
                  <button disabled={course?.shortName === undefined} onClick={() => navigator.share({url: location.href, title: course?.name, text: course?.description})}>
                    <IoMdShare className="size-6"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default CourseMainInfo;
