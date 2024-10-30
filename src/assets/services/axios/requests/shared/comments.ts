import CommentType from "@/assets/types/share/comment.type";
import sendApiReq from "../../configs/apiReq";

const getComments = async () => {
  const response = await sendApiReq(true).get("/comments")
  const comments: CommentType[] = response.data;
  
  return response.status < 300 ? comments : null
}

const sendComment = async (data: any) => {
  const response = await sendApiReq(true).post("/comments", data)  
  return response.status < 300
}

export {
  getComments,
  sendComment
}