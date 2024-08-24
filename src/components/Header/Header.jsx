import profImage from "../../assets/images/profile-image-placeholder.svg";
import logo from "../../assets/images/wtwr-logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <div className="header__wrapper header__logo-date-location-wrapper">
        <img
          className="header__logo"
          src={logo}
          alt="Header logo showing the letters w t w r"
        />
        <p className="header__date-location">{`${props.date}, ${props.location}`}</p>
      </div>
      {/* <button className="header__wrapper-button" type="button"></button> */}
      <div className="header__wrapper header__button-profile-wrapper">
        <ToggleSwitch />
        <button
          className="header__add-clothes"
          type="button"
          onClick={() => {
            props.setActiveModal("add-garment");
          }}
        >
          + Add clothes
        </button>

        <div className="header__profile">
          <p className="header__profile-name">Name, Namerson</p>
          <img
            className="header__profile-image"
            src={profImage}
            alt="User profile image"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
