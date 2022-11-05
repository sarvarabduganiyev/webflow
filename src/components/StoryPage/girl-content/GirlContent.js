import "./GirlContent.scss";
import Girl from "../../../assets/img/girlImg.png";
function GirlContent() {
  return (
    <div className="girl-content-grid container">
      <div className="girl-content-grid-inner-one">
        <h1>
          <span>Haley Bogaert</span> knows Beauty & Cosmetics
        </h1>
        <p>
          As one of Toronto’s most sought-after brow & Cosmetic experts, Haley
          Bogaert knows Her Stuff. Specializing in threading, the founder and
          CEO of HBFace cut her teeth at some of the city’s top makeup studios.
          Now, she’s well on her way to building a global beauty empire, with
          plans to open five locations in North America.
        </p>
        <p>
          As one of Toronto’s most sought-after brow & Cosmetic experts, Haley
          Bogaert knows Her Stuff. Specializing in threading, the founder and
          CEO of HBFace cut her teeth at some of the city’s top makeup studios.
          Now, she’s well on her way to building a global beauty empire, with
          plans to open five locations in North America.
        </p>
      </div>
      <div className="girl-image-layer">
        <img src={Girl} alt="girl-img" />
      </div>
    </div>
  );
}

export default GirlContent;
