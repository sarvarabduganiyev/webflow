import "./MerchantIntro.scss";
import MerchantIntroInner from "./MerchantIntroInner";
import FreeImg from "../../../assets/img/merchant-img-free.png";
import MerchantSecondCardWrapper from "../MerchantSecondCardComponent/MerchantSecondCardWrapper";
const merchantData = [
  {
    img: FreeImg,
    title: "7 Day Free Trial",
    description:
      " BirdsAI Marketing offers a 7 day free trial that includes full training, onboarding and a marketing strategy session. We'll review your business, help you set goals and identify opportunities to help you achieve them.",
  },
  {
    img: FreeImg,
    title: "7 Day Free Trial",
    description:
      " BirdsAI Marketing offers a 7 day free trial that includes full training, onboarding and a marketing strategy session. We'll review your business, help you set goals and identify opportunities to help you achieve them.",
  },
  {
    img: FreeImg,
    title: "7 Day Free Trial",
    description:
      " BirdsAI Marketing offers a 7 day free trial that includes full training, onboarding and a marketing strategy session. We'll review your business, help you set goals and identify opportunities to help you achieve them.",
  },
  {
    img: FreeImg,
    title: "7 Day Free Trial",
    description:
      " BirdsAI Marketing offers a 7 day free trial that includes full training, onboarding and a marketing strategy session. We'll review your business, help you set goals and identify opportunities to help you achieve them.",
  },
  {
    img: FreeImg,
    title: "7 Day Free Trial",
    description:
      " BirdsAI Marketing offers a 7 day free trial that includes full training, onboarding and a marketing strategy session. We'll review your business, help you set goals and identify opportunities to help you achieve them.",
  },
];
function MerchantIntro() {
  return (
    <section className="merchant-intro-wrapper">
      <div className="container">
        <div>
          <div className="merchant-intro-title-wrapper center-middle">
            <h1>
              Solution <span>For Merchants</span>
            </h1>
            <p>
              Focus on actionable insights that drive growth with reporting
              features built for ecommerce - from lifetime value and
              profitability to customers, channels, products and more.
            </p>
          </div>
          <div className="merchant-card-grid-wrapper">
            {merchantData.map(({ img, title, description }) => (
              <MerchantIntroInner
                img={img}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
        <MerchantSecondCardWrapper />
      </div>
    </section>
  );
}

export default MerchantIntro;
