import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";


import StaticLogo from "@/assets/components/elems/StaticLogo";
import AuthForm from "@/assets/components/elems/auth/AuthForm";
import { loginSchema } from "@/assets/services/validation/login";
import { Field, Formik, Form } from "formik";
import { memo, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { generateAuthPagesLink } from "@/assets/ts/utils/auth";
import { login } from "@/assets/services/axios/requests/shared/auth";
import { showConfirmSwal, showLoadingSwal, showToastSwal } from "@/assets/ts/utils/swal";
import { getUrlParam } from "@/assets/ts/utils/url";
import { setToLocal } from "@/assets/ts/utils/browserMemo";
import { AuthContext } from "@/assets/contexts/share/auth.context";

const Login = memo(() => {
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <main className="flex items-center flex-col relative px-4 py-6 min-h-calc-form justify-center">
      <StaticLogo customClass="flex items-center gap-x-3.5 mb-10" />

      <AuthForm
        title="ورود به حساب"
        subTitle={
          <span>
            حساب کاربری ندارید؟
            {
              <Link
                to={generateAuthPagesLink("register")}
                className="mr-2 text-green-500 font-medium"
              >
                ثبت نام کنید.
              </Link>
            }
          </span>
        }
        footer={
          <div className="flex items-center justify-between font-danaMedium text-sm text-slate-500 mt-5">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" name="" id="" />
              مرا به خاطر بسپار
            </label>
            <Link
              to={generateAuthPagesLink("register")}
              className="underline underline-offset-2"
            >
              فراموشی رمز عبور
            </Link>
          </div>
        }
      >
        <Formik
          initialValues={{
            identifier: "",
            password: "",
          }}
          onSubmit={async (values) => {
            const loadingSwal = showLoadingSwal({task: "ورود"})
            const token = await login(values)
            loadingSwal.close()
            
            if (token) {
              setToLocal("token", token)   

              await auth?.getMe()
              navigate(getUrlParam("after") || "/")
              showToastSwal({
                title: "ورود با موفقیت انجام شد",
                icon: "success",
                timer: 5000
              })              
            }else{
              showConfirmSwal({
                title: "مشخصات اشتباه است",
                text: "آیا مایل به ثبت نام هستید ؟",
                btnText: "بله",
                icon: "error",
                hasClose: true,
                callBack: (result) => {                  
                  result.isConfirmed && navigate(generateAuthPagesLink("register"))
                }
              })
            }
          }}
          validationSchema={loginSchema}
        >
          {({ errors }) => (
            <Form className="space-y-4">
              <div
                className="space-y-2"
              >
                <div
                  className="flex items-center relative"
                >
                  <Field 
                    type="text" 
                    name="identifier" 
                    className="w-full pl-9 pr-3 bg-custom-white dark:bg-gray-800 h-12 rounded-lg border border-transparent focus:!border-black focus:dark:!border-white transition-all text-sm"
                    placeholder="ایمیل یا شناسه کاربری..."
                  />

                  <MdOutlineLocalPostOffice
                    className="absolute left-3 size-7 text-slate-500"
                  />
                </div>
                {errors.identifier && (
                  <p className="text-red-600 dark:text-red-400 text-sm flex">
                    {errors.identifier}
                  </p>
                )}
              </div>

              <div>
                <div
                  className="flex items-center relative"
                >
                  <Field
                    type={isPasswordHide ? "password" : "text"}
                    name="password"
                    className="w-full pl-9 pr-3 bg-custom-white dark:bg-gray-800 h-12 rounded-lg border border-transparent focus:!border-black focus:dark:!border-white transition-all text-sm"
                    placeholder="گذرواژه..."
                  />

                  <div
                    onClick={() => setIsPasswordHide(!isPasswordHide)}
                    className="absolute left-3 [&>*]:size-6 text-slate-500 cursor-pointer"
                  >
                    {
                      isPasswordHide ? <FaRegEyeSlash/> : <FaRegEye/>
                    }
                  </div>
                </div>

                {errors.password && (
                  <p className="text-red-600 dark:text-red-400 text-sm flex">
                    {errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white h-[52px] px-4 leading-7 rounded-full w-full"
              >
                ورود
              </button>
            </Form>
          )}
        </Formik>
      </AuthForm>
    </main>
  );
});

export default Login;
