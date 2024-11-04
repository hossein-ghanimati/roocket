type CreatorType = {
  _id: string;
  username: string;
  email: string;
  name: string;
  role: "ADMIN" | "USER";
  createdAt: string;
  updatedAt: string;
  __v : number;
  profile?: string;
  phone: string;
}