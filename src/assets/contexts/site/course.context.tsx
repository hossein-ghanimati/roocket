import { renderCourseData } from "@/assets/ts/coursePreview/shared";
import { SingleCourseType } from "@/assets/types/share/course.type";
import {
  FC,
  PropsWithChildren,
  createContext,
  memo,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";



const CourseContext = createContext<SingleCourseType | null>(null);

const CourseContextProvider: FC<PropsWithChildren> =
  memo(({ children }) => {
    const [course, setCourse] = useState<SingleCourseType | null>(null);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
      renderCourseData(navigate, params.name || "", setCourse);
    }, [params.name]);

    return (
      <CourseContext.Provider value={course}>
        {children}
      </CourseContext.Provider>
    );
  });

export { CourseContext, CourseContextProvider };
