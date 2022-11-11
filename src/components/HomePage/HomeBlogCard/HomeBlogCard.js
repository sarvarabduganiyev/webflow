import "./HomeBlogCard.scss";
import homeBlogOne from "../../../assets/img/home-blog-one.png";
import homeBlogTwo from "../../../assets/img/home-blog-two.png";
import homeBlogThree from "../../../assets/img/home-blog-three.png";
import homeBlogFour from "../../../assets/img/home-blog-four.png";
const HomeBlogSmallCardData = [
  {
    date: "Jul 20, 2022",
    title:
      "Consectures Content Velitpato officia consequat duis enim velit mollit",
    img: homeBlogTwo,
  },
  {
    date: "Jul 20, 2022",
    title:
      "Consectures Content Velitpato officia consequat duis enim velit mollit",
    img: homeBlogThree,
  },
  {
    date: "Jul 20, 2022",
    title:
      "Consectures Content Velitpato officia consequat duis enim velit mollit",
    img: homeBlogFour,
  },
];
const HomeBlogSmallCard = ({ date, title, img }) => {
  return (
    <div className="home-blog-grid-card-wrapper">
      <img src={img} alt="home-blog-two-img" />
      <div>
        <p>{date}</p>
        <h5>{title}</h5>
      </div>
    </div>
  );
};

function HomeBlogCard() {
  return (
    <section className="home-page-blog-wrapper">
      <div className="container">
        <div className="home-page-blog-title-wrapper center-middle">
          <button>Our Unique Content</button>
          <h1>Learn about x with our blog </h1>
        </div>
        <div className="home-blog-grid-system">
          <div>
            <img
              className="home-blog-first-img"
              src={homeBlogOne}
              alt="homeBlogOne"
            />
            <div className="home-blog-first-grid-section">
              <p>Jul 20, 2022</p>
              <h1>
                Consectures Dummy Content Velit officia consequat duis enim
                velit mollit
              </h1>
              <p className="home-blog-description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit
                xercitation veniam.
              </p>
            </div>
          </div>
          <div>
            {HomeBlogSmallCardData.map(({ date, title, img }, idx) => (
              <HomeBlogSmallCard
                date={date}
                title={title}
                img={img}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBlogCard;
