import { memo } from "react";

const Propaganda = memo(() => {
  return (
    <section className="mb-32 2xl:mt-72 lg:mt-52 mt-20">
      <div className="container">
        <div className="flex xl:flex-row flex-col sm:mx-10 relative items-center justify-end xl:py-12 pb-12 pt-24 sm:px-16 px-9 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl">
          <img
            className="absolute xl:right-0  xl:scale-100 scale-75 right-1/2 transform xl:translate-x-0 translate-x-1/2  xl:-top-20  sm:-top-28 -top-24"
            src="/public/image/landing/index_instagram_phone.png"
            alt=""
          />
          <h6 className="xl:ml-10 md:text-2xl text-lg text-white font-extrabold xl:mb-0 mb-5 xl:mt-0 sm:mt-8 md:text-right text-center">
            ما هر روز کلی مطالب آموزشی جالب در اینستاگراممون منتشر می‌کنیم!
          </h6>
          <a
            target="_blank"
            className=" px-5 py-3 flex items-center xl:text-15 sm:text-xs text-10 bg-white rounded text-purple-600 font-semibold transition duration-200 hover:text-white hover:bg-purple-600 border hover:border-1 border-white whitespace-nowrap"
            href="https://www.instagram.com/hossein.front.js/"
          >
            مشاهده پست های اینستاگرام
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                opacity="0.4"
                d="M10.8229 4.15815L13.8465 3.89075C14.525 3.89075 15.0752 4.44626 15.0752 5.13142C15.0752 5.81658 14.525 6.37209 13.8465 6.37209L10.8229 6.10469C10.2905 6.10469 9.85898 5.66892 9.85898 5.13142C9.85898 4.59301 10.2905 4.15815 10.8229 4.15815"
              ></path>
              <path
                fill="currentColor"
                d="M0.66943 4.20734C0.716688 4.15962 0.893236 3.95795 1.05908 3.79048C2.02653 2.74158 4.55259 1.02643 5.87402 0.501533C6.07464 0.417801 6.58199 0.239533 6.85395 0.226929C7.11342 0.226929 7.3613 0.287252 7.59759 0.406097C7.89273 0.57266 8.12812 0.83556 8.25831 1.14528C8.34123 1.35956 8.47141 2.0033 8.47141 2.01501C8.6007 2.71817 8.67114 3.86161 8.67114 5.12569C8.67114 6.32855 8.6007 7.42516 8.49459 8.14003C8.483 8.15264 8.35282 8.95124 8.21105 9.22495C7.95158 9.72554 7.44423 10.0353 6.90121 10.0353H6.85395C6.49996 10.0235 5.75632 9.71293 5.75632 9.70213C4.50533 9.17723 2.03901 7.54491 1.04749 6.46C1.04749 6.46 0.767513 6.18089 0.646247 6.00712C0.457217 5.75683 0.362701 5.44711 0.362701 5.13739C0.362701 4.79166 0.468808 4.47024 0.66943 4.20734"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
});

export default Propaganda;
