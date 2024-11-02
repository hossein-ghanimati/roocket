import * as Yup from "yup"

const registerSchema = Yup.object().shape({
  username: Yup
    .string()
    .required("شناسه ورود الزامی می‌باشد")
  ,
  email: Yup
    .string()
    .required("شناسه ورود الزامی می‌باشد")
    .email("ایمیل معتبر نیست")
  ,
  password: Yup
    .string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
    .required("رمز عبور الزامی می‌باشد"),
})

export {
  registerSchema
}