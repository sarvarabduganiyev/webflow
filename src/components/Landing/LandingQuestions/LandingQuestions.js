import "./LandingQuestions.scss";
const questionData = [
  {
    title: "Can I go to the moon?",
    description:
      "A very small stage in a vast cosmic arena tendrils of gossamer clouds white dwarf laws of physics cosmic ocean Ut enim ad minimaveniam. The sky calls to us the only home we've ever known bits ofmoving fluff extraordinary claims require extraordinary stirred by starlight.",
  },
  {
    title: "Can I go to the moon?",
    description:
      "A very small stage in a vast cosmic arena tendrils of gossamer clouds white dwarf laws of physics cosmic ocean Ut enim ad minimaveniam. The sky calls to us the only home we've ever known bits ofmoving fluff extraordinary claims require extraordinary stirred by starlight.",
  },
  {
    title: "Can I go to the moon?",
    description:
      "A very small stage in a vast cosmic arena tendrils of gossamer clouds white dwarf laws of physics cosmic ocean Ut enim ad minimaveniam. The sky calls to us the only home we've ever known bits ofmoving fluff extraordinary claims require extraordinary stirred by starlight.",
  },
  {
    title: "Can I go to the moon?",
    description:
      "A very small stage in a vast cosmic arena tendrils of gossamer clouds white dwarf laws of physics cosmic ocean Ut enim ad minimaveniam. The sky calls to us the only home we've ever known bits ofmoving fluff extraordinary claims require extraordinary stirred by starlight.",
  },
  {
    title: "Can I go to the moon?",
    description:
      "A very small stage in a vast cosmic arena tendrils of gossamer clouds white dwarf laws of physics cosmic ocean Ut enim ad minimaveniam. The sky calls to us the only home we've ever known bits ofmoving fluff extraordinary claims require extraordinary stirred by starlight.",
  },
  {
    title: "Can I go to the moon?",
    description:
      "A very small stage in a vast cosmic arena tendrils of gossamer clouds white dwarf laws of physics cosmic ocean Ut enim ad minimaveniam. The sky calls to us the only home we've ever known bits ofmoving fluff extraordinary claims require extraordinary stirred by starlight.",
  },
];
function LandingQuestions() {
  return (
    <section className="landing-questions-wrapper">
      <div className="container">
        <h1>Frequently asked questions</h1>
        <div className="landing-questions-card-wrapper">
          {questionData.map(({ title, description }, idx) => (
            <div className="landing-questions-card" key={idx}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LandingQuestions;
