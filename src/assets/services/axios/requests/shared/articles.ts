import ArticleType from "@/assets/types/share/article.type";
import sendApiReq from "../../configs/apiReq";

const getArticles = async () => {
  const response = await sendApiReq().get("/articles")
  const courses: ArticleType[] = response.data;

  return response.status < 300 ? courses : null
}

export {
  getArticles
}