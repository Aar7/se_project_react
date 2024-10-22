import "./SideBar.css";
import HeaderProfImg from "../../HeaderProfImg/HeaderProfImg";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { removeToken } from "../../../utils/token";

function SideBar(props) {
  async function handleClickLogout() {
    removeToken();
    await props.setIsLoggedIn(false);
  }
  const userData = useContext(CurrentUserContext);
  return (
    <div className="profile-sidebar">
      <div className="profile-sidebar__user-info">
        <HeaderProfImg
          mainClass={"profile-sidebar__image"}
          avatarMissingClass={"profile-sidebar__image_missing"}
          nameInitialClass={"profile-sidebar__name-initial"}
        />
        <p className="profile-sidebar__name">{userData.name}</p>
      </div>
      <div className="profile-sidebar__buttons">
        <button
          className="profile-sidebar__button profile-sidebar__change-profile-data"
          type="button"
          onClick={props.handleClickChangeProfileData}
        >
          Change Profile Data
        </button>
        <button
          className="profile-sidebar__button profile-sidebar__log-out"
          type="button"
          onClick={handleClickLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
