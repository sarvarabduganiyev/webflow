import "./Challange.scss";
import ChallangeImg from "../../../assets/img/challange.png";
function Challange() {
  return (
    <section className="challange-section container">
      <div className="challange-wrapper">
        <div className="challange-grid-first-item">
          <img src={ChallangeImg} alt="challange" />
        </div>
        <div className="challange-grid-last-item">
          <h1>Challange</h1>
          <p>
            The team was relying on spreadsheets and manual calculations for
            reporting and found it difficult to access critical KPI’s like
            customer lifetime value for the business as a whole, but most
            importantly, for segments of customers or products.
          </p>
          <p>
            HBFace was growing, and growing fast. HBFace was quickly selling out
            of its products across locations and knew that an ecommerce platform
            was the answer. After setting up their Shopify site, the team at
            HBFace needed to hone in on which products to cross-sell, determine
            the best converting email flows and segment their customers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Challange;
