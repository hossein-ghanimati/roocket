import { renderCourses, renderCoursesSort } from "@/assets/ts/courses/shared";
import { getUrlParam } from "@/assets/ts/utils/url";
import { CourseBoxType } from "@/assets/types/share/course.type";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";

type CoursesContextProps = {
  mainCourses: CourseBoxType[] | null;
  shownCourses: CourseBoxType[] | null;
  paginationNumber: number;
  setPaginationNumber: Dispatch<SetStateAction<number>>;
  setShownCourses: Dispatch<SetStateAction<CourseBoxType[] | null>>;
};

const CoursesContext = createContext<null | CoursesContextProps>(null);

const CoursesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mainCourses, setMainCourses] = useState<CourseBoxType[] | null>(null);
  const [shownCourses, setShownCourses] = useState<CourseBoxType[] | null>(
    null
  );

  const [paginationNumber, setPaginationNumber] = useState<number>(
    Number(getUrlParam("page")) || 1
  );
  

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    renderCourses(navigate, params.category || "", setMainCourses);
  }, [params?.category]);

  useEffect(() => {
    setShownCourses(renderCoursesSort(mainCourses || [], "all"));
    setPaginationNumber(Number(getUrlParam("page")) || 1);
  }, [mainCourses]);

  

  useEffect(() => {
    console.log("Shown main Log", shownCourses);    
  }, [shownCourses])

  return (
    <CoursesContext.Provider
      value={{
        mainCourses,
        shownCourses,
        paginationNumber,
        setPaginationNumber,
        setShownCourses,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesContext, CoursesContextProvider };
