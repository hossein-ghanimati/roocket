import { UserCourseType } from "./course.type"

export type UserType = CreatorType & {
  courses: UserCourseType[];
  notifications: [];
}