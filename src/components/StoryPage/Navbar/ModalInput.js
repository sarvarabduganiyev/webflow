import { RedStartIcon } from "../../../assets/svg/icons";
import "./navbar.scss";
function ModalInput({ label }) {
  return (
    <label className="modal-input-label-wrapper">
      {label}
      <RedStartIcon />
      <input type="text" />
    </label>
  );
}
export default ModalInput;
