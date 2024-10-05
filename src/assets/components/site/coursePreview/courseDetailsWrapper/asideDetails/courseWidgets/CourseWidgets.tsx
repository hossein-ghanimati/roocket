import { CourseContext } from "@/assets/contexts/site/course.context"
import { useContext } from "react"
import WidgetBox from "./WidgetBox"
import { calculateCourseTime } from "@/assets/ts/coursePreview/shared";

import { BsFillClockFill } from "react-icons/bs";
import { IoVideocam } from "react-icons/io5";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { RiDiscountPercentFill } from "react-icons/ri";




const CourseWidgets = () => {
  const courseSetting = useContext(CourseContext)
  const time = calculateCourseTime(courseSetting?.sessions || [])
  
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-3 mb-4  rounded-lg">
      <WidgetBox title="زمان دوره:" value={time} icon={<BsFillClockFill className="size-6"/>}/>
      {
        courseSetting?.sessions.length ? <WidgetBox title="تعداد جلسات:" value={courseSetting.sessions.length} icon={<IoVideocam className="size-7"/>}/> : ""
      }
      <WidgetBox title="نوع دوره:" value={courseSetting?.price ? "نقدی" : "رایگان"} icon={<BsPatchCheckFill className="size-6"/>}/>
      <WidgetBox title="شرکت کنندگان:" value={courseSetting?.courseStudentsCount || 0} icon={<FaUsers className="size-7"/>}/>
      <WidgetBox title="روش پشتیبانی:" value={<span className="text-sm line-clamp-1">{courseSetting?.support}</span>} icon={<BiSupport className="size-7"/>}/>
      <WidgetBox title="درصد تخفیف:" value={`${courseSetting?.discount}%`} icon={<RiDiscountPercentFill className="size-7"/>}/>
    </div>
  )
}

export default CourseWidgets