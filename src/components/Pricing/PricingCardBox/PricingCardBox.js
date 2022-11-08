import { useState } from "react";
import { PricingCheck } from "../../../assets/svg/icons";
import "./PricingCardBox.scss";
function PricingCardBox() {
  const [actual, setActual] = useState(true);
  const orderCardData = [
    {
      title: "Starter",
      button: "Get Started For Free",
      desc: "A complete overview of your business's performance and actionable insights to help you scale and grow",
      orderChance: [
        "Free forever",
        "Unlimited users",
        "Unlimited Stores",
        "Key Performance Indicators Updated Daily",
        "Repurchase Rate",
        "Lifetime Value",
        "Top Products",
        "How to Time Sales/Marketing Efforts",
        "Male/Female Segments",
      ],
    },
    {
      title: "Pro",
      button: " 7 day free trial",
      titleWord: "Then $249/month billed quarterly",
      desc: "A complete overview of your business's performance and actionable insights to help you scale and grow",
      orderChance: [
        "Free forever",
        "Unlimited users",
        "Unlimited Stores",
        "Key Performance Indicators Updated Daily",
        "Repurchase Rate",
        "Lifetime Value",
        "Top Products",
        "How to Time Sales/Marketing Efforts",
        "Male/Female Segments",
        "Automated advertising campaign suggestions",
        "Supercharged email marketing",
        "Dedicated account manager",
        "Technical Support",
      ],
    },
    {
      title: "Enterprise",
      button: "Get Your Custom Quote",
      titleWord: "Then $249/month billed quarterly",
      desc: "Unified market reporting for large businesses in several regions, extensive product lines, brands and teams. Dedicated support and success managers with enterprise-grade security.",
      orderChance: [
        "Free forever",
        "Unlimited users",
        "Unlimited Stores",
        "Key Performance Indicators Updated Daily",
        "Repurchase Rate",
      ],
    },
  ];
  return (
    <section>
      <div className="pricing-bg-wrapper">
        <div className="center-middle">
          <h1 className="pricing-title">
            Products and pricing that <span>meet your needs</span>
          </h1>
        </div>
        <div className="center-middle">
          <div className="price-role-btn-wrapper">
            <button
              className={
                actual ? "price-annualy-active" : "price-annualy-unActive"
              }
              onClick={() => setActual(true)}
            >
              Monthly
            </button>
            <button
              className={
                actual ? "price-annualy-unActive" : "price-annualy-active"
              }
              onClick={() => setActual(false)}
            >
              Annualy
            </button>
          </div>
        </div>
        <div className="center-middle order-notification-text-wrapper">
          <h4>
            <span>$249/month</span> billed quarterly
          </h4>
          <h4>7 day free trial</h4>
        </div>
        <div className="pricing-order-card-wrapper">
          <div className="pricing-oreder-card">
            <h1>Starter</h1>
            <button className="pricing-oreder-card-first-button">
              7 day free trial
            </button>
            <p className="pricing-oreder-card-description">
              A complete overview of your business's performance and actionable
              insights to help you scale and grow
            </p>
            <div className="price-order-chance-wrapper">
              <PricingCheck />
              <p>Free forever</p>
            </div>
            <button className="pricing-oreder-card-last-button">Learn More</button>
          </div>
          <div>asasdas</div>
          <div>asasdas</div>
        </div>
      </div>
    </section>
  );
}

export default PricingCardBox;
