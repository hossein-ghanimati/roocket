import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { Avatar } from "@nextui-org/avatar";

const Left = memo(() => {
  return (
    <div className="lg:col-span-6 xl:pl-5 mt-5 lg:mt-0">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        navigation={{
          nextEl: ".feedback-swiper-next",
          prevEl: ".feedback-swiper-prev",
        }}
        modules={[Navigation, EffectCoverflow]}
        className="rounded-xl py-20 shadow-sm dark:shadow-teacherCardSHadow"
      >
        <SwiperSlide className="size-full">
          <div className="size-full  rounded-xl bg-white dark:bg-gray-900  lg:px-9 flex-1 px-5 pt-8 pb-6 min-h-290 flex flex-col justify-center">
            <div>
              <p className="text-center lg:text-xl text-base font-normal flex-grow overflow-hidden lg:leading-10 leading-7 text-gray-500 dark:text-gray-300 mb-7 line-clamp-3">
                راکت شاید تنها ترین مجموعه در ایران باشد، که آموزش های کاربردی،
                بروز و پروژه محور متناسب با نیاز بازار داخلی و جهانی ارائه میده!
                دمتون گرم
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Avatar
                isBordered
                color="success"
                src="https://static.roocket.ir/images/editor/2021/12/14/rtXU1eTwgxpOPcFllmMuXAnss2avQ7sWGsiZcEr5.jpg"
                className="ml-3"
              ></Avatar>

              <div className="flex flex-col">
                <span className="dark:text-white text-biscay-700 lg:text-xl text-base font-bold mb-2">
                  مهدی علیپور
                </span>
                <span className="text-xs font-normal text-gray-500 dark:text-gray-300">
                  کارآفرین، طراح رفتار و مربی بین المللی
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="size-full">
          <div className="size-full  rounded-xl bg-white dark:bg-gray-900  lg:px-9 flex-1 px-5 pt-8 pb-6 min-h-290 flex flex-col justify-center">
            <div>
              <p className="text-center lg:text-xl text-base font-normal flex-grow overflow-hidden lg:leading-10 leading-7 text-gray-500 dark:text-gray-300 mb-7 line-clamp-3">
                به واسطه فیلد کاری متفاوت، من تجربه استفاده از دوره ها راکت رو
                نداشتم ولی هر کدوم از بچه های تیم‌ فنی‌مون که یک دوره از مجموعه
                راکت تهیه کرده،‌ هم رضایت بالایی داشتند هم دوره ها براشون خیلی
                کاربردی بوده.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Avatar
                isBordered
                color="success"
                src="https://static.roocket.ir/images/editor/2021/12/14/5tgV6yVjqjZTEIcdee3Dktt79tNe5R5Qo3lYhCBL.jpg"
                className="ml-3"
              ></Avatar>

              <div className="flex flex-col">
                <span className="dark:text-white text-biscay-700 lg:text-xl text-base font-bold mb-2">
                  وحید بهرامیان
                </span>
                <span className="text-xs font-normal text-gray-500 dark:text-gray-300">
                  مدیریت محصول ژاکت
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
});

export default Left;
