import SmallLoader from "@/assets/components/elems/SmallLoader";
import { AuthContext } from "@/assets/contexts/share/auth.context";
import { CourseCommentTextContext } from "@/assets/contexts/site/courseCommentText.context";
import sendPostReq from "@/assets/ts/utils/requests/sendPostReq";
import { showMsgSwal } from "@/assets/ts/utils/swal";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

const RegisterCommentBtn = () => {
  const [isSending, setIsSending] = useState(false);
  const commentSetting = useContext(CourseCommentTextContext);
  const params = useParams();
  const auth = useContext(AuthContext)

  return (
    <div>
      {!isSending ? (
        <button
          disabled={!auth?.isLogin}
          onClick={async () => {
            setIsSending(true);
            const commentBody = {
              body: commentSetting?.text.trim() || "",
              courseShortName: params.name,
              score: 5,
            };
            const sendReq = await sendPostReq("comments", commentBody);
            if (sendReq) {
              showMsgSwal({
                title: "کامنت با موفقیت ثبت شد",
                icon: "success",
                hasClose: true,
              });
              commentSetting?.setText("");
              setIsSending(false);
            } else {
              showMsgSwal({
                title: "مشکلی در ثبت کامنت پیش آمد",
                icon: "error",
                hasClose: true,
              });
              setIsSending(false);
            }
          }}
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
