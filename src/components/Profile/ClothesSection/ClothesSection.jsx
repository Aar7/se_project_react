import "./ClothesSection.css";
import { useContext } from "react";
// import defaultContent from "../../../utils/defaultContent";
import ItemCard from "../../Main/ItemCard/ItemCard";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function ClothesSection(props) {
  const userData = useContext(CurrentUserContext);
  console.log(props.clothingItems);

  const clothingArray = props.clothingItems.map((item) => {
    if (userData._id === item.owner) {
      console.log("item: ", item);
      return (
        <ItemCard
          key={item._id}
          itemKey={item._id}
          itemLink={item.imageUrl}
          // ItemName goes against convention to satisfy automated tests
          //  Tests are flagging it as a component for some reason...
          ItemName={item.name}
          itemWeather={item.weather}
          itemOwner={item.owner}
          itemLikes={item.likes}
          setActiveModal={props.setActiveModal}
          handleCardClick={props.handleCardClick}
          onCardLike={props.onCardLike}
          isLoggedIn={props.isLoggedIn}
        />
      );
    }
  });
  // const clothingArray = defaultContent.map((item) => {
  //   return (
  //     <ItemCard
  //       key={item._id}
  //       itemLink={item.link}
  //       // ItemName goes against convention to satisfy automated tests
  //       //  Tests are flagging it as a component for some reason...
  //       ItemName={item.name}
  //       itemWeather={item.weather}
  //       setActiveModal={props.setActiveModal}
  //       handleCardClick={props.handleCardClick}
  //     />
  //   );
  // });
  return (
    <div className="profile-clothing">
      <div className="profile-clothing__wrap">
        <p className="profile-clothing__info">Your items</p>
        <button
          className="profile-clothing__add-new"
          type="button"
          onClick={() => {
            props.setActiveModal("add-garment");
          }}
        >
          + Add New
        </button>
      </div>
      <ul className="profile-clothing__items">{clothingArray}</ul>
    </div>
  );
}

export default ClothesSection;
