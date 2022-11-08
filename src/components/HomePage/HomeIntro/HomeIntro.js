import "./HomeIntro.scss";
import Illustration from "../../../assets/img/HomeIntroillyustratsiya.png";
function HomeIntro() {
  return (
    <section>
      <div className="homeIntroBg">
        <div className="container homeIntroContent">
          <h1>
            Make Ecommerce More <span>Profitable</span>
          </h1>
          <p>
            BirdsAI Marketing™ is an all-in-one solution to run and scale up
            your ecommerce business. We take the guesswork out of digital
            advertising to help your business save money, grow revenue and
            advertise confidently.
          </p>
          <div className="home-into-btn-wrapper">
            <button>Start free trial</button>
            <button>Schedule a Demo</button>
          </div>
          <img
            className="home-gage-illustration-img"
            src={Illustration}
            alt="Illustration-home-page"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeIntro;
