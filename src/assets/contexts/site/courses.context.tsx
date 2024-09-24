import { renderCourses } from "@/assets/ts/courses/shared";
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
  setNewCourses: (newCourses: CourseBoxType[]) => void;
};

const CoursesContext = createContext<null | CoursesContextProps>(null);

const CoursesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mainCourses, setMainCourses] = useState<CourseBoxType[] | null>(null);
  const [shownCourses, setShownCourses] = useState<CourseBoxType[] | null>(
    null
  );

  const [paginationNumber, setPaginationNumber] = useState<number>(Number(getUrlParam("page")) || 1);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    renderCourses(navigate, params.category || "", setMainCourses);
  }, [params?.category]);

  useEffect(() => {
    setShownCourses(mainCourses);
    setPaginationNumber(1)
  }, [mainCourses]);

  const setNewCourses = (newCourses: CourseBoxType[]) =>
    setShownCourses(newCourses);

  return (
    <CoursesContext.Provider
      value={{
        mainCourses,
        shownCourses,
        paginationNumber,
        setPaginationNumber,
        setNewCourses,
      }}
    >
      {
        children
      }
    </CoursesContext.Provider>
  );
};

export { CoursesContext, CoursesContextProvider };
