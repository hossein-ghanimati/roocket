import {
  applyFilters,
  renderCourses,
  renderCoursesSort,
} from "@/assets/ts/courses/shared";
import { getUrlParam, setUrlParam } from "@/assets/ts/utils/url";
import { CourseBoxType } from "@/assets/types/share/course.type";
// import SortOptionsType from "@/assets/types/site/sortOptions.type";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CoursesSortContext } from "./coursesSort.context";

type CoursesContextProps = {
  mainCourses: CourseBoxType[] | null;
  shownCourses: CourseBoxType[] | null;
  paginationNumber: number;
  setPaginationNumber: Dispatch<SetStateAction<number>>;
  setShownCourses: Dispatch<SetStateAction<CourseBoxType[] | null>>;
};

const CoursesContext = createContext<null | CoursesContextProps>(null);

const CoursesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const coursesSortSetting = useContext(CoursesSortContext);
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
    console.log(params?.category);
    document.title = params?.category || "همه دوره ها";

  }, [params?.category]);

  useEffect(() => {
    applyFilters({
      mainCourses,
      shownCourses,
      paginationNumber,
      setPaginationNumber,
      setShownCourses,
    });
  }, [mainCourses]);

  useEffect(
    () =>
      applyFilters({
        mainCourses,
        shownCourses,
        paginationNumber,
        setPaginationNumber,
        setShownCourses,
      }),
    [coursesSortSetting?.sortOption]
  );

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

export { CoursesContext, CoursesContextProvider, type CoursesContextProps };
