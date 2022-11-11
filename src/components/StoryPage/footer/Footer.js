import "./footer.scss";
import Logo from "../../../assets/img/logo.png";
import {
  BehanseFooterIcon,
  FacebookFooterIcon,
  IntagramFooterIcon,
  TwitterFooterIcon,
} from "../../../assets/svg/icons";
const footerLinkData = [
  {
    title: "Discover",
    firstLink: "Home",
    secondLink: "Problem we solve",
    thirdLink: "Case study",
    fourthLink: "FAQ",
    fifthLink: "Login",
  },
  {
    title: "Title",
    firstLink: "Home",
    secondLink: "Problem we solve",
    thirdLink: "Case study",
    fourthLink: "FAQ",
    fifthLink: "Login",
  },
  {
    title: "More",
    firstLink: "Home",
    secondLink: "Problem we solve",
    thirdLink: "Case study",
    fourthLink: "FAQ",
    fifthLink: "Login",
  },
];
function Footer() {
  return (
    <footer>
      <div className="container footer-wrapper">
        <div className="footer-first-content">
          <img src={Logo} alt="logo-footer" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <button>
              <FacebookFooterIcon />
            </button>
            <button>
              <IntagramFooterIcon />
            </button>
            <button>
              <TwitterFooterIcon />
            </button>
            <button>
              <BehanseFooterIcon />
            </button>
          </div>
        </div>
        <div className="footer-section-link-wrapper">
          {footerLinkData.map(
            (
              {
                firstLink,
                secondLink,
                thirdLink,
                fourthLink,
                fifthLink,
                title,
              },
              idx
            ) => (
              <div key={idx} className="all-links-wrappeer">
                <h3>{title}</h3>
                <ul>
                  <li>
                    <a href="#">{firstLink}</a>
                  </li>
                  <li>
                    <a href="#">{secondLink}</a>
                  </li>
                  <li>
                    <a href="#">{thirdLink}</a>
                  </li>
                  <li>
                    <a href="#">{fourthLink}</a>
                  </li>
                  <li>
                    <a href="#">{fifthLink}</a>
                  </li>
                </ul>
              </div>
            )
          )}
        </div>
        <div className="footer-address-wrapper">
          <p>
            Sun Life Tower 150 King Street West Suite 275 Toronto, Ontario M5H
            1J9
          </p>
        </div>
      </div>
      <div className="footer-end-wrapper container">
        <hr />
        <p>Copyright &copy; {new Date().getFullYear()} . Crafted with love.</p>
      </div>
    </footer>
  );
}

export default Footer;
