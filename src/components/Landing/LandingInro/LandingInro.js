import LandingImg from "../../../assets/img/landing-intro-img.png";
import "./LandingIntro.scss";
function LandingInro() {
  return (
    <section className="landing-intro-wrapper">
      <div className="container landing-intro-contents center-middle">
        <div>
          <h1>Marketing Made Simple</h1>
          <p>
            Providing Businesses With Powerful Marketing Strategies In A Click
            of A Button.
          </p>
          <div className="landing-intro-btn-wrapper center-middle">
            <button>Schedule a Demo</button>
            <button>Start free trial</button>
          </div>
        </div>
      </div>
      <div className="landing-intro-illustration-img center-middle">
        <img src={LandingImg} alt="intro" />
      </div>
    </section>
  );
}

export default LandingInro;
