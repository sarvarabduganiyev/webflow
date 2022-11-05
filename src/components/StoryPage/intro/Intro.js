import "./intro.scss";
import IntroLogo from "../../../assets/img/inrtoLogo.png";
function Intro() {
  return (
    <section>
      <div className="intro-bg container">
        <div className="intro-content center-middle">
          <div>
            <img src={IntroLogo} alt="intro-logo" />
          </div>
          <div>
            <h1>
              How HB Face is Scaling Up Their Ecommerce Brand with BirdsAI
              Marketing
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
