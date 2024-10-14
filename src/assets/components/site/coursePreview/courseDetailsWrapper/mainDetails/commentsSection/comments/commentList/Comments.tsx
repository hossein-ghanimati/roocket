import DangerAlert from "@/assets/components/elems/DangerAlert";
import { CourseContext } from "@/assets/contexts/site/course.context";
import { memo, useContext, useState } from "react";
import CommentBox from "./CommentBox";
import { sortByLast } from "@/assets/ts/utils/calculation";

import { Pagination } from "@nextui-org/pagination";

const Comments = memo(() => {
  const course = useContext(CourseContext);
  const [paginationNumber, setPaginationNumber] = useState(1);
  
  return (
    <div id="course-comments">
      {course?.comments?.length ? (
        <>
          {sortByLast(course.comments).splice(
              ((paginationNumber || 1) - 1) * 3,
              3
            ).map((comment) => (
            <CommentBox key={comment._id} {...comment} />
          ))}

          {course?.comments?.length !== 0 &&
          course?.comments?.length > 3 ? (
            <div className="comments-pagination">
              <div className="flex items-center justify-center">
                <Pagination
                  total={Math.ceil(course?.comments.length / 3)}
                  page={paginationNumber}
                  color="success"
                  variant={"bordered"}
                  onChange={(page) => {
                    setPaginationNumber(page);
                  }}
                  className="mb-1"
                ></Pagination>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <DangerAlert text="کامنتی ثبت نشده است، شما اولین نفر باشید ..." />
      )}
    </div>
  );
});

export default Comments;
