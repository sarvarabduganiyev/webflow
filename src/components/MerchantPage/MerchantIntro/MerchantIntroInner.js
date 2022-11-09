function MerchantIntroInner({ img, title, description }) {
  return (
    <div className="merchant-intro-inner-card">
      <img src={img} alt="free" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default MerchantIntroInner;
