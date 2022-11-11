import "./LandingBrands.scss";
import GoogleImg from "../../../assets/img/google.png";
const brands = [
  { img: GoogleImg, id: 1 },
  { img: GoogleImg, id: 2 },
  { img: GoogleImg, id: 3 },
  { img: GoogleImg, id: 4 },
  { img: GoogleImg, id: 5 },
];
function LandingBrands() {
  return (
    <section className="landing-brand-section">
      <div className="container">
        <h5>TRUSTED BY THOUSANDS OF TOP BRANDS:</h5>
        <div className="landing-brand-logo-wrapper">
          {brands.map(({ img, id }) => (
            <img src={img} key={id} alt="google-img" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LandingBrands;
