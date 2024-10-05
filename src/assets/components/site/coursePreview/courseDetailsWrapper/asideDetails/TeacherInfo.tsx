import { CourseContext } from "@/assets/contexts/site/course.context";
import { Avatar } from "@nextui-org/avatar";
import { useContext } from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const TeacherInfo = () => {
  const courseSetting = useContext(CourseContext);
  return (
    <div className=" bg-white dark:bg-gray-900 p-6 flex flex-col items-center  rounded-lg shadow-sm mb-4">
      <div className="relative hvr-ripple-out">
          <Avatar 
            src={courseSetting?.creator.profile ? `http://192.168.235.220:4000/courses/covers${courseSetting.creator.profile}` : "/public/image/user/none.png"}
            className="border-2 border-green-400 dark:border-green-400 !size-16"
          />
      </div>

      <div className="text-center mt-2">
        <h6>
          <a
            className="text-gray-500 dark:text-white group dark:hover:text-blue-400 hover:text-blue-700 transition duration-200  font-bold text-xl flex items-center leading-3"
            href="/@hesammousavi"
          >
            {courseSetting?.creator.name}
            <BsPatchCheckFill className="w-4 mr-1 text-blue-700 dark:text-blue-400"/>
          </a>
        </h6>
        <span className="text-gray-500 dark:text-gray-200  text-sm -mt-2">
          مدرس دوره
        </span>
      </div>
      <p className="text-gray-400 text-15 mt-1.5 leading-6 text-center line-clamp-4">
        بیشتر از ۱۵ سال هست که در حال برنامه‌نویسی و انجام پروژه های مختلف هستم
        و ۱۰ سالی هست که آموزش برنامه‌نویسی به علاقمندان حوزه برنامه نویسی میدیم
        در همه این مدت الان عاشق کدزنی و چالش‌های پروژه‌های مختلفم. به تدریس
        علاقه خاصی دارم 
      </p>
    </div>
  );
};

export default TeacherInfo;
