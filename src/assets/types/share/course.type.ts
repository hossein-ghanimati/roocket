import CategoryType from "./category.type";
import CommentType from "./comment.type";
import SessionType from "./session.type";


export type SingleCourseType = {
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

export type CourseBoxType = {
    _id: string;
    name: string;
    description: string;
    cover: string;
    support: string;
    shortName: string;
    price: number
    isComplete: number
    status: string;
    categoryID: CategoryType
    creator: string
    createdAt: string;
    updatedAt: string
    __v: number
    discount: number;
    registers: number;
    courseAverageScore: number;
  
}

