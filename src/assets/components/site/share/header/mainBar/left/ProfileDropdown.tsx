import { memo, useContext, useMemo } from "react";
import { Badge } from "@nextui-org/badge";
import { Avatar } from "@nextui-org/avatar";
import { FaArrowLeftLong } from "react-icons/fa6";

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

const ProfileDropdown = memo(() => {
  const overlaySetting = useContext(OverlayContext);

  return (
    <>
      {useMemo(
        () => (
          <Dropdown dir="rtl">
            <DropdownTrigger className="outline-none border-none">
              <button onClick={() => overlaySetting?.toggleOverlay()}>
                <Badge color="warning" content="6">
                  <Avatar
                    isBordered
                    color="primary"
                    radius="full"
                    src="https://secure.gravatar.com/avatar/5118e3dfd6864e9be78763dd17fd4517?s=96&d=mm&r=g"
                  />
                </Badge>
              </button>
            </DropdownTrigger>

            <DropdownMenu>
              <DropdownItem onClick={() => overlaySetting?.hideOverlay()}>
                <div className="flex items-center justify-start m-2 mb-3 pb-3 border-b border-gray-300 dark:border-gray-500 gap-4 ">
                  <Avatar
                    isBordered
                    color="success"
                    radius="full"
                    src="https://secure.gravatar.com/avatar/5118e3dfd6864e9be78763dd17fd4517?s=96&d=mm&r=g"
                  />
                  <div className="flex flex-col">
                    <Link
                      onClick={() => overlaySetting?.hideOverlay()}
                      to="/panel"
                      className="font-yekan text-lg"
                    >
                      حسین غنیمتی
                    </Link>
                    <Link
                      onClick={() => overlaySetting?.hideOverlay()}
                      to="/panel"
                      className="flex items-center font-medium text-base dark:text-blue-450 text-blue-700 hover:opacity-80 gap-2"
                    >
                      ورود به پنل کاربری
                      <FaArrowLeftLong className="translate-y-[2px]" />
                    </Link>
                  </div>
                </div>
              </DropdownItem>

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
              <DropdownItem onClick={() => overlaySetting?.hideOverlay()}>
                <div className="flex items-center gap-3 text-base">
                  <IoLogOutOutline className="size-5" />
                  <span>خروج از حساب</span>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ),
        []
      )}
    </>
  );
});

export default ProfileDropdown;
