import "./ChoiceCardWrapper.scss";
const choiceData = [
  {
    title: "Easy 2-click integration",
    description:
      "Connect SparkLoop to your email platform in just two clicks. No code or messy Zapier hacks needed. It just works!",
  },
  {
    title: "Easy 2-click integration",
    description:
      "Connect SparkLoop to your email platform in just two clicks. No code or messy Zapier hacks needed. It just works!",
  },
  {
    title: "Easy 2-click integration",
    description:
      "Connect SparkLoop to your email platform in just two clicks. No code or messy Zapier hacks needed. It just works!",
  },
  {
    title: "Easy 2-click integration",
    description:
      "Connect SparkLoop to your email platform in just two clicks. No code or messy Zapier hacks needed. It just works!",
  },
];
function ChoiceCardWrapper() {
  return (
    <section className="choise-title-wrapper">
      <div className="container">
        <div className="center-middle">
          <h1>"The no-brainer choice"</h1>
          <p className="choise-description">
            When you choose SparkLoop over other solutions, you'll
            <span> grow 2.3x faster, spend 3.7x </span> less per referral, and
            <span>save hundreds of hours wasted </span> on boring manual work.
          </p>
        </div>
        <div className="choise-card-wrapper">
          {choiceData.map(({ title, description }, idx) => (
            <div className="choise-card" key={idx}>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChoiceCardWrapper;
