import CategoryType from "@/assets/types/share/category.type";
import { memo } from "react";
import { Link } from "react-router-dom";

const CategoryBox = memo(({title, name}: CategoryType) => {
  return (
    <div className="border group hover:bg-white dark:hover:bg-opacity-5 dark:hover:bg-white hover:shadow-cardShadow group duration-200 transition border-gray-80 dark:hover:border-dark-890 dark:border-dark-500 border-opacity-60 rounded-lg">
      <div className="pb-4 pt-6 md:px-7 px-4">
        <Link
          to={`/courses/${name}`}
          className="text-biscay-700 dark:text-white hover:text-blue-700 duration-200 transition font-bold text-2xl mb-2 inline-flex"
        >
          {title}
        </Link>
        
      </div>
      <hr className="border-gray-210 dark:group-hover:border-dark-890 dark:border-dark-500" />
      <div className="flex justify-end md:px-8 px-4 py-4">
        <Link
          to={`/courses/${name}`}
          className="flex items-center transform transition duration-200 border-opacity-10 text-blue-700 dark:text-blue-400 font-medium  hover:text-blue-500"
        >
          مشاهده دوره های دسته بندی
          <svg
            className="mr-1"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              opacity="0.4"
              d="M16.0371 11.2149L19.7925 10.8828C20.6352 10.8828 21.3185 11.5727 21.3185 12.4237C21.3185 13.2746 20.6352 13.9646 19.7925 13.9646L16.0371 13.6325C15.376 13.6325 14.84 13.0913 14.84 12.4237C14.84 11.755 15.376 11.2149 16.0371 11.2149Z"
            ></path>
            <path
              fill="currentColor"
              d="M3.42647 11.2759C3.48516 11.2166 3.70443 10.9662 3.91042 10.7582C5.11199 9.45544 8.24938 7.3252 9.89061 6.67327C10.1398 6.56928 10.7699 6.34787 11.1077 6.33221C11.43 6.33221 11.7378 6.40714 12.0313 6.55474C12.3979 6.76162 12.6902 7.08814 12.8519 7.47281C12.9549 7.73895 13.1166 8.53849 13.1166 8.55302C13.2772 9.42636 13.3647 10.8465 13.3647 12.4165C13.3647 13.9105 13.2772 15.2725 13.1454 16.1604C13.131 16.176 12.9693 17.1679 12.7932 17.5078C12.4709 18.1296 11.8408 18.5142 11.1664 18.5142H11.1077C10.668 18.4997 9.74443 18.1139 9.74443 18.1005C8.19068 17.4486 5.1275 15.4212 3.89602 14.0737C3.89602 14.0737 3.54829 13.7271 3.39767 13.5113C3.1629 13.2004 3.04551 12.8157 3.04551 12.431C3.04551 12.0016 3.17729 11.6024 3.42647 11.2759Z"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
});

export default CategoryBox;
