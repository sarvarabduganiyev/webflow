import grayImage from "../../../assets/img/gray-card-image.png";
import "./MerchantSecondCardWrapper.scss";
import MerchantSecondCard from "./MerchantSecondCard";
function MerchantSecondCardWrapper() {
  return (
    <>
      <div className="marchant-second-card-grid-system merchant-grid-first">
        <MerchantSecondCard />
        <img src={grayImage} alt="gray-image" />
      </div>
      <div className="marchant-second-card-grid-system merchant-grid-last">
        <img src={grayImage} alt="gray-image" />
        <MerchantSecondCard />
      </div>
    </>
  );
}

export default MerchantSecondCardWrapper;
