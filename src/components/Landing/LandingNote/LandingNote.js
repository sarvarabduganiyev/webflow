import grayCardImage from "../../../assets/img/gray-card-image.png";
import "./LandingNote.scss";
import LandingNoteGridContent from "./LandingNoteGridContent";
import noteIcon from "../../../assets/img/noteIcon.png";
function LandingNote() {
  return (
    <section className="note-component-wrapper">
      <div className="container ">
        <div className="note-first-grid-system">
          <LandingNoteGridContent />
          <img src={grayCardImage} alt="gray-card-image" />
        </div>
        <div>
          <div className="note-second-grid-system">
            <img src={grayCardImage} alt="grayCardImage" />
            <div className="note-second-grid-system-inner">
              <p className="note-second-grid-system-inner-paragraph">
                SparkLoop is the fastest way to get a newsletter referral
                program — like TheSkimm and Morning Brew — up and running. I've
                tested different referral tools, but
                <span> none is as easy to use or as cost effective </span> as
                SparkLoop.
              </p>
              <div className="note-author-wrapper">
                <div>
                  <p>Dan Oshinsky</p>
                  <p>INBOX COLLECTIVE</p>
                </div>
                <img src={noteIcon} alt="note-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="roi-components">
          <img src={grayCardImage} alt="grayCardImage" />
          <div className="roi-datas">
            <LandingNoteGridContent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingNote;
