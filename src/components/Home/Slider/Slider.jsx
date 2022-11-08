import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./Slider.css";
import "swiper/css";
import img1 from "../../../assets/slider_image/img1.jpg";
import img2 from "../../../assets/slider_image/img2.jpg";
import img3 from "../../../assets/slider_image/img3.jpg";
import img4 from "../../../assets/slider_image/img4.jpg";
import img5 from "../../../assets/slider_image/img5.jpg";
import img6 from "../../../assets/slider_image/img6.jpg";
import img7 from "../../../assets/slider_image/img7.jpg";
import img8 from "../../../assets/slider_image/img8.jpg";

const Slider = () => {
  return (
    <div className="slider-container h-72 md:h-[600px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
