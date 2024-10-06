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
            color="success"
            isBordered
            src={
              auth?.user?.profile
                ? `http://192.168.235.220:4000/courses/covers${auth.user.profile}`
                : "/public/image/user/none.png"
            }
          />
        <div className="flex relative justify-center flex-col space-y-1">
          <h6 className="font-semibold  text-gray-800 dark:text-white leading-6">
            {auth?.user?.name}
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
