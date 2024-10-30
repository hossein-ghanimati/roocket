import StaticLogo from "@/assets/components/elems/StaticLogo";
import AuthForm from "@/assets/components/elems/auth/AuthForm";
import { loginSchema } from "@/assets/services/validation/login";
import { Field, Formik, Form } from "formik";
import { FormEventHandler, memo, useState } from "react";
import { Link } from "react-router-dom";

const Login = memo(() => {
  const [isPasswordHide, setIsPasswordHide] = useState(true);

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
                to={`/register?afret=${location.pathname}`}
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
              to={`/register?afret=${location.pathname}`}
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
          onSubmit={() => {}}
          validationSchema={loginSchema}
        >
          {({ errors }) => (
            <Form>
              <div>
                <div
                  className="flex items-center "
                >
                  <Field 
                    type="text" 
                    name="identifier" 
                    className="w-full px-9 bg-custom-white dark:bg-gray-800 h-12 rounded-lg border border-transparent focus:!border-black focus:dark:!border-white transition-all"
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
                  className="flex items-center "
                >
                  <Field
                    type={isPasswordHide ? "password" : "text"}
                    name="password"
                    className="w-full px-9 bg-custom-white dark:bg-gray-800 h-12 rounded-lg border border-transparent focus:!border-black focus:dark:!border-white transition-all"
                  />
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
