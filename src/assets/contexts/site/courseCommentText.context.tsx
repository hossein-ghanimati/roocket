import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

type CourseCommentTextContextType = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

const CourseCommentTextContext =
  createContext<CourseCommentTextContextType | null>(null);

const CourseCommentTextContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [text, setText] = useState("");

  return (
    <CourseCommentTextContext.Provider
      value={{ text, setText }}
    >
      {
        children
      }
    </CourseCommentTextContext.Provider>
  );
};

export { CourseCommentTextContext, CourseCommentTextContextProvider };
