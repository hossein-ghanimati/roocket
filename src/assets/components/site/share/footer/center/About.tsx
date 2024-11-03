import SmallLoader from "@/assets/components/elems/SmallLoader";
import { formSubmitHandler } from "@/assets/ts/newsLetter/shared";
import { memo, useContext, useMemo} from "react";
import {Field, Form, Formik} from "formik"
import { Link } from "react-router-dom";
import { newsLetterSchema } from "@/assets/services/validation/newsLetter";
import { AuthContext } from "@/assets/contexts/share/auth.context";

const About = memo(() => {
  const auth = useContext(AuthContext)

  return (
    <div className="md:col-span-4">
      {useMemo(
        () => (
          <>
            <div className="relative flex flex-col md:items-start md:mx-0  mx-auto w-fit-content items-center">
              <h3 className="text-xl relative font-bold dark:text-white text-biscay-700 mb-4 z-10">
                درباره راکت
              </h3>
              <span className="z-0 w-4 h-4 flex absolute bg-blue-700 opacity-20 top-0 rounded-full -right-2"></span>
            </div>

            <div className="flex relative ">
              <span className="md:flex hidden absolute top-1 right-0 w-1 h-1 mt-2 bg-blue-700 opacity-30 rounded-full"></span>
              <div className="md:mr-2 md:text-right text-center">
                <p className="text-base mb-2 md:w-10/12 w-full md:text-right text-center leading-7 text-gray-500 dark:text-gray-300 ">
                  راکت یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح
                  ایران است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین
                  مقالات و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار
                  دهد. تبدیل کردن برنامه نویسان ایرانی به بهترین برنامه نویسان
                  جهان هدف ماست.
                </p>

                <Link
                  to="/courses"
                  className="inline-flex items-center group dark:hover:text-blue-60 dark:text-blue-400 text-blue-700 text-13 font-medium transition transform  duration dark:hover:text-gray-210-20 hover:text-dark-700 md:mx-0 mx-auto"
                >
                  مشاهده تمامی دوره ها
                  <svg
                    className="mr-1"
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      opacity="0.4"
                      d="M10.4527 4.15949L13.3686 3.90161C14.023 3.90161 14.5536 4.43735 14.5536 5.09812C14.5536 5.75889 14.023 6.29463 13.3686 6.29463L10.4527 6.03674C9.93928 6.03674 9.52308 5.61649 9.52308 5.09812C9.52308 4.57888 9.93928 4.15949 10.4527 4.15949"
                    ></path>
                    <path
                      fill="currentColor"
                      className="fill-current duration-200 transition dark:group-hover:text-blue-60 dark:text-blue-400 text-blue dark:hover:text-gray-210-700 grou-hover:text-dark-700"
                      d="M0.660621 4.20689C0.706196 4.16087 0.87646 3.96637 1.0364 3.80487C1.96941 2.79331 4.40555 1.13921 5.67995 0.632993C5.87343 0.552242 6.36272 0.38032 6.62499 0.368164C6.87523 0.368164 7.11429 0.42634 7.34216 0.540954C7.6268 0.701589 7.85381 0.95513 7.97936 1.25382C8.05933 1.46048 8.18488 2.08131 8.18488 2.09259C8.30957 2.77073 8.3775 3.87346 8.3775 5.09255C8.3775 6.25259 8.30957 7.31017 8.20724 7.99959C8.19606 8.01175 8.07051 8.78192 7.93379 9.04589C7.68355 9.52866 7.19426 9.82735 6.67057 9.82735H6.62499C6.28361 9.81606 5.56644 9.5165 5.56644 9.50608C4.35998 8.99987 1.98145 7.42565 1.02522 6.37936C1.02522 6.37936 0.755212 6.11019 0.638263 5.94261C0.455961 5.70122 0.36481 5.40253 0.36481 5.10383C0.36481 4.77041 0.46714 4.46043 0.660621 4.20689"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </>
        ),
        []
      )}

      <div className="relative mt-11 dark:bg-dark-890">
        <Formik
          enableReinitialize={true}
          initialValues={{email: auth?.user?.email || ""}}
          onSubmit={formSubmitHandler}
          validationSchema={newsLetterSchema}
        >
          
          {({ isSubmitting, errors }) => (
            <Form>
            <svg
                  className="dark:text-gray-880 text-gray-990 absolute top-2/4 transform -translate-y-2/4 right-4"
                  width="14"
                  height="13"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9714 6.11867C21.7669 5.19351 21.5001 4.51466 21.1854 4C20.1591 5.01102 18.8602 6.23772 17.4497 7.31464C15.5051 8.79945 13.575 9.81806 12 9.81806C10.425 9.81806 8.49494 8.79945 6.55027 7.31464C5.13983 6.23772 3.84094 5.01102 2.81462 4C2.49985 4.51466 2.23311 5.19351 2.0286 6.11867C2.0189 6.16254 2.00937 6.20685 2 6.25158C2.93097 7.14206 4.03799 8.14215 5.22513 9.04856C7.2098 10.5639 9.64571 12 12 12C14.3543 12 16.7902 10.5639 18.7749 9.04856C19.962 8.14215 21.069 7.14206 22 6.25158C21.9906 6.20685 21.9811 6.16254 21.9714 6.11867Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11C0 20.0585 2.118 22 12 22C21.882 22 24 20.0585 24 11C24 1.9415 21.882 0 12 0C2.118 0 0 1.9415 0 11ZM12 20.1667C9.57515 20.1667 7.76307 20.0452 6.38993 19.7654C5.03949 19.4903 4.23924 19.0871 3.70846 18.6006C3.17768 18.114 2.73783 17.3805 2.43771 16.1426C2.13254 14.8838 2 13.2228 2 11C2 8.77722 2.13254 7.11615 2.43771 5.85743C2.73783 4.61954 3.17768 3.88597 3.70846 3.39943C4.23924 2.91288 5.03949 2.50968 6.38993 2.23457C7.76307 1.95483 9.57515 1.83333 12 1.83333C14.4249 1.83333 16.2369 1.95483 17.6101 2.23457C18.9605 2.50968 19.7608 2.91288 20.2915 3.39943C20.8223 3.88597 21.2622 4.61954 21.5623 5.85743C21.8675 7.11615 22 8.77722 22 11C22 13.2228 21.8675 14.8838 21.5623 16.1426C21.2622 17.3805 20.8223 18.114 20.2915 18.6006C19.7608 19.0871 18.9605 19.4903 17.6101 19.7654C16.2369 20.0452 14.4249 20.1667 12 20.1667Z"
                    fill="currentColor"
                  ></path>
                  <rect
                    x="7"
                    y="15"
                    width="10"
                    height="2"
                    rx="1"
                    fill="currentColor"
                  ></rect>
                </svg>
             
  
            
                <div className="h-10 rounded dark:bg-dark-890 dark:border-gray-880 border-gray-100 border-t border-r border-b dark:border-opacity-5 border-1">
                  <Field
                    type="email"
                    name="email"
                    className="border-none dark:rounded outline-none dark:bg-transparent m-0 h-full w-full pl-24 dark:placeholder-gray-880 dark:text-white  placeholder-gray-400 text-gray-400 text-xs py-2 pr-8"
                    placeholder={errors.email || "ایمیل عضویت در خبرنامه ..."}
                  />
                </div>
              
  

                
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="h-full bg-blue-700 absolute top-0 left-0 px-5 text-white rounded-l text-13 hover:bg-dark-700 transition duration-200 ease-linear"
                  >
                    {
                    
                    
                    isSubmitting ? <SmallLoader/> : "ثبت"
                    }
                  </button>
                
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
});

export default About;
