import CategoryType from "./category.type";
import CommentType from "./comment.type";
import SessionType from "./session.type";


type CourseType = {
  id: string;
  name: string;
  description: string;
  cover: string;
  support: string;
  shortName: string;
  price: number;
  isCompelete: number;
  status: string;
  discount: number;
  categoryID: CategoryType;
  creator: CreatorType;
  createdAt: string;
  updatedAt: string;
  __v: number;
  courseStudentsCount: number;
  sessions: SessionType[]
  comments: CommentType[];
  isUserRegisteredToThisCourse: boolean
}

export default CourseType