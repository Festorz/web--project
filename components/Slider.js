import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ slides }) => {
  return (
    <>
      <section className="carousel" id="slider1">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-navigation-size": "20px",
          }}
          slidesPerView={1.3}
          centeredSlides
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={24}
          loop
          fadeEffect={{ crossFade: true }}
          navigation
          pagination={{ type: "bullets", clickable: true }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.mainBannerId}>
              <img src={slide.pcImageUrl} alt="image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Slider;
