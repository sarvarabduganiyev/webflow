function IntroDataInner({ title, desc }) {
  console.log(title);
  return (
    <div className="intro-data-inner">
      <span className="intro-inner-hr"></span>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default IntroDataInner;
