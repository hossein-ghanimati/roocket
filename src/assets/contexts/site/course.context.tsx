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
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useQuery } from "react-query";

type CourseContextMainType = SingleCourseType &  {
  refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<SingleCourseType | null, unknown>>
}


const CourseContext = createContext<CourseContextMainType | null | undefined>(null);

const CourseContextProvider: FC<PropsWithChildren> =
  memo(({ children }) => {
    const navigate = useNavigate()
    const params = useParams();
    const auth = useContext(AuthContext)
    const {data: course, refetch} = useQuery(["course", params.name, auth?.user?._id], {
      queryFn: () => renderCourseData(navigate, params.name || ""),
      keepPreviousData: false
    })


    useDocTitle(course?.name || "جزئیات دوره", [course?.name])

    return (
      <CourseContext.Provider value={course ? {...course, refetch} : null}>
        {children}
      </CourseContext.Provider>
    );
  });

export { CourseContext, CourseContextProvider };
