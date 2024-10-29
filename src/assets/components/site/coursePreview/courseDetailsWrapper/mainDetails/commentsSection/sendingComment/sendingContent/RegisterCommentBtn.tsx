import SmallLoader from "@/assets/components/elems/SmallLoader";
import { AuthContext } from "@/assets/contexts/share/auth.context";
import { useContext } from "react";

const RegisterCommentBtn = ({isSubmitting}: {isSubmitting: boolean}) => {
  const auth = useContext(AuthContext)

  return (
    <div>
      {!isSubmitting ? (
        <button
          disabled={!auth?.isLogin}
          className="w-24 h-10 bg-blue-700 border-blue-700 border text-white text-sm font-bold ml-4 rounded-md transition duration-200 dark:hover:bg-transparent hover:bg-white hover:text-blue-700"
        >
          ثبت دیدگاه
        </button>
      ) : (
        <button
          type="button"
          className="w-24 h-10 flex justify-center items-center bg-blue-700 border-blue-700 border text-white text-sm font-bold ml-4 rounded-md transition duration-200"
        >
          <SmallLoader />
        </button>
      )}
    </div>
  );
};

export default RegisterCommentBtn;
