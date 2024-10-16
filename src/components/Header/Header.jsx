import logo from "../../assets/images/wtwr-logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import HeaderProfImg from "../HeaderProfImg/HeaderProfImg";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  // console.log("userData:", props.userData);
  let headerHtml;

  function handleClickSignUp() {
    props.setActiveModal("register-user");
  }

  function handleClickLogin() {
    props.setActiveModal("login-user");
  }

  if (props.isLoggedIn) {
    headerHtml = (
      <header className="header">
        <div className="header__wrapper header__logo-date-location-wrapper">
          <Link to="/">
            <img
              className="header__logo"
              src={logo}
              alt="Header logo showing the letters w t w r"
            />
          </Link>
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
            <Link className="header__profile-link" to="/profile">
              <p className="header__profile-name">{props.userData.name}</p>
            </Link>
            <HeaderProfImg
              mainClass={"header__profile-image"}
              avatarMissingClass={"header__avatar-missing"}
              nameInitialClass={"header__name-initial"}
            />
          </div>
        </div>
      </header>
    );
  } else {
    headerHtml = (
      <header className="header">
        <div className="header__wrapper header__logo-date-location-wrapper">
          <Link to="/">
            <img
              className="header__logo"
              src={logo}
              alt="Header logo showing the letters w t w r"
            />
          </Link>
          <p className="header__date-location">{`${props.date}, ${props.location}`}</p>
        </div>
        <div className="header__wrapper header__button-profile-wrapper">
          <ToggleSwitch />
          <button className="header__buttons" onClick={handleClickSignUp}>
            Sign Up
          </button>
          <button className="header__buttons" onClick={handleClickLogin}>
            Log In
          </button>
        </div>
      </header>
    );
  }
  return headerHtml;
}

export default Header;
