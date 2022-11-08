function HomeSliderInner({ title, icon }) {
  return (
    <div className="home-slider-inner-wrapper center-middle">
      {icon}
      <h1>{title}</h1>
    </div>
  );
}

export default HomeSliderInner;
