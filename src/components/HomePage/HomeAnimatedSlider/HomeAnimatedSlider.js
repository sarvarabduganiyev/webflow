import "./HomeAnimatedSlider.scss";
import HomeAnimatedSliderInner from "./HomeAnimatedSliderInner";
import { Swiper, SwiperSlide } from "swiper/react";
import nextAnimatedBtn from "../../../assets/img/nextAnumatedBtn.png";
import PrewAnimatedBtn from "../../../assets/img/PrewAnumatedBtn.png";
import { SliderLogoIcon, SliderTitleIcon } from "../../../assets/svg/icons";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
const animatedSliderData = [
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
    firstImg: <SliderTitleIcon />,
    secondImg: <SliderLogoIcon />,
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
    firstImg: <SliderTitleIcon />,
    secondImg: <SliderLogoIcon />,
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
    firstImg: <SliderTitleIcon />,
    secondImg: <SliderLogoIcon />,
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
    firstImg: <SliderTitleIcon />,
    secondImg: <SliderLogoIcon />,
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
    firstImg: <SliderTitleIcon />,
    secondImg: <SliderLogoIcon />,
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
    firstImg: <SliderTitleIcon />,
    secondImg: <SliderLogoIcon />,
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
    firstImg: <SliderTitleIcon />,
    secondImg: <SliderLogoIcon />,
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
    firstImg: <SliderTitleIcon />,
    secondImg: <SliderLogoIcon />,
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
    firstImg: <SliderTitleIcon />,
    secondImg: <SliderLogoIcon />,
  },
];
function HomeAnimatedSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <section>
      <div className="home-animate-slider">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Navigation]}
          className="swiper-animated-home-wrapper"
        >
          {animatedSliderData.map(({ text, firstImg, secondImg }) => (
            <SwiperSlide>
              <HomeAnimatedSliderInner
                text={text}
                firstImg={firstImg}
                secondImg={secondImg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="home-animated-btn-roles-wrapper">
          <button ref={navigationPrevRef} className="home-animated-swiper-prev">
            <img src={PrewAnimatedBtn} alt="nextAnimatedBtn" />
          </button>
          <button ref={navigationNextRef} className="home-animated-swiper-next">
            <img src={nextAnimatedBtn} alt="nextAnimatedBtn" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeAnimatedSlider;
