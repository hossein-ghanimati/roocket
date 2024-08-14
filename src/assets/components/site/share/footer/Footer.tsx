import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="relative z-0">
      <div className="container">
        <div className="content pb-10 pt-10">
          <div className="mb-12 relative">
            <span className="absolute border-t border-1 sm:top-2/4 top-5 trasform sm:translate-y-2/4 dark:border-blue-980 border-chambray-100 w-full z-0 right-0"></span>
            <div className="flex items-center justify-between sm:flex-row flex-col relative z-10">
              <div className="logo w-fit-content dark:bg-dark-890 sm:px-0 bg-background-main-rgb px-5 sm:pl-8 sm:mb-0 mb-6">
                <svg
                  className="hidden dark:inline-block"
                  width="203"
                  height="46"
                  viewBox="0 0 203 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.7434 30.6068L50.6089 24.5795H42.3797V30.6068H38.7888V9.56836H54.125C57.6037 9.56836 60.5587 13.0179 60.5587 17.074C60.5587 20.3719 58.5388 23.4044 55.7708 24.3142L55.4716 24.4279L61.7183 30.6447H56.7434V30.6068ZM42.3797 20.5235H53.9754C55.5838 20.5235 57.0052 18.8935 57.0052 17.036C57.0052 15.1407 55.6212 13.5865 53.9754 13.5865H42.3797V20.5235Z"
                    fill="white"
                  ></path>
                  <path
                    d="M75.448 31.0177C68.0418 31.0177 63.7776 27.227 63.7776 20.5933V19.5319C63.7776 12.8981 68.0418 9.10742 75.448 9.10742C82.8542 9.10742 87.1184 12.8981 87.1184 19.5319V20.5933C87.1184 27.227 82.8542 31.0177 75.448 31.0177ZM75.448 13.3909C71.2586 13.3909 67.3685 14.1491 67.3685 19.6456V20.5174C67.3685 26.014 71.2586 26.7721 75.448 26.7721C79.4504 26.7721 83.5649 26.014 83.5649 20.5174V19.6456C83.5649 14.1112 79.4504 13.3909 75.448 13.3909Z"
                    fill="white"
                  ></path>
                  <path
                    d="M101.743 31.0177C94.3364 31.0177 90.0723 27.227 90.0723 20.5933V19.5319C90.0723 12.8981 94.3364 9.10742 101.743 9.10742C109.149 9.10742 113.413 12.8981 113.413 19.5319V20.5933C113.413 27.227 109.186 31.0177 101.743 31.0177ZM101.743 13.3909C97.5533 13.3909 93.6632 14.1491 93.6632 19.6456V20.5174C93.6632 26.014 97.5533 26.7721 101.743 26.7721C105.745 26.7721 109.86 26.014 109.86 20.5174V19.6456C109.86 14.1112 105.782 13.3909 101.743 13.3909Z"
                    fill="white"
                  ></path>
                  <path
                    d="M191.441 30.6068V13.8139H183.511V9.56836H202.962V13.8139H195.032V30.6068H191.441Z"
                    fill="white"
                  ></path>
                  <path
                    d="M128.003 30.944C124.524 30.944 116.445 29.9205 116.445 20.5954V19.4961C116.445 10.171 124.524 9.14746 128.003 9.14746C133.352 9.14746 135.372 10.2468 135.746 10.5121V14.0375C134.885 13.7342 131.893 12.7865 128.003 12.7865C122.916 12.7865 120.223 15.1368 120.223 19.6098V20.5196C120.223 24.9926 122.916 27.3428 128.003 27.3428C131.893 27.3428 134.885 26.3952 135.746 26.0919V29.6173C135.372 29.8447 133.352 30.944 128.003 30.944Z"
                    fill="white"
                  ></path>
                  <path
                    d="M153.475 30.4963L142.964 20.6405V30.4963H139.187V9.64746H142.964V19.6928L153.251 9.64746L159.348 9.64746L148.239 20.0719L159.984 30.4963H153.475Z"
                    fill="white"
                  ></path>
                  <path
                    d="M162.152 30.4963V9.64746H180.593V13.2107H165.93V18.3661H179.508V21.7398H165.93V26.8952H180.593V30.4963H162.152Z"
                    fill="white"
                  ></path>
                  <path
                    d="M200.232 5.17373H199.259V7.44816H199.035V5.17373H198.025V4.94629H200.269V5.17373H200.232Z"
                    fill="white"
                  ></path>
                  <path
                    d="M202.738 4.94629H203V7.44816H202.776V5.74234C202.776 5.70443 202.776 5.59071 202.776 5.36327C202.551 5.85606 202.289 6.38676 201.953 6.95537H201.728C201.392 6.42467 201.092 5.89397 200.868 5.36327C200.868 5.43908 200.868 5.59071 200.868 5.74234V7.44816H200.644V4.94629H200.905C201.13 5.47699 201.429 6.0835 201.803 6.72792C202.215 6.0835 202.514 5.47699 202.738 4.94629Z"
                    fill="white"
                  ></path>
                  <path
                    d="M14.4049 45.0127L9.16821 37.2796L14.4049 31.9727L19.6042 37.2796L14.4049 45.0127Z"
                    fill="#FF8429"
                  ></path>
                  <path
                    d="M28.802 15.5175L28.802 33.0306L21.6202 27.4961C21.6202 27.4961 22.4057 20.6729 22.5553 15.4796C22.6301 12.9019 20.2736 10.7412 14.401 7.82237C8.56579 10.7791 6.20926 12.9398 6.28407 15.5175C6.39629 20.6729 7.2192 27.534 7.2192 27.534L0 33.0306L0 15.5175C0 12.4091 1.30918 9.604 3.85274 7.21586C5.64819 5.51004 8.11693 3.91795 11.8949 2.0605L14.4384 0.80957L16.982 2.0605C20.7225 3.91795 23.2286 5.51004 25.0241 7.21586C27.5302 9.604 28.802 12.4091 28.802 15.5175Z"
                    fill="#E81C4D"
                  ></path>
                </svg>
                <svg
                  className="inline-block dark:hidden"
                  width="220"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 578 128"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <g>
                        <polygon
                          className="fill-[#ff9900]"
                          points="46.3,124.7 31.8,103.4 46.3,88.9 60.9,103.4 			"
                        ></polygon>
                        <path
                          className="fill-[#ff3333]"
                          d="M86.5,43.7v48l-20-15.1c0,0,2.2-18.7,2.6-32.9c0.2-7-6.4-13-22.6-21c-16.3,8.1-22.8,14-22.6,21
                    c0.4,14.2,2.6,32.9,2.6,32.9l-20,15.1v-48c0-8.5,3.6-16.2,10.7-22.8c5-4.7,11.9-9,22.3-14.1l7-3.5l7,3.5
                    c10.4,5.1,17.3,9.5,22.3,14.1C82.9,27.5,86.5,35.2,86.5,43.7z"
                        ></path>
                      </g>
                      <path
                        className="fill-[#637789]"
                        d="M163.7,86.1l-17-16.5h-21.5v16.5h-12V26.4h43.7c10.3,0,18.9,9.9,18.9,21.6c0,9.2-5.5,17.7-13.2,20.5
                l17.9,17.6H163.7z M156.4,56.5c3.9,0,7.4-4,7.4-8.5c0-4.6-3.4-8.5-7.4-8.5h-31.2v16.9H156.4z"
                      ></path>
                      <path
                        className="st3"
                        d="M216.1,87.4c-21.3,0-33.5-10.8-33.5-29.6v-2.9c0-18.8,12.2-29.7,33.5-29.7c21.3,0,33.5,10.8,33.5,29.7v2.9
                C249.6,76.6,237.4,87.4,216.1,87.4z M216.1,39c-12.9,0-21.4,2.7-21.4,16.1v2.4c0,13.3,8.6,16.1,21.4,16.1
                c11.2,0,21.5-1.9,21.5-16.1V55C237.6,40.9,227.3,39,216.1,39z"
                      ></path>
                      <path
                        className="st3"
                        d="M289.2,87.4c-21.3,0-33.5-10.8-33.5-29.6v-2.9c0-18.8,12.2-29.7,33.5-29.7c21.3,0,33.5,10.8,33.5,29.7v2.9
                C322.7,76.6,310.5,87.4,289.2,87.4z M289.2,39c-12.9,0-21.4,2.7-21.4,16.1v2.4c0,13.3,8.6,16.1,21.4,16.1
                c11.2,0,21.5-1.9,21.5-16.1V55C310.8,40.9,300.4,39,289.2,39z"
                      ></path>
                      <polygon
                        className="st3"
                        points="537.5,86.1 537.5,40.1 515.4,40.1 515.4,26.4 571.6,26.4 571.6,40.1 549.5,40.1 549.5,86.1 		"
                      ></polygon>
                      <path
                        className="st3"
                        d="M362.2,87.1c-10,0-33.2-2.9-33.2-29.4v-3c0-26.5,23.2-29.4,33.2-29.4c14.9,0,20.7,3,22.1,3.9l0.5,0.3v11.7
                l-1.4-0.5c-2.3-0.8-10.4-3.4-21.2-3.4c-13.7,0-20.6,5.9-20.6,17.6v2.5c0,11.7,6.9,17.6,20.6,17.6c10.7,0,18.9-2.6,21.2-3.4
                l1.4-0.5v11.7l-0.5,0.3C382.9,84.1,377.1,87.1,362.2,87.1z"
                      ></path>
                      <polygon
                        className="st3"
                        points="432.6,85.8 404.9,60.2 404.9,85.8 392.3,85.8 392.3,26.6 404.9,26.6 404.9,52.8 432,26.6 450.4,26.6 
                420,56.2 452.3,85.8 		"
                      ></polygon>
                      <polygon
                        className="st3"
                        points="456,85.8 456,26.6 509.3,26.6 509.3,38.5 468.6,38.5 468.6,50.5 506.3,50.5 506.3,61.9 468.6,61.9 
                468.6,73.9 509.3,73.9 509.3,85.8 		"
                      ></polygon>
                    </g>
                  </g>
                </svg>{" "}
              </div>

              <ul className="flex dark:bg-dark-890 bg-background-main-rgb sm:pr-8 self-center ">
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCXAJ3-8bZkSwqt9zGSvBF3w"
                    rel="nofollow"
                    className="group flex items-center rounded justify-center w-10 h-10 dark:hover:bg-blue-970 dark:bg-blue-800 dark:bg-opacity-25 bg-blue-50 group hover:bg-blue-700 transition duration-300 ease-linear"
                  >
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                        d="M18.6728 2.84651C18.6728 2.84651 18.4918 1.56883 17.9344 1.00782C17.2286 0.269445 16.4396 0.265826 16.0776 0.222392C13.4861 0.0341796 9.59518 0.0341797 9.59518 0.0341797H9.58794C9.58794 0.0341797 5.69701 0.0341796 3.10547 0.222392C2.74352 0.265826 1.95448 0.269445 1.24868 1.00782C0.691281 1.56883 0.513926 2.84651 0.513926 2.84651C0.513926 2.84651 0.325714 4.34859 0.325714 5.84705V7.2514C0.325714 8.74986 0.510307 10.2519 0.510307 10.2519C0.510307 10.2519 0.69128 11.5296 1.24506 12.0906C1.95086 12.829 2.87744 12.8037 3.29006 12.8833C4.77404 13.0245 9.59155 13.0679 9.59155 13.0679C9.59155 13.0679 13.4861 13.0607 16.0776 12.8761C16.4396 12.8326 17.2286 12.829 17.9344 12.0906C18.4918 11.5296 18.6728 10.2519 18.6728 10.2519C18.6728 10.2519 18.8574 8.75348 18.8574 7.2514V5.84705C18.8574 4.34859 18.6728 2.84651 18.6728 2.84651ZM7.67686 8.95617V3.74776L12.6826 6.36101L7.67686 8.95617Z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="https://www.facebook.com/roocketi"
                    className="group flex items-center rounded justify-center w-10 h-10 dark:hover:bg-blue-970 dark:bg-blue-800 dark:bg-opacity-25 bg-blue-50 group hover:bg-blue-700 transition duration-300 ease-linear"
                    rel="nofollow"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                        d="M16.1408 8.59849C16.1408 4.2531 12.6181 0.730469 8.27274 0.730469C3.92735 0.730469 0.404724 4.2531 0.404724 8.59849C0.404724 12.5256 3.28193 15.7807 7.04336 16.3709V10.8728H5.04563V8.59849H7.04336V6.86506C7.04336 4.89314 8.21804 3.80391 10.0152 3.80391C10.8758 3.80391 11.7765 3.95759 11.7765 3.95759V5.89386H10.7844C9.80701 5.89386 9.50212 6.5004 9.50212 7.12323V8.59849H11.6843L11.3354 10.8728H9.50212V16.3709C13.2636 15.7807 16.1408 12.5256 16.1408 8.59849Z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="https://twitter.com/roocketir"
                    className="group flex items-center rounded justify-center w-10 h-10 dark:hover:bg-blue-970 dark:bg-blue-800 dark:bg-opacity-25 bg-blue-50 group hover:bg-blue-700 transition duration-300 ease-linear"
                    rel="nofollow"
                  >
                    <svg
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                        d="M6.42709 14.3713C13.0839 14.3713 16.726 8.85479 16.726 4.07238C16.726 3.91729 16.7225 3.75876 16.7156 3.60368C17.4241 3.09132 18.0355 2.45668 18.5211 1.72959C17.8613 2.02316 17.1607 2.21489 16.4434 2.29823C17.1987 1.84547 17.7643 1.1342 18.0352 0.296281C17.3246 0.717401 16.5475 1.01446 15.7372 1.17474C15.1913 0.594624 14.4694 0.210518 13.6832 0.081809C12.8971 -0.0469004 12.0904 0.086955 11.388 0.46268C10.6855 0.838405 10.1264 1.43507 9.79706 2.16043C9.46772 2.88579 9.38651 3.69945 9.56597 4.47559C8.12714 4.40339 6.71954 4.02962 5.43443 3.37852C4.14932 2.72741 3.01539 1.81351 2.10614 0.69605C1.64401 1.49281 1.5026 2.43565 1.71064 3.33293C1.91869 4.23021 2.46058 5.01461 3.22618 5.52671C2.65141 5.50846 2.08923 5.35371 1.58609 5.07525V5.12005C1.58558 5.95619 1.87464 6.76671 2.40415 7.41383C2.93365 8.06095 3.67092 8.50472 4.49062 8.66972C3.95819 8.8154 3.39938 8.83662 2.85743 8.73176C3.08873 9.45084 3.53877 10.0798 4.14473 10.5308C4.75068 10.9818 5.48233 11.2324 6.23755 11.2475C4.9554 12.2547 3.37158 12.801 1.74118 12.7984C1.45204 12.7979 1.16318 12.7802 0.87616 12.7453C2.53248 13.8079 4.45922 14.3723 6.42709 14.3713Z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="https://www.instagram.com/roocketir/"
                    className="group flex items-center rounded justify-center w-10 h-10 dark:hover:bg-blue-970 dark:bg-blue-800 dark:bg-opacity-25 bg-blue-50 group hover:bg-blue-700 transition duration-300 ease-linear"
                    rel="nofollow"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                        d="M8.77638 2.139C10.8663 2.139 11.1137 2.14816 11.9356 2.18483C12.6995 2.21844 13.1119 2.34676 13.3869 2.4537C13.7505 2.59425 14.0133 2.76535 14.2852 3.03728C14.5602 3.31226 14.7282 3.57197 14.8688 3.93555C14.9757 4.21054 15.1041 4.62607 15.1377 5.38686C15.1743 6.21181 15.1835 6.45929 15.1835 8.54611C15.1835 10.636 15.1743 10.8835 15.1377 11.7054C15.1041 12.4692 14.9757 12.8817 14.8688 13.1567C14.7282 13.5203 14.5571 13.783 14.2852 14.0549C14.0102 14.3299 13.7505 14.498 13.3869 14.6385C13.1119 14.7455 12.6964 14.8738 11.9356 14.9074C11.1107 14.9441 10.8632 14.9532 8.77638 14.9532C6.6865 14.9532 6.43902 14.9441 5.61712 14.9074C4.85328 14.8738 4.4408 14.7455 4.16582 14.6385C3.80223 14.498 3.53947 14.3269 3.26754 14.0549C2.99255 13.78 2.82451 13.5203 2.68396 13.1567C2.57702 12.8817 2.4487 12.4662 2.41509 11.7054C2.37842 10.8804 2.36926 10.6329 2.36926 8.54611C2.36926 6.45624 2.37842 6.20875 2.41509 5.38686C2.4487 4.62301 2.57702 4.21054 2.68396 3.93555C2.82451 3.57197 2.99561 3.3092 3.26754 3.03728C3.54252 2.76229 3.80223 2.59425 4.16582 2.4537C4.4408 2.34676 4.85633 2.21844 5.61712 2.18483C6.43902 2.14816 6.6865 2.139 8.77638 2.139ZM8.77638 0.730469C6.65289 0.730469 6.38707 0.739635 5.55296 0.776299C4.7219 0.812964 4.15054 0.9474 3.65557 1.13989C3.13921 1.34154 2.70229 1.60736 2.26843 2.04428C1.83151 2.47814 1.56569 2.91506 1.36404 3.42836C1.17155 3.92639 1.03712 4.49469 1.00045 5.32575C0.963786 6.16292 0.95462 6.42874 0.95462 8.55222C0.95462 10.6757 0.963786 10.9415 1.00045 11.7756C1.03712 12.6067 1.17155 13.1781 1.36404 13.673C1.56569 14.1894 1.83151 14.6263 2.26843 15.0602C2.70229 15.494 3.13921 15.7629 3.65252 15.9615C4.15054 16.154 4.71884 16.2884 5.5499 16.3251C6.38402 16.3618 6.64984 16.3709 8.77332 16.3709C10.8968 16.3709 11.1626 16.3618 11.9967 16.3251C12.8278 16.2884 13.3992 16.154 13.8941 15.9615C14.4074 15.7629 14.8443 15.494 15.2782 15.0602C15.7121 14.6263 15.9809 14.1894 16.1795 13.6761C16.372 13.1781 16.5065 12.6098 16.5431 11.7787C16.5798 10.9446 16.589 10.6788 16.589 8.55528C16.589 6.43179 16.5798 6.16598 16.5431 5.33186C16.5065 4.5008 16.372 3.92944 16.1795 3.43447C15.9871 2.91506 15.7212 2.47814 15.2843 2.04428C14.8505 1.61042 14.4135 1.34154 13.9002 1.14294C13.4022 0.950456 12.8339 0.816019 12.0028 0.779355C11.1657 0.739635 10.8999 0.730469 8.77638 0.730469Z"
                      ></path>
                      <path
                        className="fill-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                        d="M8.77637 4.53441C6.55817 4.53441 4.75856 6.33402 4.75856 8.55222C4.75856 10.7704 6.55817 12.57 8.77637 12.57C10.9946 12.57 12.7942 10.7704 12.7942 8.55222C12.7942 6.33402 10.9946 4.53441 8.77637 4.53441ZM8.77637 11.1585C7.33729 11.1585 6.17014 9.9913 6.17014 8.55222C6.17014 7.11314 7.33729 5.94599 8.77637 5.94599C10.2155 5.94599 11.3826 7.11314 11.3826 8.55222C11.3826 9.9913 10.2155 11.1585 8.77637 11.1585Z"
                      ></path>
                      <path
                        className="fill-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                        d="M13.8911 4.37544C13.8911 4.89486 13.4694 5.31345 12.9531 5.31345C12.4337 5.31345 12.0151 4.8918 12.0151 4.37544C12.0151 3.85603 12.4367 3.43744 12.9531 3.43744C13.4694 3.43744 13.8911 3.85909 13.8911 4.37544Z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="https://t.me/roocketir"
                    className="group flex items-center rounded justify-center w-10 h-10 dark:hover:bg-blue-970 dark:bg-blue-800 dark:bg-opacity-25 bg-blue-50 group hover:bg-blue-700 transition duration-300 ease-linear"
                    rel="nofollow"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="stroke-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                        d="M7.13998 9.96507L8.8695 8.23767M7.13998 9.96507C5.87212 11.2337 0.538685 9.00354 1.49647 6.18315C2.45426 3.36275 12.943 -0.0813092 15.0632 2.04019C17.1834 4.16169 13.7258 14.6899 10.9196 15.6121C8.11337 16.5342 5.87212 11.2337 7.13998 9.96507Z"
                        stroke="currentColor"
                        stroke-width="1.56405"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-9 grid-cols-1 xl:gap-20 gap-7">
            <div className="md:col-span-4">
              <div className="relative flex flex-col md:items-start md:mx-0  mx-auto w-fit-content items-center">
                <h3 className="text-xl relative font-bold dark:text-white text-biscay-700 mb-4 z-10">
                  درباره راکت
                </h3>
                <span className="z-0 w-4 h-4 flex absolute bg-blue-700 opacity-20 top-0 rounded-full -right-2"></span>
              </div>

              <div className="flex relative ">
                <span className="md:flex hidden absolute top-1 right-0 w-1 h-1 mt-2 bg-blue-700 opacity-30 rounded-full"></span>
                <div className="md:mr-2 md:text-right text-center">
                  <p className="text-base mb-2 md:w-10/12 w-full md:text-right text-center leading-7 dark:text-gray-920 text-biscay-650 ">
                    راکت یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح
                    ایران است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین
                    مقالات و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی
                    قرار دهد. تبدیل کردن برنامه نویسان ایرانی به بهترین برنامه
                    نویسان جهان هدف ماست.
                  </p>

                  <a
                    href="/skills"
                    className="inline-flex items-center group dark:hover:text-blue-60 dark:text-blue-950 text-blue-700 text-13 font-medium transition transform  duration dark:hover:text-gray-210-20 hover:text-dark-700 md:mx-0 mx-auto"
                  >
                    مشاهده اطلاعات مسیریادگیری
                    <svg
                      className="mr-1"
                      width="15"
                      height="10"
                      viewBox="0 0 15 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        opacity="0.4"
                        d="M10.4527 4.15949L13.3686 3.90161C14.023 3.90161 14.5536 4.43735 14.5536 5.09812C14.5536 5.75889 14.023 6.29463 13.3686 6.29463L10.4527 6.03674C9.93928 6.03674 9.52308 5.61649 9.52308 5.09812C9.52308 4.57888 9.93928 4.15949 10.4527 4.15949"
                      ></path>
                      <path
                        fill="currentColor"
                        className="fill-current duration-200 transition dark:group-hover:text-blue-60 dark:text-blue-950 text-blue dark:hover:text-gray-210-700 grou-hover:text-dark-700"
                        d="M0.660621 4.20689C0.706196 4.16087 0.87646 3.96637 1.0364 3.80487C1.96941 2.79331 4.40555 1.13921 5.67995 0.632993C5.87343 0.552242 6.36272 0.38032 6.62499 0.368164C6.87523 0.368164 7.11429 0.42634 7.34216 0.540954C7.6268 0.701589 7.85381 0.95513 7.97936 1.25382C8.05933 1.46048 8.18488 2.08131 8.18488 2.09259C8.30957 2.77073 8.3775 3.87346 8.3775 5.09255C8.3775 6.25259 8.30957 7.31017 8.20724 7.99959C8.19606 8.01175 8.07051 8.78192 7.93379 9.04589C7.68355 9.52866 7.19426 9.82735 6.67057 9.82735H6.62499C6.28361 9.81606 5.56644 9.5165 5.56644 9.50608C4.35998 8.99987 1.98145 7.42565 1.02522 6.37936C1.02522 6.37936 0.755212 6.11019 0.638263 5.94261C0.455961 5.70122 0.36481 5.40253 0.36481 5.10383C0.36481 4.77041 0.46714 4.46043 0.660621 4.20689"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="relative mt-11 dark:bg-dark-890">
                <form>
                  <svg
                    className="dark:text-gray-880 text-gray-990 absolute top-2/4 transform -translate-y-2/4 right-4"
                    width="14"
                    height="13"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9714 6.11867C21.7669 5.19351 21.5001 4.51466 21.1854 4C20.1591 5.01102 18.8602 6.23772 17.4497 7.31464C15.5051 8.79945 13.575 9.81806 12 9.81806C10.425 9.81806 8.49494 8.79945 6.55027 7.31464C5.13983 6.23772 3.84094 5.01102 2.81462 4C2.49985 4.51466 2.23311 5.19351 2.0286 6.11867C2.0189 6.16254 2.00937 6.20685 2 6.25158C2.93097 7.14206 4.03799 8.14215 5.22513 9.04856C7.2098 10.5639 9.64571 12 12 12C14.3543 12 16.7902 10.5639 18.7749 9.04856C19.962 8.14215 21.069 7.14206 22 6.25158C21.9906 6.20685 21.9811 6.16254 21.9714 6.11867Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 11C0 20.0585 2.118 22 12 22C21.882 22 24 20.0585 24 11C24 1.9415 21.882 0 12 0C2.118 0 0 1.9415 0 11ZM12 20.1667C9.57515 20.1667 7.76307 20.0452 6.38993 19.7654C5.03949 19.4903 4.23924 19.0871 3.70846 18.6006C3.17768 18.114 2.73783 17.3805 2.43771 16.1426C2.13254 14.8838 2 13.2228 2 11C2 8.77722 2.13254 7.11615 2.43771 5.85743C2.73783 4.61954 3.17768 3.88597 3.70846 3.39943C4.23924 2.91288 5.03949 2.50968 6.38993 2.23457C7.76307 1.95483 9.57515 1.83333 12 1.83333C14.4249 1.83333 16.2369 1.95483 17.6101 2.23457C18.9605 2.50968 19.7608 2.91288 20.2915 3.39943C20.8223 3.88597 21.2622 4.61954 21.5623 5.85743C21.8675 7.11615 22 8.77722 22 11C22 13.2228 21.8675 14.8838 21.5623 16.1426C21.2622 17.3805 20.8223 18.114 20.2915 18.6006C19.7608 19.0871 18.9605 19.4903 17.6101 19.7654C16.2369 20.0452 14.4249 20.1667 12 20.1667Z"
                      fill="currentColor"
                    ></path>
                    <rect
                      x="7"
                      y="15"
                      width="10"
                      height="2"
                      rx="1"
                      fill="currentColor"
                    ></rect>
                  </svg>
                  <div className="h-10 rounded dark:bg-dark-890 dark:border-gray-880 border-gray-100 border-t border-r border-b dark:border-opacity-5 border-1">
                    <input
                      type="text"
                      className="border-none dark:rounded dark:bg-transparent m-0 h-full w-full pl-24 dark:placeholder-gray-880 dark:text-white  placeholder-gray-400 text-gray-400 text-xs py-2 pr-8"
                      placeholder="برای اطلاع از جدیدترین اخبار و جشنوراه‌های تخفیفی راکت ایمیل خود را وارد کنید."
                    />
                  </div>

                  <button
                    type="submit"
                    className="h-full bg-blue-700 absolute top-0 left-0 px-5 text-white rounded-l text-13 hover:bg-dark-700 transition duration-200 ease-linear"
                  >
                    ثبت ایمیل
                  </button>
                  <button className="h-full bg-blue-700 absolute top-0 left-0 px-5 text-white rounded-l text-13 hover:bg-dark-700 transition duration-200 ease-linear">
                    <svg
                      className="w-5"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="25 25 50 50"
                    >
                      <circle
                        className="stroke-current text-white text-opacity-30"
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        stroke-width="8"
                        stroke-linecap="round"
                        stroke-dashoffset="0"
                        stroke-dasharray="200, 300"
                      ></circle>
                      <circle
                        className="stroke-current text-white"
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        stroke-width="8"
                        stroke-linecap="round"
                        stroke-dashoffset="0"
                        stroke-dasharray="100, 200"
                      >
                        <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 50 50"
                          to="360 50 50"
                          dur="2.5s"
                          repeatCount="indefinite"
                        ></animateTransform>
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;-30;-124"
                          dur="1.25s"
                          repeatCount="indefinite"
                        ></animate>
                        <animate
                          attributeName="stroke-dasharray"
                          values="0,200;110,200;110,200"
                          dur="1.25s"
                          repeatCount="indefinite"
                        ></animate>
                      </circle>
                    </svg>{" "}
                  </button>
                </form>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="relative flex md:items-start md:mx-0  mx-auto w-fit-content items-center">
                <h3 className="text-xl relative font-bold dark:text-white text-biscay-700 mb-4 z-10">
                  بخش های سایت
                </h3>
                <span className="z-0 w-4 h-4 flex absolute bg-blue-700 opacity-20 top-0 rounded-full -right-2"></span>
              </div>
              <ul className="flex flex-col md:items-start items-center">
                <li className="mb-3 last:mb-0 flex items-center">
                  <span className="md:flex hidden w-1 h-1 ml-2 mb-1 dark:text-gray-940 bg-blue-700 opacity-30 rounded-full"></span>
                  <a
                    className="text-base text-biscay-650 dark:text-gray-920 transition transform dark:hover:text-blue-450 hover:text-dark-700 duration-200 ease-linear"
                    href="/terms"
                  >
                    قوانین و مقررات{" "}
                  </a>
                </li>
                <li className="mb-3 last:mb-0 flex items-center">
                  <span className="md:flex hidden  w-1 h-1 ml-2 mb-1 bg-blue-700 opacity-30 rounded-full"></span>
                  <a
                    className="text-base text-biscay-650 dark:text-gray-920 transition transform dark:hover:text-blue-450 hover:text-dark-700 duration-200 ease-linear"
                    href="/masters"
                  >
                    مدرسان راکت{" "}
                  </a>
                </li>
                <li className="mb-3 last:mb-0 flex items-center">
                  <span className="md:flex hidden w-1 h-1 ml-2 mb-1 dark:text-gray-940 bg-blue-700 opacity-30 rounded-full"></span>
                  <a
                    className="text-base text-biscay-650 dark:text-gray-920 transition transform dark:hover:text-blue-450 hover:text-dark-700 duration-200 ease-linear"
                    href="/about-us"
                  >
                    درباره راکت{" "}
                  </a>
                </li>
                <li className="mb-3 last:mb-0 flex items-center">
                  <span className="md:flex hidden w-1 h-1 ml-2 mb-1 dark:text-gray-940 bg-blue-700 opacity-30 rounded-full"></span>
                  <a
                    className="text-base text-biscay-650 dark:text-gray-920 transition transform dark:hover:text-blue-450 hover:text-dark-700 duration-200 ease-linear"
                    href="/contact-us"
                  >
                    ارتباط با ما
                  </a>
                </li>
              </ul>
            </div>

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
                        className="dark:text-blue-950 text-blue-980 absolute -top-1 -left-2"
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
                    className="dark:text-white text-biscay-650 dark:hover:text-blue-450 font-medium text-sm transition transform  hover:text-dark-700 duration-200 ease-linear"
                    href="mailto:info@roocket.ir"
                  >
                    hossein.ghanimati1398@gmail.com
                  </a>
                </li>
                <li className="flex items-center justify-between mb-7 last:mb-0">
                  <span className="flex items-center">
                    <span className="relative ml-3">
                      <i className="flex w-5 h-5 bg-blue-700 opacity-20 rounded-full"></i>
                      <svg
                        className="dark:text-blue-950 text-blue-980 absolute -top-1 -left-2"
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
                    href="https://t.me/roocketir"
                  >
                    @roocket_support
                  </a>
                </li>
              </ul>

              <div className="flex items-center mt-9 space-x-reverse space-x-2">
                <div className="cursor-pointer">
                  <img
                    className="lozad"
                    width="90"
                    height="110"
                    alt="samandehi"
                    src="/img/pic/samandehi.png?width=90&amp;height=110"
                  />
                </div>

                <div className="cursor-pointer">
                  <img
                    className="lozad"
                    data-src="/img/pic/enamad.png?width=100&amp;height=110"
                    width="100"
                    height="110"
                    alt="enamad"
                    src="/img/pic/enamad.png?width=100&amp;height=110"
                    data-loaded="true"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-2 flex md:justify-start justify-center">
            <p className="dark:bg-dark-890 dark:text-gray-970 bg-background-main-rgb pl-3 text-center relative z-10 inline-block text-xs text-chambray-400">
              کليه حقوق محصولات و محتوای اين سایت متعلق به راکت می باشد و هر
              گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت
              ماست.
            </p>

            <span className="absolute border-t border-1 top-2/4 trasform translate-y-2/4  dark:border-blue-980 border-chambray-100 w-full z-0 right-0"></span>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
