import { getArticles } from "@/assets/services/axios/requests/shared/articles"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom";

const useArticles = () => {
  const params = useParams();

  const {data: articles} = useQuery(["articles", params.category], getArticles)
  

  return {articles}
}

export default useArticles