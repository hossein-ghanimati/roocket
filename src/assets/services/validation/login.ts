import * as Yup from "yup"

const loginSchema = Yup.object().shape({
  identifier: Yup
    .string()
    .required("شناسه ورود الزامی می‌باشد")
  ,
  password: Yup
    .string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
    .required("رمز عبور الزامی می‌باشد"),
})

export {
  loginSchema
}