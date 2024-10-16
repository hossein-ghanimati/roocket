import StaticLogo from "@/assets/components/elems/StaticLogo";
import AuthForm from "@/assets/components/elems/auth/AuthForm";
import { memo } from "react";
import { Link } from "react-router-dom";

const Login = memo(() => {
  const handleSubmit = () => {
    console.log("handling ...");
    
  }
  return (
    <main className="flex items-center flex-col relative px-4 py-6 min-h-calc-form justify-center">
      <StaticLogo customClass="flex items-center gap-x-3.5 mb-10"/>

      <AuthForm
        title="ورود به حساب"
        subTitle={
          <span>
            حساب کاربری ندارید؟
            {<Link to={`/register?afret=${location.pathname}`} className="mr-2 text-green-500 font-medium">
              ثبت نام کنید.
            </Link>}
          </span>
        }
        submitHandler={e => {
          e.preventDefault();
          handleSubmit()
        }}

        submitText="ورود"
        footer={<div className="flex items-center justify-between font-danaMedium text-sm text-slate-500 mt-5">
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="checkbox" name="" id="" />
          مرا به خاطر بسپار
        </label>
        <Link to={`/register?afret=${location.pathname}`} className="underline underline-offset-2">فراموشی رمز عبور</Link>
      </div>}
      >

      </AuthForm>
    </main>
  );
});

export default Login;
