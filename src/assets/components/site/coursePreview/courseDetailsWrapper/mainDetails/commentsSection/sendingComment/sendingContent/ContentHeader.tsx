import noneUserImg from "/public/image/user/none.png"
import { AuthContext } from "@/assets/contexts/share/auth.context";
import { Avatar } from "@nextui-org/avatar";
import { useContext } from "react";

const ContentHeader = () => {
  const auth = useContext(AuthContext);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <div className="flex mb-4 space-x-4 space-x-reverse">
          <Avatar
            className="!size-14"
            color={auth?.isLogin ? "success" : "danger"}
            isBordered
            src={
              auth?.user?.profile
                ? `https://academic.liara.run/courses/covers${auth.user.profile}`
                : noneUserImg
            }
          />
        <div className="flex relative justify-center flex-col space-y-1">
          <h6 className="font-semibold  text-gray-800 dark:text-white leading-6">
            {auth?.user?.name || "کاربر مهمان"}
          </h6>
          <span className="text-xs">
            {auth?.user?.username}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
