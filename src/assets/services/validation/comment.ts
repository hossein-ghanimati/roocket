import * as Yup from "yup"

const commentSchema = Yup.object().shape({
  commentText: Yup
    .string()
    .min(10, "حداقل باید  10 کاراکتر  داشته باشد.")
    .max(1000, "حداکثر باید 1000 کاراکتر داشته باشید.")
    .required("متن کامنت الزامی است")
})

export {
  commentSchema
}