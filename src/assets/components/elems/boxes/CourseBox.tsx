import { CourseBoxType } from "@/assets/types/share/course.type";
import { memo } from "react";
import { Link } from "react-router-dom";

const CourseBox = memo(
  ({
    name,
    description,
    cover,
    shortName,
    price,
    isComplete,
    registers,
  }: CourseBoxType) => {
    return (
      <div className="xl:col-span-3 lg:col-span-4 xs:col-span-6 col-span-12 mb-16">
        <div className="shadow-smswiper-slide-active rounded-lg bg-white dark:bg-gray-900 relative pt-32 flex justify-center h-full">
          <div className="absolute -top-12 w-full  px-4 ">
            <Link
              to={`/course/${shortName}`}
              className=" inline-block h-40 overflow-hidden w-full rounded-lg"
            >
              <img
                className="w-full h-full bg-cover transform transition duration-200 hover:scale-110"
                src={`http://192.168.78.80:4000/courses/covers/${cover}`}
                alt={name}
              />
            </Link>
          </div>
          <div className="flex flex-col flex-1 w-full space-y-2">
            <div className=" px-4 flex flex-col flex-grow">
              <span className="flex items-center text-blue-700 dark:text-blue-400 font-semibold text-xs mb-2">
                <svg
                  className="ml-1"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="3.57789"
                    cy="3.28785"
                    r="2.74867"
                    fill="currentColor"
                  ></circle>
                </svg>
                {isComplete ? "به اتمام رسیده" : "درحال برگزاری"}
              </span>

              <Link to={`/course/${shortName}`} className="mb-2 inline-block">
                <span className="text-xl font-bold text-gray-800 dark:hover:text-blue-450 dark:text-white hover:text-blue-700 duration-200 transition">
                  {name}
                </span>
              </Link>
              <p className="mb-2 text-gray-360 dark:text-gray-940 text-sm font-normal  overflow-hidden leading-6">
                {description}
              </p>
            </div>

            <div>
              <div className="pb-1 px-4">
                <div className="">
                  <div className="flex items-center mb-2">
                    <svg
                      className="ml-1"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.15"
                        cx="12.3578"
                        cy="13.5069"
                        r="7.94769"
                        transform="rotate(-36.651 12.3578 13.5069)"
                        fill="#FFA826"
                      ></circle>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.72321 0.208862C6.45828 0.208862 6.26053 0.35318 6.14832 0.454879C6.02488 0.566749 5.91615 0.708328 5.82226 0.849867C5.63271 1.13563 5.44676 1.50898 5.27825 1.88909C4.93866 2.6551 4.63204 3.53586 4.47178 4.01668C4.46943 4.02373 4.4625 4.02928 4.45412 4.02956C3.95201 4.04653 3.0318 4.09156 2.22974 4.20919C1.8335 4.2673 1.43445 4.34742 1.12288 4.46344C0.969463 4.52057 0.802156 4.59893 0.664155 4.71262C0.524486 4.82767 0.358276 5.02932 0.358276 5.32011C0.358276 5.52123 0.434367 5.69926 0.503244 5.82631C0.57707 5.96248 0.674638 6.09744 0.779001 6.22488C0.98818 6.48031 1.26477 6.75375 1.55073 7.0138C2.1254 7.53639 2.79089 8.05244 3.16952 8.33775C3.17549 8.34225 3.17827 8.34976 3.1758 8.35787C3.03039 8.83525 2.77785 9.70874 2.61721 10.5189C2.53741 10.9213 2.47579 11.3298 2.46654 11.6748C2.46193 11.8464 2.46949 12.024 2.50381 12.1869C2.53577 12.3386 2.60599 12.5516 2.78573 12.7104C2.98745 12.8887 3.23024 12.9124 3.39834 12.902C3.57024 12.8913 3.74241 12.8416 3.89583 12.7837C4.20566 12.6667 4.5554 12.4711 4.89075 12.2598C5.56821 11.833 6.28556 11.279 6.69351 10.9533C6.70089 10.9474 6.71174 10.9472 6.71948 10.9534C7.12735 11.2794 7.84528 11.8337 8.52781 12.2608C8.86585 12.4724 9.21921 12.668 9.53437 12.7848C9.69084 12.8428 9.86477 12.8916 10.0382 12.902C10.2085 12.9122 10.4446 12.8883 10.646 12.7229C10.8348 12.568 10.9132 12.3551 10.9496 12.1972C10.9879 12.031 10.9968 11.8505 10.9926 11.6775C10.984 11.33 10.9192 10.92 10.8353 10.5177C10.6661 9.70737 10.3985 8.83366 10.2436 8.35427C10.2409 8.34578 10.2438 8.33785 10.25 8.33318C10.6305 8.04628 11.2945 7.53095 11.8673 7.00964C12.1523 6.75023 12.4278 6.47757 12.6361 6.22282C12.7401 6.09572 12.8372 5.96109 12.9108 5.8252C12.9794 5.69837 13.0552 5.52076 13.0552 5.32011C13.0552 5.02963 12.8893 4.82808 12.7497 4.71299C12.6119 4.5993 12.4448 4.52094 12.2916 4.46381C11.9804 4.34781 11.5819 4.26769 11.1862 4.20956C10.3852 4.0919 9.46569 4.04674 8.96245 4.02967C8.95396 4.02938 8.94716 4.02385 8.94484 4.01674C8.78821 3.53449 8.48928 2.65449 8.15655 1.88953C7.99147 1.50999 7.80882 1.13701 7.62164 0.851364C7.52894 0.709898 7.42117 0.56804 7.29818 0.455807C7.18605 0.353491 6.98852 0.208862 6.72321 0.208862Z"
                        fill="#FFA826"
                      ></path>
                    </svg>
                    <span className="text-gray-450 dark:text-white font-semibold text-13">
                      دسترسی رایگان برای اعضای ویژه
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="rounded px-2 bg-red-200"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-2 h-6 rounded ml-2">
                      <svg
                        className="ml-1 text-gray-500 dark:text-gray-300"
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.29921 7.10036C1.29921 8.47492 1.37342 9.55017 1.56095 10.394C1.74739 11.2329 2.04007 11.8164 2.45902 12.2353C2.87796 12.6543 3.4615 12.947 4.30041 13.1334C5.14419 13.3209 6.21945 13.3952 7.594 13.3952C8.96856 13.3952 10.0438 13.3209 10.8876 13.1334C11.7265 12.947 12.31 12.6543 12.729 12.2353C13.1479 11.8164 13.4406 11.2329 13.6271 10.394C13.8146 9.55017 13.8888 8.47492 13.8888 7.10036C13.8888 5.72581 13.8146 4.65055 13.6271 3.80677C13.4406 2.96786 13.1479 2.38432 12.729 1.96538C12.31 1.54643 11.7265 1.25375 10.8876 1.06731C10.0438 0.879784 8.96856 0.805572 7.594 0.805572C6.21945 0.805572 5.14419 0.879784 4.30041 1.06731C3.4615 1.25375 2.87796 1.54643 2.45902 1.96538C2.04007 2.38432 1.74739 2.96786 1.56095 3.80677C1.37342 4.65055 1.29921 5.72581 1.29921 7.10036Z"
                          stroke="currentColor"
                          strokeWidth="0.858919"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M7.59399 3.73825C7.59399 3.73825 7.59399 5.97967 7.59399 6.54002C7.59399 7.10038 7.59399 7.10038 8.15435 7.10038C8.71471 7.10038 10.9561 7.10038 10.9561 7.10038"
                          stroke="currentColor"
                          strokeWidth="0.858919"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="text-gray-500 dark:text-gray-300 font-normal text-xs">
                        00:27:45
                      </span>
                    </div>
                    <button className="flex group items-center px-2 h-6 ml-2 text-xs text-red-450 bg-red-700 dark:text-red-650 dark:hover:bg-red-650 dark:hover:text-white dark:bg-opacity-20 bg-opacity-10 rounded transition duration-200 hover:bg-opacity-100 hover:text-white group">
                      <svg
                        className="ml-1 -mt-0.5"
                        fill="none"
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="currentColor"
                          d="M3.95035 1.229C4.81955 1.229 5.61243 1.66166 6.21284 2.15457C6.81326 1.66166 7.60614 1.229 8.47534 1.229C10.3497 1.229 11.8691 2.62275 11.8691 4.34192C11.8691 7.80824 7.92382 9.82702 6.62321 10.3984C6.36123 10.5134 6.06445 10.5134 5.80248 10.3984C4.50187 9.827 0.556602 7.80816 0.556602 4.34184C0.556602 2.62267 2.07603 1.229 3.95035 1.229Z"
                          strokeWidth="0.761705"
                        ></path>
                      </svg>
                      {registers}
                    </button>{" "}
                  </div>

                  <div className="flex items-center">
                    {price ? (
                      <>
                        <span className="dark:text-white font-bold lg:text-3xl text-xl text-biscay-700">
                          {price.toLocaleString()}
                        </span>
                        <svg
                          className="mr-1 "
                          width="14"
                          height="16"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="text-gray-880 dark:text-white"
                            d="M1.14878 6.91843C1.44428 6.91843 1.70285 6.87142 1.92447 6.77739C2.15282 6.68337 2.34422 6.55577 2.49869 6.39458C2.65316 6.2334 2.77069 6.04535 2.85128 5.83044C2.93187 5.62224 2.97888 5.40062 2.99231 5.16556H1.98492C1.6424 5.16556 1.36033 5.12862 1.1387 5.05474C0.917077 4.98087 0.742461 4.87341 0.614858 4.73238C0.487254 4.59134 0.396588 4.42344 0.34286 4.22868C0.295849 4.0272 0.272343 3.80221 0.272343 3.55372C0.272343 3.29852 0.309281 3.05674 0.383156 2.8284C0.457032 2.60005 0.564488 2.39857 0.705523 2.22396C0.846559 2.04934 1.02117 1.91167 1.22937 1.81093C1.44428 1.70347 1.68941 1.64974 1.96477 1.64974C2.1864 1.64974 2.39795 1.68668 2.59943 1.76056C2.80091 1.83443 2.97888 1.95196 3.13335 2.11315C3.28782 2.26761 3.40871 2.47245 3.49601 2.72766C3.59004 2.97615 3.63705 3.27837 3.63705 3.63431V4.47045H4.60415C4.68474 4.47045 4.73847 4.50068 4.76533 4.56112C4.79891 4.61485 4.8157 4.6988 4.8157 4.81297C4.8157 4.93386 4.79891 5.02452 4.76533 5.08497C4.73847 5.13869 4.68474 5.16556 4.60415 5.16556H3.6169C3.60347 5.49464 3.53631 5.80693 3.41542 6.10244C3.30125 6.39794 3.14007 6.65651 2.93187 6.87813C2.72368 7.09976 2.47518 7.27438 2.1864 7.40198C1.89761 7.5363 1.57188 7.60346 1.20922 7.60346H0.141381L0.0809373 6.91843H1.14878ZM0.896929 3.51343C0.896929 3.68133 0.913719 3.82572 0.947299 3.94661C0.987594 4.0675 1.0514 4.16823 1.1387 4.24883C1.23273 4.3227 1.35697 4.37979 1.51144 4.42008C1.66591 4.45366 1.86067 4.47045 2.09573 4.47045H3.00239V3.71491C3.00239 3.21792 2.90501 2.86198 2.71024 2.64707C2.51548 2.43215 2.24684 2.3247 1.90433 2.3247C1.58196 2.3247 1.33347 2.43215 1.15885 2.64707C0.984237 2.86198 0.896929 3.15076 0.896929 3.51343ZM6.26895 4.47045C6.35626 4.47045 6.41335 4.50068 6.44021 4.56112C6.47379 4.61485 6.49058 4.6988 6.49058 4.81297C6.49058 4.93386 6.47379 5.02452 6.44021 5.08497C6.41335 5.13869 6.35626 5.16556 6.26895 5.16556H4.60675C4.51944 5.16556 4.46235 5.13869 4.43549 5.08497C4.40191 5.03124 4.38512 4.94729 4.38512 4.83312C4.38512 4.71223 4.40191 4.62156 4.43549 4.56112C4.46235 4.50068 4.51944 4.47045 4.60675 4.47045H6.26895ZM7.93155 4.47045C8.01886 4.47045 8.07594 4.50068 8.10281 4.56112C8.13639 4.61485 8.15318 4.6988 8.15318 4.81297C8.15318 4.93386 8.13639 5.02452 8.10281 5.08497C8.07594 5.13869 8.01886 5.16556 7.93155 5.16556H6.26935C6.18204 5.16556 6.12495 5.13869 6.09809 5.08497C6.06451 5.03124 6.04772 4.94729 6.04772 4.83312C6.04772 4.71223 6.06451 4.62156 6.09809 4.56112C6.12495 4.50068 6.18204 4.47045 6.26935 4.47045H7.93155ZM9.59415 4.47045C9.68146 4.47045 9.73854 4.50068 9.76541 4.56112C9.79899 4.61485 9.81578 4.6988 9.81578 4.81297C9.81578 4.93386 9.79899 5.02452 9.76541 5.08497C9.73854 5.13869 9.68146 5.16556 9.59415 5.16556H7.93194C7.84464 5.16556 7.78755 5.13869 7.76069 5.08497C7.72711 5.03124 7.71032 4.94729 7.71032 4.83312C7.71032 4.71223 7.72711 4.62156 7.76069 4.56112C7.78755 4.50068 7.84464 4.47045 7.93194 4.47045H9.59415ZM11.2567 4.47045C11.3441 4.47045 11.4011 4.50068 11.428 4.56112C11.4616 4.61485 11.4784 4.6988 11.4784 4.81297C11.4784 4.93386 11.4616 5.02452 11.428 5.08497C11.4011 5.13869 11.3441 5.16556 11.2567 5.16556H9.59454C9.50723 5.16556 9.45015 5.13869 9.42328 5.08497C9.3897 5.03124 9.37291 4.94729 9.37291 4.83312C9.37291 4.71223 9.3897 4.62156 9.42328 4.56112C9.45015 4.50068 9.50723 4.47045 9.59454 4.47045H11.2567ZM12.1638 4.47045C12.4257 4.47045 12.6339 4.39994 12.7884 4.2589C12.9496 4.11787 13.0302 3.9231 13.0302 3.67461V2.2844H13.685V3.67461C13.685 4.15144 13.5506 4.52082 13.282 4.78275C13.0201 5.03795 12.6608 5.16556 12.2041 5.16556H11.2571C11.1698 5.16556 11.1127 5.13869 11.0859 5.08497C11.0523 5.03124 11.0355 4.94729 11.0355 4.83312C11.0355 4.71223 11.0523 4.62156 11.0859 4.56112C11.1127 4.50068 11.1698 4.47045 11.2571 4.47045H12.1638ZM13.7857 0.994934H12.9798V0.279683H13.7857V0.994934ZM12.5063 0.994934H11.7004V0.279683H12.5063V0.994934ZM5.64177 12.9641C5.64177 13.3267 5.58468 13.6659 5.47051 13.9815C5.35634 14.3039 5.1918 14.5826 4.97689 14.8177C4.76198 15.0595 4.50005 15.2509 4.19112 15.3919C3.8889 15.5329 3.54638 15.6035 3.16357 15.6035H2.56921C1.81702 15.6035 1.23273 15.3718 0.816337 14.9084C0.399946 14.445 0.191751 13.8103 0.191751 13.0044V11.2414H0.836485V12.9842C0.836485 13.273 0.870065 13.5349 0.937225 13.77C1.0111 14.0051 1.12191 14.2065 1.26967 14.3744C1.42413 14.549 1.61554 14.6834 1.84388 14.7774C2.07223 14.8714 2.34758 14.9184 2.66995 14.9184H3.1132C3.42885 14.9184 3.70421 14.8647 3.93927 14.7572C4.17433 14.6565 4.36909 14.5188 4.52356 14.3442C4.68474 14.1696 4.80227 13.9648 4.87615 13.7297C4.95674 13.4946 4.99703 13.2495 4.99703 12.9943V10.2844H5.64177V12.9641ZM3.21394 10.0628H2.36773V9.32738H3.21394V10.0628ZM8.24526 13.1656C8.07064 13.1656 7.90274 13.1421 7.74156 13.095C7.58038 13.0413 7.43598 12.954 7.30838 12.8331C7.18749 12.7122 7.09011 12.5544 7.01624 12.3596C6.94236 12.1582 6.90542 11.9097 6.90542 11.6142V6.9197H7.56023V11.4933C7.56023 11.7754 7.62067 12.0104 7.74156 12.1985C7.86916 12.3798 8.074 12.4705 8.35607 12.4705H8.52733C8.67508 12.4705 8.74896 12.5846 8.74896 12.813C8.74896 13.048 8.67508 13.1656 8.52733 13.1656H8.24526ZM8.69324 12.4705C8.95516 12.4705 9.15328 12.4067 9.2876 12.279C9.42192 12.1514 9.48908 11.9802 9.48908 11.7653V11.3825C9.48908 10.7982 9.63683 10.3415 9.93233 10.0124C10.2346 9.68332 10.6509 9.51878 11.1815 9.51878C11.4569 9.51878 11.6986 9.56243 11.9068 9.64974C12.115 9.73705 12.2863 9.8613 12.4206 10.0225C12.5616 10.1837 12.6657 10.3751 12.7329 10.5967C12.8001 10.8183 12.8336 11.0635 12.8336 11.3321C12.8336 11.9097 12.6825 12.3596 12.3803 12.682C12.0781 13.0044 11.6651 13.1656 11.1412 13.1656C10.8726 13.1656 10.614 13.1152 10.3655 13.0144C10.117 12.907 9.92226 12.7189 9.78123 12.4503C9.72078 12.6048 9.64691 12.729 9.5596 12.823C9.47229 12.9171 9.38162 12.9909 9.2876 13.0447C9.19358 13.0917 9.09284 13.1253 8.98538 13.1454C8.88464 13.1588 8.78726 13.1656 8.69324 13.1656H8.53205C8.44475 13.1656 8.38766 13.1387 8.3608 13.085C8.32722 13.0312 8.31043 12.9473 8.31043 12.8331C8.31043 12.7122 8.32722 12.6216 8.3608 12.5611C8.38766 12.5007 8.44475 12.4705 8.53205 12.4705H8.69324ZM12.1889 11.3925C12.1889 11.0433 12.1117 10.7612 11.9572 10.5463C11.8027 10.3247 11.5375 10.2139 11.1614 10.2139C10.4629 10.2139 10.1137 10.6202 10.1137 11.4328C10.1137 11.7754 10.2077 12.0339 10.3957 12.2085C10.5905 12.3831 10.839 12.4705 11.1412 12.4705C11.4837 12.4705 11.7423 12.3764 11.9169 12.1884C12.0982 12.0003 12.1889 11.7351 12.1889 11.3925Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </>
                    ) : (
                      <span className="dark:text-white font-bold lg:text-xl text-lg text-biscay-700">
                        رایگان
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-center border-t border-gray-300 border-opacity-10">
                <Link
                  to={`/course/${shortName}`}
                  className="flex items-center my-4 transform group 0 font-bold text-base transition duration-200 dark:hover:text-gray-20 hover:text-dark-700 text-blue-700 dark:text-blue-500"
                >
                  <span>مشاهده اطلاعات دوره</span>
                  <svg
                    className="mr-1 -mt-0.5"
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      opacity="0.4"
                      d="M16.7544 11.5347L20.5098 11.2026C21.3525 11.2026 22.0358 11.8925 22.0358 12.7435C22.0358 13.5945 21.3525 14.2844 20.5098 14.2844L16.7544 13.9523C16.0933 13.9523 15.5573 13.4111 15.5573 12.7435C15.5573 12.0748 16.0933 11.5347 16.7544 11.5347Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M4.14372 11.5957C4.20242 11.5365 4.42169 11.286 4.62767 11.078C5.82925 9.77526 8.96663 7.64503 10.6079 6.9931C10.857 6.8891 11.4872 6.66769 11.8249 6.65204C12.1472 6.65204 12.4551 6.72696 12.7485 6.87457C13.1151 7.08144 13.4075 7.40796 13.5692 7.79263C13.6722 8.05877 13.8338 8.85831 13.8338 8.87285C13.9944 9.74619 14.0819 11.1663 14.0819 12.7363C14.0819 14.2303 13.9944 15.5923 13.8626 16.4802C13.8482 16.4958 13.6866 17.4877 13.5105 17.8276C13.1882 18.4494 12.5581 18.8341 11.8836 18.8341H11.8249C11.3853 18.8195 10.4617 18.4337 10.4617 18.4203C8.90794 17.7684 5.84475 15.741 4.61328 14.3936C4.61328 14.3936 4.26554 14.0469 4.11493 13.8311C3.88015 13.5202 3.76276 13.1355 3.76276 12.7509C3.76276 12.3215 3.89455 11.9223 4.14372 11.5957Z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CourseBox;
