import "./Profile.css";
import ClothesSection from "./ClothesSection/ClothesSection";
import SideBar from "./SideBar/SideBar";

function Profile(props) {
  return (
    <div className="profile-main">
      <SideBar />
      <ClothesSection
        setActiveModal={props.setActiveModal}
        handleCardClick={props.handleCardClick}
      />
    </div>
  );
}

export default Profile;
