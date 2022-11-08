import "./HomeEllipse.scss";
import firstIllustration from "../../../assets/img/illyustratsiya1.png";
import secondIllustration from "../../../assets/img/illyustratsiya2.png";
import ThirdIllustration from "../../../assets/img/illyustratsiya3.png";
import FirstIllustrationVector from "../../../assets/img/FirstIllustrationVector.png";
import SecondIllustrationVector from "../../../assets/img/SecondIllustrationVector.png";
import ThirdIllustrationVector from "../../../assets/img/ThirdIllustrationVector.png";

const IllustrationContent = ({ buttonWord, title, description, imgUrl }) => (
  <div className="first-illustration-wrapper">
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{buttonWord}</button>
    </div>
    <img className="secondIllustration" src={imgUrl} alt="secondIllustration" />
  </div>
);
function HomeEllipse() {
  return (
    <section>
      <div className="ellipse-home-wrapepr">
        <div className="container">
          <div className="ellipse-title-wrapper center-middle">
            <button>Super Easy To Use</button>
            <h1>Our features</h1>
          </div>
          <div className="illustration-box">
            <div className="first-illustration-wrapper">
              <img className="firstIllustration" src={firstIllustration} alt="firstIllustration" />
              <div>
                <p>Our integrations</p>
                <h3>
                  Smart data connections, for insights across your entire
                  business.
                </h3>
                <button>See All Integrations</button>
              </div>
              <img
                className="FirstIllustrationVector"
                src={FirstIllustrationVector}
                alt="FirstIllustrationVector"
              />
            </div>
            <IllustrationContent
              buttonWord="Learn More"
              title="Connect With Your Customers No Matter Where They Are"
              description="With BirdsAI Marketing, you'll be able to identify a segment of
              customers or products and estimate their growth rate automatically"
              imgUrl={secondIllustration}
            />
            <div className="first-illustration-wrapper">
              <img
                className="ThirdIllustration"
                src={ThirdIllustration}
                alt="ThirdIllustration"
              />
              <div>
                <h3>A Marketing Report Made Just For You</h3>
                <p>
                  You'll get a detailed report that includes everything a
                  marketer needs to know. See how to better reach and advertise
                  to these customers (products they purchase, location, gender,
                  spending patterns, buying behavior and more)
                </p>
                <button>Learn More</button>
              </div>
              <img
                className="SecondIllustrationVector"
                src={SecondIllustrationVector}
                alt="SecondIllustrationVector"
              />
              <img
                className="ThirdIllustrationVector"
                src={ThirdIllustrationVector}
                alt="ThirdIllustrationVector"
              />
            </div>
            <IllustrationContent
              buttonWord="Learn More"
              title="Connect With Your Customers No Matter Where They Are"
              description="With BirdsAI Marketing, you'll be able to identify a segment of
              customers or products and estimate their growth rate automatically"
              imgUrl={secondIllustration}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeEllipse;
