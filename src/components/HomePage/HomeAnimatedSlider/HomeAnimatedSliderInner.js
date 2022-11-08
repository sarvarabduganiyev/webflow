function HomeAnimatedSliderInner({ text, firstImg, secondImg }) {
  return (
    <div className="home-page-animated-slider-card-box">
      <div className="home-page-animated-slider-card-text-box">
        {firstImg}
        <p>{text}</p>
      </div>
      {secondImg}
    </div>
  );
}

export default HomeAnimatedSliderInner;
