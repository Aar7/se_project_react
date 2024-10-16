import "./SideBar.css";
import profImage from "../../../assets/images/profile-image-placeholder.svg";
import HeaderProfImg from "../../HeaderProfImg/HeaderProfImg";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function SideBar(props) {
  const userData = useContext(CurrentUserContext);
  return (
    <div className="profile-sidebar">
      <HeaderProfImg
        mainClass={"profile-sidebar__image"}
        avatarMissingClass={"profile-sidebar__image_missing"}
        nameInitialClass={"profile-sidebar__name-initial"}
      />
      <p className="profile-sidebar__name">{userData.name}</p>
    </div>
  );
}

export default SideBar;
