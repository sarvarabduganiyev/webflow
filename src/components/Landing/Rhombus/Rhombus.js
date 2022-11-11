import "./Rhombus.scss";
const rhombsusCards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
];
function Rhombus() {
  return (
    <section className="rhomb-wrapper">
      <div class="triangle-wrapper">
        <div class="triangle-up"></div>
        <div class="triangle-up2"></div>
      </div>
      <div className="rhombsus-section">
        <div className="container">
          <div className="rhombsus-section-title-wrapper center-middle">
            <h1>
              Your awesome <span>feature headline</span>
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="rhombus-card-wrapper">
            {rhombsusCards.map(({ id }) => (
              <div key={id}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rhombus;
