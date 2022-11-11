import "./LandingNote.scss";
import { LandingPageGreenCheckIcon } from "../../../assets/svg/icons";
const data = [""];
function LandingNoteGridContent() {
  return (
    <div className="note-grid-first-content ">
      <h3>Data At Your Fingertips</h3>
      <p className="note-grid-first-content-paragraph">
        Reward your audience for sharing with friends — and watch your
        newsletter grow 20-200% faster. It couldn't be easier...
      </p>
      <div className="note-first-check-wrapper">
        <LandingPageGreenCheckIcon />
        <p className="note-first-check-wrapper-paragraph">
          Integrate with your email platform in two-clicks
        </p>
      </div>
      <div className="note-first-btn-wrapper">
        <button>Start free trial</button>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default LandingNoteGridContent;
