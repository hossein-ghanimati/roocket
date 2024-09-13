import { renderCourseData } from "@/assets/ts/coursePreview/shared";
import { SingleCourseType } from "@/assets/types/share/course.type";
import {
  FC,
  PropsWithChildren,
  createContext,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../share/auth.context";



const CourseContext = createContext<SingleCourseType | null>(null);

const CourseContextProvider: FC<PropsWithChildren> =
  memo(({ children }) => {
    const [course, setCourse] = useState<SingleCourseType | null>(null);
    const navigate = useNavigate();
    const params = useParams();
    const auth = useContext(AuthContext)

    useEffect(() => {
      renderCourseData(navigate, params.name || "", setCourse);
    }, [params.name, auth?.user?._id]);

    return (
      <CourseContext.Provider value={course}>
        {children}
      </CourseContext.Provider>
    );
  });

export { CourseContext, CourseContextProvider };
