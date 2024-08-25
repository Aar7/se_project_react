import { useContext } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch(props) {
  const units = useContext(CurrentTemperatureUnitContext);
  return (
    <>
      <input
        className="switch-checkbox"
        id="switch"
        type="checkbox"
        onChange={units.handleToggleSwitchChange}
      />
      <label className="switch-label" htmlFor="switch">
        <span className="switch-button" />
        <p className="switch-text text-left">F</p>
        <p className="switch-text text-right">C</p>
      </label>
    </>
  );
}

export default ToggleSwitch;
