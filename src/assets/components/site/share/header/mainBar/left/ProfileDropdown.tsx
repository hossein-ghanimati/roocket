import { memo, useContext, useMemo } from "react";
import { Badge } from "@nextui-org/badge";
import { Avatar } from "@nextui-org/avatar";
import { FaArrowLeftLong } from "react-icons/fa6";

import { TbLogin } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";

import { OverlayContext } from "@/assets/contexts/site/overlay.context";
import { Link } from "react-router-dom";

import { BsCameraVideo } from "react-icons/bs";
import { TbMessageQuestion } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { AuthContext } from "@/assets/contexts/share/auth.context";

const ProfileDropdown = memo(() => {
  const overlaySetting = useContext(OverlayContext);
  const auth = useContext(AuthContext);

  return (
    <>
      {useMemo(
        () => (
          <Dropdown dir="rtl">
            <DropdownTrigger className="outline-none border-none">
              <button onClick={() => overlaySetting?.toggleOverlay()}>
                <Badge
                  color="warning"
                  content={auth?.user?.notifications?.length}
                >
                  <Avatar
                    isBordered
                    color={auth?.isLogin ? "primary" : "warning"}
                    radius="full"
                    src={auth?.user?.profile ? `http://localhost:4000/courses/covers${auth.user.profile}` : "/public/image/user/none.png"}
                  />
                </Badge>
              </button>
            </DropdownTrigger>

            <DropdownMenu>
              <DropdownItem onClick={() => overlaySetting?.hideOverlay()}>
                <div className="flex items-center justify-start m-2 mb-3 pb-3 border-b border-gray-300 dark:border-gray-500 gap-4 ">
                  <Avatar
                    isBordered
                    color={auth?.isLogin ? "success" : "danger"}
                    radius="full"
                    src={auth?.user?.profile ? `http://localhost:4000/courses/covers${auth.user.profile}` : "/public/image/user/none.png"}
                  />
                  <div className="flex flex-col">
                    {auth?.isLogin ? (
                      <>
                        <Link
                          onClick={() => overlaySetting?.hideOverlay()}
                          to="/panel"
                          className="font-yekan text-lg"
                        >
                          {auth.user?.name}
                        </Link>
                        <Link
                          onClick={() => overlaySetting?.hideOverlay()}
                          to="/panel"
                          className="flex items-center font-medium text-base dark:text-blue-450 text-blue-700 hover:opacity-80 gap-2"
                        >
                          ورود به پنل کاربری
                          <FaArrowLeftLong className="translate-y-[2px]" />
                        </Link>
                      </>
                    ) : (
                      <Link
                        onClick={() => overlaySetting?.hideOverlay()}
                        to="/login"
                        className="font-yekan text-lg"
                      >
                        ورود به حساب کاربری
                      </Link>
                    )}
                  </div>
                </div>
              </DropdownItem>

              {auth?.isLogin ? (
                <DropdownItem onClick={() => overlaySetting?.hideOverlay()}>
                  <Link
                    onClick={() => overlaySetting?.hideOverlay()}
                    to="/panel/courses"
                    className="flex items-center gap-3 text-base"
                  >
                    <BsCameraVideo className="size-5" />
                    <span>دوره ها</span>
                  </Link>
                </DropdownItem>
              ) : (
                <DropdownItem onClick={() => overlaySetting?.hideOverlay()}>
                  <Link
                    onClick={() => overlaySetting?.hideOverlay()}
                    to="/login"
                    className="flex items-center gap-3 text-base"
                  >
                    <TbLogin className="size-5" />
                    <span>ورود به حساب</span>
                  </Link>
                </DropdownItem>
              )}

              {auth?.isLogin ? (
                <DropdownItem onClick={() => overlaySetting?.hideOverlay()}>
                  <Link
                    onClick={() => overlaySetting?.hideOverlay()}
                    to="/panel/tickets"
                    className="flex items-center gap-3 text-base"
                  >
                    <TbMessageQuestion className="size-5" />
                    <span>تیکت ها</span>
                  </Link>
                </DropdownItem>
              ) : (
                <DropdownItem onClick={() => overlaySetting?.hideOverlay()}>
                  <Link
                    onClick={() => overlaySetting?.hideOverlay()}
                    to="/register"
                    className="flex items-center gap-3 text-base"
                  >
                    <PiStudentBold className="size-5" />
                    <span>عضویت در سایت</span>
                  </Link>
                </DropdownItem>
              )}

              {auth?.isLogin ? (
                <DropdownItem
                  onClick={() => {
                    overlaySetting?.hideOverlay();
                    auth.logout();
                  }}
                >
                  <div className="flex items-center gap-3 text-base">
                    <IoLogOutOutline className="size-5" />
                    <span>خروج از حساب</span>
                  </div>
                </DropdownItem>
              ) : (
                <DropdownItem></DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        ),
        [auth?.user]
      )}
    </>
  );
});

export default ProfileDropdown;
