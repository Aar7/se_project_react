import "./Profile.css";
import ClothesSection from "./ClothesSection/ClothesSection";
import SideBar from "./SideBar/SideBar";
import { useContext } from "react";
import { ClothingListContext } from "../../contexts/ClothingListContext";
// import { ClothingListContext } from "../../contexts/ClothingListContext";

function Profile(props) {
  const clothingItems = useContext(ClothingListContext);
  return (
    <div className="profile-main">
      <SideBar
        handleClickChangeProfileData={props.handleClickChangeProfileData}
      />
      <ClothesSection
        clothingItems={clothingItems}
        setActiveModal={props.setActiveModal}
        handleCardClick={props.handleCardClick}
        onCardLike={props.onCardLike}
      />
    </div>
  );
}

export default Profile;
