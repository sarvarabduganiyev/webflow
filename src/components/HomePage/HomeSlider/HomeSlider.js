import {
  HomeSliderIconOne,
  HomeSliderIconOTwo,
  HomeSliderIconThree,
} from "../../../assets/svg/icons";
import "./HomeSlider.scss";
import HomeSliderInner from "./HomeSliderInner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
const sliderInnerData = [
  {
    title: "Average revenue per customer",
    icon: <HomeSliderIconOne />,
  },
  {
    title: "Average revenue per customer",
    icon: <HomeSliderIconOTwo />,
  },
  {
    title: "Repurchase rate",
    icon: <HomeSliderIconThree />,
  },
  {
    title: "Repurchase rate",
    icon: <HomeSliderIconOne />,
  },
  {
    title: "Repurchase rate",
    icon: <HomeSliderIconOTwo />,
  },
  {
    title: "Repurchase rate",
    icon: <HomeSliderIconThree />,
  },
];
function HomeSlider() {
  return (
    <section>
      <div className="slider-card-wrapper container">
        <div className="slider-card-title-wrapper">
          <button>Ai Marketing</button>
          <h1>Birds AI marketing metrics</h1>
          <p>
            If you can”t measure it, you can”t track it. BirdsAI Marketing™
            automatically calculates and reports on the key metrics you need to
            run your business effectively
          </p>
        </div>
        <div className="slider-box">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={24}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="one-home-card-slide-wrapper"
          >
            {sliderInnerData.map(({ title, icon }, idx) => (
              <SwiperSlide>
                <HomeSliderInner title={title} icon={icon} key={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={"auto"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            spaceBetween={30}
            className="two-home-card-slide-wrapper"
          >
            {sliderInnerData.map(({ title, icon }, idx) => (
              <SwiperSlide>
                <HomeSliderInner title={title} icon={icon} key={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default HomeSlider;
