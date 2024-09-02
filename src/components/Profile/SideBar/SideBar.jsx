import "./SideBar.css";
import profImage from "../../../assets/images/profile-image-placeholder.svg";

function SideBar(props) {
  return (
    <div className="profile-sidebar">
      <img
        src={profImage}
        alt="User's profile image"
        className="profile-sidebar__image"
      />
      <p className="profile-sidebar__name">Name, Namerson</p>
    </div>
  );
}

export default SideBar;
