import SmallLoader from "@/assets/components/elems/SmallLoader";
import { useState } from "react";

const RegisterCommentBtn = () => {
  const [isSending, setIsSending] = useState(false);

  return (
    <div>
      {!isSending ? (
        <button onClick={() => {
          setIsSending(true)
          setTimeout(() => setIsSending(false),2000)
        }} className="w-24 h-10 bg-blue-700 border-blue-700 border text-white text-sm font-bold ml-4 rounded-md transition duration-200 dark:hover:bg-transparent hover:bg-white hover:text-blue-700">
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
