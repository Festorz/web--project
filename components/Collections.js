import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import collectionStyle from "../src/styles/Collection.module.css";
import { useState, useRef, useEffect, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CollectionItem from "./CollectionItem";

const Collections = ({ collections, index }) => {
  if (index === 0) {
    collections.items = collections.items.slice(0, 1);
  }
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideNext();
    }
  };

  return (
    <div className={collectionStyle.collection}>
      <div className={collectionStyle.deals}>
        <h4>{collections.title}</h4>
        <p>{collections.subtitle}</p>
        <div className={collectionStyle.arrows}>
          <FontAwesomeIcon
            onClick={handlePrev}
            icon={faAngleLeft}
            className={collectionStyle.navs}
            id={`nav-left-${index}`}
          />
          <FontAwesomeIcon
            onClick={handleNext}
            icon={faAngleRight}
            className={collectionStyle.navs}
            id={`nav-right-${index}`}
          />
        </div>
      </div>
      <div className={collectionStyle.slider}>
        <Swiper
          ref={sliderRef}
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-navigation-size": "20px",
          }}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          navigation={{
            nextEl: `#nav-right-${index}`,
            prevEl: `#nav-left-${index}`,
          }}
          modules={[Navigation, Autoplay]}
        >
          {collections.items.map((collection, index) => (
            <SwiperSlide key={index}>
              <CollectionItem key={index} collection={collection} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Collections;
