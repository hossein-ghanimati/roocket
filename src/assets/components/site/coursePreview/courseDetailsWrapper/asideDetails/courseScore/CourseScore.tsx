import { CourseContext } from "@/assets/contexts/site/course.context";
import { getCourseAverageScore } from "@/assets/ts/coursePreview/shared";
import { useContext } from "react";
import { PiStarFill } from "react-icons/pi";
import { TbStar } from "react-icons/tb";



const CourseScore = () => {
  const courseSetting = useContext(CourseContext);
  const averageScore = getCourseAverageScore(courseSetting?.comments || [])


  return (
    <div className="bg-white dark:bg-gray-900 py-4 px-5 justify-between flex rounded-lg shadow-sm mb-4 overflow-hidden relative">
      <div className="flex items-center">
        <i className="w-24 h-24 bg-blue-700 rounded-full bg-opacity-5 absolute top-1/2 transform -translate-y-1/2 -right-6">
          <i className="w-14 h-14 bg-blue-700 rounded-full bg-opacity-5 absolute top-1/2 transform -translate-y-1/2 right-1/2 translate-x-1/2">
            <i className="w-8 h-8 bg-blue-700 rounded-full bg-opacity-5 absolute top-1/2 transform -translate-y-1/2 right-1/2 translate-x-1/2"></i>
          </i>
        </i>

        <i className="flex w-2 h-2 bg-blue-700 dark:bg-white ml-2 rounded-full"></i>
        <span className="text-sm font-bold dark:text-white text-blue-700">
          {courseSetting?.isCompelete ? "تکمیل  ضبط" : "درحال ضبط"}
        </span>
      </div>

      <div className="space-y-2 flex flex-col items-center">
        <div className="relative" >
          <span className="!text-yellow-400 dark:!text-yellow-300 cursor-pointer  z-40 overflow-hidden whitespace-nowrap flex top-0">
            {
              Array(averageScore).fill(1).map(() => <PiStarFill className="size-5"/>)
            }
            {
              Array(5 - averageScore).fill(1).map(() => <TbStar className="size-5"/>)
            }
          </span>
        </div>

        <div className="font-bold text-gray-300 dark:text-gray-200 ">
          {averageScore} از{" "}
          {courseSetting?.comments.length} رای
        </div>
      </div>
    </div>
  );
};

export default CourseScore;
