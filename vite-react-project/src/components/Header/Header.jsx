import profImage from "../../assets/images/profile-image-placeholder.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__wrapper header__logo-date-location-wrapper">
        <p className="header__logo">wtwr°</p>
        <p className="header__date-location">DATE-LOCATION</p>
      </div>
      <div className="header__wrapper header__button-profile-wrapper">
        <button className="header__add-clothes">+ Add clothes</button>
        <div className="header__profile">
          <p className="header__profile-name">NAME</p>
          <img className="header__profile-image" src={profImage} />
        </div>
      </div>
    </div>
  );
}

export default Header;
