import {
  applyFilters,
  renderCourses,
} from "@/assets/ts/courses/shared";
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
import useCourses from "@/assets/hooks/shared/useCourses";

type noneType = null | undefined

type CoursesContextProps = {
  mainCourses: CourseBoxType[] | noneType;
  shownCourses: CourseBoxType[] | noneType;
  paginationNumber: number;
  setPaginationNumber: Dispatch<SetStateAction<number>>;
  setShownCourses: Dispatch<SetStateAction<CourseBoxType[] | null>>;
};

const CoursesContext = createContext<null | CoursesContextProps>(null);

const CoursesContextProvider: FC<PropsWithChildren> = ({ children }) => {


  const coursesSortSetting = useContext(CoursesSortContext);
  const {courses: mainCourses} = useCourses()
  const [shownCourses, setShownCourses] = useState<CourseBoxType[] | null>(
    null
  );

  const [paginationNumber, setPaginationNumber] = useState<number>(1);

  // useEffect(() => {
  //   renderCourses(navigate, params.category || "", setMainCourses);
  //   console.log("category =>", params?.category || null);
  //   document.title = params?.category || "همه دوره ها";

  // }, [params?.category]);

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
