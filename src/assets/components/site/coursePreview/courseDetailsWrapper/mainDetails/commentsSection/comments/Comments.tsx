import DangerAlert from "@/assets/components/elems/DangerAlert";
import { CourseContext } from "@/assets/contexts/site/course.context";
import { memo, useContext } from "react";
import CommentBox from "./CommentBox";

const Comments = memo(() => {
  const course = useContext(CourseContext);

  return (
    <div id="course-comments">
      {course?.comments?.length ? (
        course.comments.map((comment) => <CommentBox key={comment._id} {...comment}/>)
      ) : (
        <DangerAlert text="کامنتی ثبت نشده است، شما اولین نفر باشید ..." />
      )}
    </div>
  );
});

export default Comments;
