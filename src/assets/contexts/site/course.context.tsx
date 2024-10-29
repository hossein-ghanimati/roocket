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
import useDocTitle from "@/assets/hooks/shared/useDocTitle";
import { useQuery, useQueryClient } from "react-query";
import { getCourse } from "@/assets/services/axios/requests/shared/courses";



const CourseContext = createContext<SingleCourseType | null | undefined>(null);

const CourseContextProvider: FC<PropsWithChildren> =
  memo(({ children }) => {
    const queryClient = useQueryClient()
    
    const params = useParams();
    const auth = useContext(AuthContext)
    const {data: course} = useQuery(["course", params.name], {
      queryFn: () => getCourse(params?.name || "")
    })

    useDocTitle(course?.name || "جزئیات دوره", [course?.name])

    return (
      <CourseContext.Provider value={course}>
        {children}
      </CourseContext.Provider>
    );
  });

export { CourseContext, CourseContextProvider };
