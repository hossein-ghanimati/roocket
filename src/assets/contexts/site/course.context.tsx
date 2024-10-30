import { renderCourseData } from "@/assets/ts/coursePreview/shared";
import { SingleCourseType } from "@/assets/types/share/course.type";
import {
  FC,
  PropsWithChildren,
  createContext,
  memo,
  useContext,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../share/auth.context";
import useDocTitle from "@/assets/hooks/shared/useDocTitle";
import { useQuery } from "react-query";



const CourseContext = createContext<SingleCourseType | null | undefined>(null);

const CourseContextProvider: FC<PropsWithChildren> =
  memo(({ children }) => {
    const navigate = useNavigate()
    const params = useParams();
    const auth = useContext(AuthContext)
    const {data: course} = useQuery(["course", params.name, auth?.user?._id], {
      queryFn: () => renderCourseData(navigate, params.name || "")
    })


    useDocTitle(course?.name || "جزئیات دوره", [course?.name])

    return (
      <CourseContext.Provider value={course}>
        {children}
      </CourseContext.Provider>
    );
  });

export { CourseContext, CourseContextProvider };
