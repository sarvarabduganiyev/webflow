import {
  MarketingIconFive,
  MarketingIconFour,
  MarketingIconOne,
  MarketingIconThree,
  MarketingIconTwo,
  MarketingIconSix,
} from "../../../assets/svg/icons";
import "./Marketing.scss";
const MarketingCardInner = ({ text, icon, spanText }) => {
  return (
    <div className="maketing-card-inner">
      {icon}
      <h1>
        <span>{spanText}</span> {text}
      </h1>
    </div>
  );
};
const data = [
  {
    text: "works with different segments of customers or products",
    spanText: "Understood how each digital advertising channel",
    icon: <MarketingIconOne />,
  },
  {
    text: "works with different segments of customers or products",
    spanText: "Understood how each digital advertising channel",
    icon: <MarketingIconTwo />,
  },
  {
    text: "works with different segments of customers or products",
    spanText: "Understood how each digital advertising channel",
    icon: <MarketingIconThree />,
  },
  {
    text: "works with different segments of customers or products",
    spanText: "Understood how each digital advertising channel",
    icon: <MarketingIconFour />,
  },
  {
    text: "works with different segments of customers or products",
    spanText: "Understood how each digital advertising channel",
    icon: <MarketingIconFive />,
  },
  {
    text: "works with different segments of customers or products",
    spanText: "Understood how each digital advertising channel",
    icon: <MarketingIconSix />,
  },
];
function Marketing() {
  return (
    <section className="marketing-content-box">
      <div className="container">
        <div className="marketing-title-content ">
          <button className="solution-content">Solution</button>
          <h1 className="marketing-content-title">
            With BirdsAI Marketing, HBFace has enjoyed:
          </h1>
        </div>
        <div className="marketing-cards-wrapper">
          {data.map(({ text, icon, spanText }, idx) => (
            <MarketingCardInner
              text={text}
              icon={icon}
              key={idx}
              spanText={spanText}
            />
          ))}
        </div>
        <div className="marketing-help-btn-box center-middle">
          <button>Learn How BirdsAI Can help you</button>
        </div>
      </div>
    </section>
  );
}

export default Marketing;
