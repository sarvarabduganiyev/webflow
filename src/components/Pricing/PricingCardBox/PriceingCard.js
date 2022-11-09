import { PricingCheck } from "../../../assets/svg/icons";
import "./PricingCardBox.scss";
function PriceingCard({ title, button, titleWord, desc, orderChance }) {
  return (
    <div className="pricing-oreder-card">
      <h1>{title}</h1>
      <button className="pricing-oreder-card-first-button">{button}</button>
      <p className="price-order-title-word">{titleWord}</p>
      <p className="pricing-oreder-card-description">{desc}</p>
      <div className="price-order-chance-wrapper">
        {orderChance.map((item) => (
          <div className="price-order-chance">
            <PricingCheck />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <button className="pricing-oreder-card-last-button">Learn More</button>
    </div>
  );
}

export default PriceingCard;
