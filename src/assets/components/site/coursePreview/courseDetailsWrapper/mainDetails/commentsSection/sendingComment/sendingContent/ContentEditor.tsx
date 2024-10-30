import { AuthContext } from "@/assets/contexts/share/auth.context";
import { commentSchema } from "@/assets/services/validation/comment";
import { Field, Form, Formik } from "formik";
import { memo, useContext } from "react";
import RegisterCommentBtn from "./RegisterCommentBtn";
import { CourseContext } from "@/assets/contexts/site/course.context";
import { sendComment } from "@/assets/services/axios/requests/shared/comments";
import { showMsgSwal } from "@/assets/ts/utils/swal";

const ContentEditor = memo(() => {
  const auth = useContext(AuthContext);
  const courseSetting = useContext(CourseContext);

  return (
    <Formik
      initialValues={{ commentText: "" }}
      validationSchema={commentSchema}
      onSubmit={async (values, config) => {
        const commentBody = {
          body: values.commentText.trim() || "",
          courseShortName: courseSetting?.shortName,
          score: 5,
        };
        const sendReq = await sendComment(commentBody);
        if (sendReq) {
          showMsgSwal({
            title: "کامنت با موفقیت ثبت شد",
            icon: "success",
            hasClose: true,
          });
          config.resetForm();
        } else {
          showMsgSwal({
            title: "مشکلی در ثبت کامنت پیش آمد",
            icon: "error",
            hasClose: true,
          });
        }
      }}
    >
      {({ isSubmitting, errors }) => (
        <>
          <Form>
            {errors.commentText?.length && (
              <p className="bg-red-500 text-white py-1 px-2 rounded-sm">{errors.commentText}</p>
            )}
            <Field
              as="textarea"
              name="commentText"
              disabled={!auth?.isLogin}
              placeholder={
                auth?.isLogin
                  ? "کامنت خودرا بنویسید ..."
                  : "برای ثبت کامنت وارد حسابی شوید."
              }
              className="mt-4 w-full min-h-40 max-h-80 overflow-auto bg-custom-white dark:bg-gray-950 shadow rounded-lg md:rounded-2xl py-4 px-3 border-none outline-none"
            ></Field>

            <RegisterCommentBtn isSubmitting={isSubmitting} />
          </Form>
        </>
      )}
    </Formik>
  );
});

export default ContentEditor;
