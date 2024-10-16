import { FC, FormEventHandler, PropsWithChildren, ReactNode } from "react";

type AuthFormProps = {
  title: string;
  subTitle: ReactNode;
  footer?: ReactNode;
  submitHandler: FormEventHandler<HTMLFormElement>;
  submitText: string;
};

const AuthForm: FC<PropsWithChildren<AuthFormProps>> = ({
  children,

  title,
  subTitle,
  footer,
  submitHandler,
  submitText,
}) => {
  return (
    <div className="max-w-[330px] w-full pt-5 pb-6 px-6 text-center bg-gray-200 dark:bg-gray-700 rounded-2xl">
      <h4 className="font-bold text-xl mb-4 sm:5">{title}</h4>
      <p className="mb-5">{subTitle}</p>
      <form onSubmit={submitHandler}>
        {
          children
        }

        <button type="submit" className="bg-green-500 text-white h-[52px] px-4 leading-7 rounded-full w-full">{submitText}</button>
      </form>

      {footer}
    </div>
  );
};

export default AuthForm;
