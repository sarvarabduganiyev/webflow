import "./MerchantSecondCardWrapper.scss";
import { MerchantArrowIcon } from "../../../assets/svg/icons";
function MerchantSecondCard() {
  return (
    <div className="merchant-second-card-grid-first-section center-middle">
      <h1>
        Get To Know Your <span>Customers</span>
      </h1>
      <p>
        Instead of sending out blanket emails, you can create a unique customer
        experience using BirdsAI Marketing. Find out who your customers are,
        what they're buying, when they're buying and what they're likely to buy
        next.
      </p>
      <button>
        <span>Learn More</span>
        <MerchantArrowIcon />
      </button>
    </div>
  );
}

export default MerchantSecondCard;
