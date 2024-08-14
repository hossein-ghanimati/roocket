import { memo } from "react";
import { Link } from "react-router-dom";

const Top = memo(() => {
  return (
    <div className="grid relative xl:grid-cols-24 grid-cols-12 md:px-14 px-9 py-20 bg-white dark:bg-gray-900 rounded-2xl xl:gap-12">
      <div className="xl:col-span-10 col-span-12 xl:text-right text-center">
        <svg
          className="absolute top-10 -right-7"
          width="49"
          height="46"
          viewBox="0 0 49 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="13.2432" cy="32.1084" r="13.2432" fill="#DC2626"></circle>
          <circle
            cx="39.7298"
            cy="17.5407"
            r="9.27027"
            fill="#DC2626"
            fill-opacity="0.4"
          ></circle>
          <circle
            cx="19.865"
            cy="5.62176"
            r="5.2973"
            fill="#DC2626"
            fill-opacity="0.7"
          ></circle>
        </svg>
        <h4 className="md:text-36 text-27 md:leading-16 leading-10 mb-2 font-extrabold dark:text-white text-biscay-700">
          از گوشه و اطراف دنیای برنامه‌نویسی
        </h4>
        <p className="text-gray-500 dark:text-gray-300 mb-4 line-clamp-5">
          نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به
          روز باشیم، ما در راکت فضای رو به شکلی آماده کردیم تا شما بتونید
          ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در اختیار هزاران برنامه‌نویس
          عضو راکت قرار بدید.
        </p>
        <div>
          <Link
            className="px-4 py-3 dark:bg-blue-950 dark:hover:bg-opacity-0 dark:border-blue-700 dark:hover:text-white border dark:hover:border-white bg-blue-700 rounded text-white inline-flex items-center font-bold text-sm ml-4 transition duration-200 hover:bg-dark-500"
            to="/articles"
          >
            مشاهده همه مقاله ها
            <svg
              className="mr-2"
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-current text-white transition duration-200"
                opacity="0.4"
                d="M9.57831 4.47732L12.273 4.23901C12.8777 4.23901 13.368 4.73409 13.368 5.3447C13.368 5.95532 12.8777 6.4504 12.273 6.4504L9.57831 6.21209C9.10391 6.21209 8.7193 5.82373 8.7193 5.3447C8.7193 4.86488 9.10391 4.47732 9.57831 4.47732"
              ></path>
              <path
                className="fill-current text-white transition duration-200"
                d="M0.529516 4.52111C0.571632 4.47859 0.728973 4.29885 0.876777 4.14961C1.73897 3.21483 3.9902 1.68628 5.16787 1.21848C5.34666 1.14386 5.79882 0.984988 6.04119 0.973755C6.27243 0.973755 6.49334 1.02751 6.70392 1.13343C6.96695 1.28187 7.17674 1.51617 7.29275 1.79219C7.36666 1.98316 7.48267 2.55687 7.48267 2.5673C7.5979 3.19396 7.66068 4.213 7.66068 5.33955C7.66068 6.41154 7.5979 7.38885 7.50334 8.02595C7.493 8.03718 7.37699 8.7489 7.25064 8.99282C7.0194 9.43895 6.56724 9.71497 6.0833 9.71497H6.04119C5.72571 9.70454 5.06298 9.42772 5.06298 9.41809C3.94809 8.9503 1.75009 7.49557 0.866446 6.52869C0.866446 6.52869 0.616927 6.27995 0.508855 6.12509C0.34039 5.90202 0.256158 5.626 0.256158 5.34998C0.256158 5.04186 0.350721 4.75541 0.529516 4.52111"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Top;
