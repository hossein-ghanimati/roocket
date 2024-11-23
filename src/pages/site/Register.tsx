import StaticLogo from "@/assets/components/elems/StaticLogo";
import { FaRegUserCircle } from "react-icons/fa";

import AuthForm from "@/assets/components/elems/auth/AuthForm";
import { AuthContext } from "@/assets/contexts/share/auth.context";
import { generateAuthPagesLink } from "@/assets/ts/utils/auth";
import { Field, Form, Formik } from "formik";
import { memo, useContext, useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { renderUserRegistering } from "@/assets/ts/register/shared";
import { setToLocal } from "@/assets/ts/utils/browserMemo";
import { getUrlParam } from "@/assets/ts/utils/url";
import { showLoadingSwal, showToastSwal } from "@/assets/ts/utils/swal";
import { registerSchema } from "@/assets/services/validation/register";

const Register = memo(() => {
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <main className="flex items-center flex-col relative px-4 py-6 min-h-calc-form justify-center">
      <StaticLogo customClass="flex items-center gap-x-3.5 mb-10" />

      <AuthForm
        title="ثبت نام"
        subTitle={
          <span>
            حساب کاربری دارید؟
            {
              <Link
                to={generateAuthPagesLink("login")}
                className="mr-2 text-green-500 font-medium"
              >
                وارد شوید
              </Link>
            }
          </span>
        }
      >
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={registerSchema}
          onSubmit={async (values) => {
            const loadinSwal = showLoadingSwal({task: "ثبت نام"})
            const token = await renderUserRegistering(values)
            loadinSwal.close()
            
            if (token) {
              setToLocal("token", token)

              auth?.getMe()
              navigate(getUrlParam("after") || "/")

              showToastSwal({
                title: "ثبت نام با موفقیت انجام شد",
                icon: "success",
                timer: 5000
              })
            }
          }}
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
                    name="username" 
                    className="w-full pl-9 pr-3 bg-custom-white dark:bg-gray-800 h-12 rounded-lg border border-transparent focus:!border-black focus:dark:!border-white transition-all text-sm"
                    placeholder="شناسه کاربری ..."
                  />

                  <FaRegUserCircle
                    className="absolute left-3 size-7 text-slate-500"
                  />
                </div>
                {errors.username && (
                  <p className="text-red-600 dark:text-red-400 text-sm flex">
                    {errors.username}
                  </p>
                )}
              </div>


              <div
                className="space-y-2"
              >
                <div
                  className="flex items-center relative"
                >
                  <Field 
                    type="text" 
                    name="email" 
                    className="w-full pl-9 pr-3 bg-custom-white dark:bg-gray-800 h-12 rounded-lg border border-transparent focus:!border-black focus:dark:!border-white transition-all text-sm"
                    placeholder="ایمیل ..."
                  />

                  <MdOutlineLocalPostOffice
                    className="absolute left-3 size-7 text-slate-500"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-600 dark:text-red-400 text-sm flex">
                    {errors.email}
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
                    placeholder="گذرواژه  ..."
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
                ثبت نام
              </button>
            </Form>
          )}
        </Formik>
      </AuthForm>
    </main>
  );
})

export default Register