import * as Yup from "yup"

const newsLetterSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("ایمیل نامعتبر است.")
    .min(2, "حداقل باید  2 کاراکتر  داشته باشد.")
    .max(50, "حداکثر باید 50 کاراکتر داشته باشید.")
    .required("ایمیل الزامی است")
})

export {
  newsLetterSchema
}