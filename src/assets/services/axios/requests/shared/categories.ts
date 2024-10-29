import CategoryType from "@/assets/types/share/category.type";
import sendApiReq from "../../configs/apiReq";

const getCategories = async () => {
  const response = await sendApiReq().get("/category")
  const courses: CategoryType[] = response.data;

  return response.status < 300 ? courses : null
}

export {
  getCategories
}