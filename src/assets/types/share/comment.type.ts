type CommentAnswerType = {
  _id: string;
  course: string;
  creator: CreatorType;
  answer: number;
  isAnswer: number;
  createdAt: string;
  updatedAt: string;
  mainCommendID: string;
  __v: number;
  score: number;
  body: string;
}

type CommentType = {
  _id: string;
  body: string;
  creator: CreatorType;
  answer: number;
  isAnswer: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  score: number;
  answerContent: null | CommentAnswerType
}

export default CommentType