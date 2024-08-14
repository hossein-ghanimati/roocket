import { memo } from "react";

const Bottom = memo(() => {
  return (
    <div className="relative mt-2 flex md:justify-start justify-center">
      <p className="text-gray-500 dark:text-gray-300  pl-3 pt-3 md:pt-6 text-center relative z-10 inline-block text-xs">
        کليه حقوق محصولات و محتوای اين سایت متعلق به راکت می باشد و هر گونه کپی
        برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست.
      </p>
    </div>
  );
});

export default Bottom;
