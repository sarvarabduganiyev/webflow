import "./HomeTabContent.scss";
import HomeTabContentImage from "../../../assets/img/HomeTabContentImage.png";
import { useState } from "react";
const tabInnterText = [
  { text: "Email" },
  { text: "Predict" },
  { text: "Advertise" },
  { text: "Track" },
];
function HomeTabContent() {
  const [tab, setTab] = useState("Email");
  const HomeStateFunc = () => {
    switch (tab) {
      case "Email":
        return (
          <div>
            <h1>Supercharge Your Email Marketing Performance</h1>
            <ul>
              <li>
                Identify who the right customers to market so you can build high
                converting email flows and get them back to your store Find out
                what the perfect date
              </li>
              <li>
                See what products and SKU's your customers are purchasing and
                most likely to purchase next
              </li>
              <li>
                Find out what the perfect date and time to email your customers
                is.
              </li>
            </ul>
            <button>Learn How To Get Started</button>
          </div>
        );
      case "Predict":
        return <h1>Predict</h1>;
      case "Advertise":
        return <h1>Advertise</h1>;
      case "Track":
        return <h1>Track</h1>;
    }
  };
  return (
    <section>
      <div className="home-tab-content-wrapper">
        <div className="home-tab-content-grid-system container">
          <div className="home-tab-content-img-wrapper">
            <img src={HomeTabContentImage} alt="home-tab-content-image" />
          </div>
          <div>
            <div className="home-tab-wrapper">
              <h1>Why Choose BirdsAI Marketing</h1>
            </div>
            <div className="home-page-tab-head-wrapper">
              {tabInnterText.map(({ text }) => (
                <button
                  className={
                    tab === text
                      ? "home-page-tab-active"
                      : "home-page-tab-unactive"
                  }
                  onClick={() => setTab(text)}
                >
                  {text}
                </button>
              ))}
            </div>
            <div className="home-page-tab-body-wrapper">{HomeStateFunc()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTabContent;
