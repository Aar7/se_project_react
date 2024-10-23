import "./ClothesSection.css";
import { useContext, useEffect, useState } from "react";
// import defaultContent from "../../../utils/defaultContent";
import ItemCard from "../../Main/ItemCard/ItemCard";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { ClothingListContext } from "../../../contexts/ClothingListContext";

function ClothesSection(props) {
  // console.warn("ClothesSection re-rendered!");

  const clothingItems = useContext(ClothingListContext);
  const userData = useContext(CurrentUserContext);
  const [clothingArray, setClothingArray] = useState([]);

  useEffect(() => {
    const filteredClothingItems = clothingItems
      .filter((item) => userData._id === item.owner)
      .map((item) => {
        // if (userData._id === item.owner) {
        // console.log("item: ", item);
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
        // }
      });
    setClothingArray(filteredClothingItems);
  }, [clothingItems, userData._id]);

  // useEffect(() => {
  //   setClothingArray(filteredClothingItems);
  // }, [clothingItems]);

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
