import CommentType from "@/assets/types/share/comment.type";
import "@/assets/styles/tailwind/output/site/coursePreview/comment-answer.css";
import { calculateRelativeTimeDifference } from "@/assets/ts/utils/calculation";

type CommentBoxProps = CommentType;

const CommentBox = ({ 
  _id, 
  isAnswer,
  answerContent
}: CommentBoxProps) => {
  return (
    <div key={_id} className="mb-10">
      {/* Main Box */}
      <div className="sm:p-6 p-3 border border-gray-210 dark:border-opacity-0 rounded-lg mb-5 bg-gray-50 dark:bg-gray-950">
        <div className="flex sm:flex-row flex-col justify-between border-b border-gray-210 dark:border-opacity-20">
          <div className="flex ">
            <i className="absolute"></i>

            <div className="ml-2 pb-5">
              <div className="relative ">
                <div className="sm:w-14 sm:h-14 w-12 h-12 bg-gray-300 group relative rounded-full overflow-hidden border-4 border-solid border-gray-80">
                  <a href="/@piranzad">
                    <img
                      className="transition duration-200 transform group-hover:scale-110 w-full h-full lozad"
                      data-src="https://static.roocket.ir/images/avatar/2022/12/3/es2C4oyTfzaCu5dhIfj3cXHr0VavYCT7GaLmrZgJ.png"
                      alt="user-avatar"
                      src="https://static.roocket.ir/images/avatar/2022/12/3/es2C4oyTfzaCu5dhIfj3cXHr0VavYCT7GaLmrZgJ.png"
                      data-loaded="true"
                    />
                    <div className="w-full h-full absolute top-0 right-0 bg-biscay-700 bg-opacity-20 z-0"></div>
                  </a>
                </div>
              </div>{" "}
            </div>

            <div className="flex relative justify-center flex-col pb-5 space-y-1">
              <b className="font-semibold sm:text-xl text-base text-chambray-700 dark:text-white dark:hover:text-blue-450 hover:text-blue-700 transition duration-200 ">
                <a href="/@piranzad">پویا</a>
              </b>
              <span className="text-gray-360 dark:text-gray-200 text-sm">
                3 ماه پیش
              </span>
            </div>
          </div>
          <div className="flex sm:items-start sm:justify-start justify-end sm:mb-0 mb-2">
            <a
              x-data=""
              href="#answer-109816"
              className="flex items-center ml-2 text-sm text-gray-450 font-medium bg-gray-500 dark:hover:bg-dark-400 dark:bg-dark-930 bg-opacity-10 h-6 px-2 dark:text-gray-920 rounded hover:bg-opacity-100 hover:text-white transition duration-200"
            >
              <svg
                className="ml-1"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  d="M5.25065 8.23266L2.33398 5.29242L5.25065 2.35217"
                  stroke-width="0.857886"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  stroke="currentColor"
                  d="M11.6673 11.7609V7.64455C11.6673 7.02071 11.4215 6.42242 10.9839 5.9813C10.5463 5.54018 9.95282 5.29236 9.33398 5.29236H2.33398"
                  stroke-width="0.857886"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              پاسخ
            </a>

            <button className="flex items-center text-sm text-red-450 dark:hover:bg-dark-930 dark:text-red-650 font-medium bg-red-700 dark:bg-opacity-20 bg-opacity-10 h-6 px-2 rounded hover:bg-opacity-100 hover:text-white transition duration-200">
              <svg
                className="ml-1"
                width="15"
                height="13"
                fill="none"
                viewBox="0 0 15 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  d="M4.75 0.624878C5.80649 0.624878 6.77021 1.15065 7.5 1.74964C8.22979 1.15065 9.19351 0.624878 10.25 0.624878C12.5282 0.624878 14.375 2.31858 14.375 4.40774C14.375 8.62007 9.57964 11.0733 7.99879 11.7676C7.68036 11.9075 7.31964 11.9075 7.00121 11.7676C5.42036 11.0733 0.625 8.61997 0.625 4.40764C0.625 2.31848 2.47183 0.624878 4.75 0.624878Z"
                  stroke-width="0.771644"
                ></path>
              </svg>
              2
            </button>
          </div>
        </div>
        <div className="content-area comment-area">
          <p>سلام روزتون بخیر </p>
          <p>
            من اومدم این دوره رو بخرم ولی اکثرش رو بلدم کاش میشد تیکه تیکه خرید
            و این مبلغ خیلی برای این دوره زیاد هست. این رو تو یوتوب سرچ کنی حتی
            با این تایتل ها رایگان میاره
          </p>
        </div>
      </div>

      {answerContent ? (
        // Answer Box
        <div className="space-y-2 relative  comment-answer-section">
          <div>
            <div className="sm:p-6 p-3 bg-gray-400 dark:bg-gray-700 border border-gray-210 dark:border-opacity-0 rounded-lg mb-5 sm:mr-14 bg-gray-210 bg-opacity-20 dark:bg-dark-950 dark:bg-opacity-50 relative sub-item">
              <div className="flex sm:flex-row flex-col justify-between border-b border-gray-210 dark:border-opacity-20">
                <div className="flex ">
                  <i className="absolute"></i>

                  <div className="ml-2 pb-5">
                    <div className="relative">
                      <div className="sm:w-14 sm:h-14 w-12 h-12 bg-gray-300 group relative rounded-full overflow-hidden border-4 border-solid border-gray-80">
                          <img
                            className="transition duration-200 transform group-hover:scale-110 w-full h-full lozad"
                            alt="user-avatar"
                            src={answerContent?.creator.profile ? `http://192.168.235.220:4000/courses/covers${answerContent.creator.profile}` : "/public/image/user/none.png"}                            
                          />
                          <div className="w-full h-full absolute top-0 right-0 bg-biscay-700 bg-opacity-20 z-0"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex relative justify-center flex-col pb-5 space-y-1">
                    <b className="font-semibold sm:text-xl text-base text-chambray-700 dark:text-white dark:hover:text-blue-450 hover:text-blue-700 transition duration-200 ">
                      <span>{answerContent?.creator.name}</span>
                    </b>
                    <span className="text-gray-360 dark:text-gray-200 text-sm">
                      {calculateRelativeTimeDifference(
                        answerContent?.createdAt || ""
                      )}
                      <span>{answerContent?.createdAt}</span>
                    </span>
                  </div>
                </div>
                <div className="flex sm:items-start sm:justify-start justify-end sm:mb-0 mb-2">                  

                  <button className="flex items-center text-sm text-red-450 dark:hover:bg-dark-930 dark:text-red-650 font-medium bg-red-700 dark:bg-opacity-20 bg-opacity-10 h-6 px-2 rounded hover:bg-opacity-100 hover:text-white transition duration-200">
                    <svg
                      className="ml-1"
                      width="15"
                      height="13"
                      fill="none"
                      viewBox="0 0 15 13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="currentColor"
                        d="M4.75 0.624878C5.80649 0.624878 6.77021 1.15065 7.5 1.74964C8.22979 1.15065 9.19351 0.624878 10.25 0.624878C12.5282 0.624878 14.375 2.31858 14.375 4.40774C14.375 8.62007 9.57964 11.0733 7.99879 11.7676C7.68036 11.9075 7.31964 11.9075 7.00121 11.7676C5.42036 11.0733 0.625 8.61997 0.625 4.40764C0.625 2.31848 2.47183 0.624878 4.75 0.624878Z"
                        stroke-width="0.771644"
                      ></path>
                    </svg>
                    {
                      answerContent?.score
                    }
                  </button>
                </div>
              </div>
              <div className="content-area comment-area">
                <p>
                  {
                    answerContent?.body
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CommentBox;
