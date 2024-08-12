import CategoryType from "./category.type";

type CoursesType = {
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
}[]

export default CoursesType