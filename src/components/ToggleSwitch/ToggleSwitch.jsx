import "./ToggleSwitch.css";

function ToggleSwitch(props) {
  return (
    <>
      <input className="switch-checkbox" id="switch2" type="checkbox" />
      <label className="switch-label" htmlFor="switch2">
        <span className="switch-button" />
        <p className="switch-text text-left">F</p>
        <p className="switch-text text-right">C</p>
      </label>
    </>
  );
}

export default ToggleSwitch;
