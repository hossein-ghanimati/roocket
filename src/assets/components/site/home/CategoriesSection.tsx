import SectionHeader from "@/assets/components/elems/SectionHeader";
import SkeletonBox from "@/assets/components/elems/boxes/SkeletonBox";
import CategoryType from "@/assets/types/share/category.type";
import { memo, useEffect, useState } from "react";
import sendGetReq from "@/assets/ts/utils/requests/sendGetReq";
import CategoryBox from "@/assets/components/elems/boxes/CategoryBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import SwiperNextPrev from "@/assets/components/elems/SwiperNextPrev";
import "swiper/css";
import "swiper/css/pagination";
import "@/assets/styles/swiper-custom.css";

const CategoriesSection = memo(() => {
  const [categories, setCategories] = useState<CategoryType[] | null>([]);

  useEffect(() => {
    (async function () {
      const categoriesData = await sendGetReq("category");
      setCategories(categoriesData);
    })();
  }, []);

  return (
    <section>
      <div className="container relative">
        <SectionHeader
          id="ways"
          title="نقشه های راه"
          href="courses"
          hrefTitle="همه دوره ها"
        />
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".categories-swiper-next",
            prevEl: ".categories-swiper-prev",
          }}
          modules={[Pagination, Navigation]}
          className="relative !pb-10"
        >
          {categories?.length
            ? categories.map((category) => (
                <SwiperSlide key={category._id} className="!size-max">
                  <CategoryBox {...category} />
                </SwiperSlide>
              ))
            : Array.from(Array(8).keys())?.map((i) => (
                <SwiperSlide key={i} className="!size-max">
                  <SkeletonBox isGridChild={false}/>
                </SwiperSlide>
              ))}
        </Swiper>
        
        <SwiperNextPrev selector="categories"/>
      </div>
    </section>
  );
});

export default CategoriesSection;
