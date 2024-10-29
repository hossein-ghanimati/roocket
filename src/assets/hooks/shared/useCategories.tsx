import { getCategories } from "@/assets/services/axios/requests/shared/categories"
import { useQuery } from "react-query"

const useCategories = () => {
  const {data: categories} = useQuery(["categories"], getCategories)
  

  return {categories}
}

export default useCategories