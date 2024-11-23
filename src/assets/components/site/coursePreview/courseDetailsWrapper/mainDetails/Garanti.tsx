import garantiImg from "/public/image/propaganda/garanti.png"
import { memo } from "react";

const Garanti = memo(() => {
  return (
    <section
      id="garanti"
      className="bg-white dark:bg-gray-900  relative sm:pt-7 pt-48 shadow-sm rounded-lg sm:px-9 px-3 pb-8 mb-8"
    >
      <h2 className="text-blue-700 dark:text-white sm:text-28 text-lg font-bold flex sm:justify-start justify-center items-center mb-6">
        <i className="bg-blue-700 dark:bg-white ml-1 w-2 h-2 rounded-full sm:flex hidden"></i>
        گارانتی بازگشت وجه
      </h2>

      <div className="flex ">
        <img
          className="sm:-mr-6 mr-0 sm:relative absolute sm:top-0 top-9 sm:right-0 right-1/2  transform sm:translate-x-0 translate-x-1/2 flex-shrink-0 w-52 h-40 -mt-2"
          src={garantiImg}
          alt=""
        />
        <div className="sm:-mr-3 flex flex-col sm:items-start items-center">
          <p className="text-gray-360 dark:text-gray-200  sm:text-17 text-15 sm:leading-8 leading-6 sm:text-right text-center  mb-3 ">
            برای آنکه به شما اطمینان دهیم، که ما از محتوای دوره‌های خود ۱۰۰ درصد
            مطمئن هستیم، برای این دوره گارانتی بازگشت وجه قرار داده‌ایم و این به
            این معنی است که اگر شما محتوای این دوره را به شکل کامل مشاهده کنید،
            اما نتیجه‌ای که به شما قول دادیم را دریافت نکنید ۱۰۰ درصد مبلغ
            پرداختی شما را برگشت خواهیم زد.
          </p>
          <a
            className="group items-center sm:mt-0 mt-3 sm:text-lg text-sm font-semibold inline-flex dark:text-white dark:hover:text-blue-450 text-blue-700 transition duration-200 transform  hover:text-gray-900 "
            href="#garanti"
          >
            مراحل و فرایند گارانتی
            <svg
              className="mr-2 transform sm:scale-100 scale-75"
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                opacity="0.4"
                d="M14.9442 6.2784L19.146 5.9068C20.089 5.9068 20.8535 6.67878 20.8535 7.63094C20.8535 8.5831 20.089 9.35508 19.146 9.35508L14.9442 8.98348C14.2044 8.98348 13.6047 8.3779 13.6047 7.63094C13.6047 6.88273 14.2044 6.2784 14.9442 6.2784"
              ></path>
              <path
                fill="currentColor"
                d="M0.834251 6.3467C0.899925 6.28039 1.14527 6.00012 1.37575 5.7674C2.72019 4.30976 6.23061 1.92624 8.06699 1.1968C8.34579 1.08044 9.05085 0.832702 9.42878 0.815186C9.78936 0.815186 10.1338 0.899015 10.4622 1.06417C10.8724 1.29564 11.1995 1.66099 11.3804 2.0914C11.4956 2.38918 11.6765 3.28378 11.6765 3.30005C11.8562 4.27723 11.9541 5.86624 11.9541 7.62291C11.9541 9.2945 11.8562 10.8185 11.7088 11.8119C11.6926 11.8294 11.5117 12.9392 11.3147 13.3196C10.9541 14.0152 10.2491 14.4457 9.49445 14.4457H9.42878C8.93685 14.4294 7.90342 13.9977 7.90342 13.9827C6.16494 13.2533 2.73754 10.9849 1.35964 9.47718C1.35964 9.47718 0.970554 9.08931 0.802034 8.84783C0.539341 8.5 0.407995 8.06959 0.407995 7.63918C0.407995 7.15872 0.55545 6.71205 0.834251 6.3467"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
});

export default Garanti;
