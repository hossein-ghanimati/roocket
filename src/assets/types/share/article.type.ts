import CategoryType from "./category.type";

type ArticleType = {
  _id: string;
  title: string;
  description: string;
  body: string;
  cover: string;
  shortName: string;
  categoryID: string | CategoryType;
  creator: CreatorType;
  publish: number;
  createdAt: string;
  updatedAt: string
  __v : number;
}

export default ArticleType