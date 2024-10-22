import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

export function ItemCard(props) {
  const userData = useContext(CurrentUserContext);

  // const likeButtonClasses = "main__cards_listItem-like-button";
  let likeButtonClasses;
  // console.log("props.isLiked: ", props.isLiked);

  // const isLiked = this.likes.some((id) => id === currentUser._id);

  // // Create a variable which you then set in `className` for the like button
  // const itemLikeButtonClassName = `...`;

  const isLiked = props.itemLikes.some((userId) => userId === userData._id);
  // console.log(isLiked);
  isLiked
    ? (likeButtonClasses =
        "main__cards_listItem-like-button main__cards_listItem-like-button_liked")
    : (likeButtonClasses =
        "main__cards_listItem-like-button main__cards_listItem-like-button_not-liked");

  function handleLike() {
    props.onCardLike({ id: props.itemKey, isLiked: isLiked });
  }
  return (
    <li
      className="main__cards_listItem"
      onClick={(event) => {
        event.stopPropagation();
        props.handleCardClick(this, {
          _id: props.itemKey,
          link: props.itemLink,
          name: props.ItemName,
          weather: props.itemWeather,
          owner: props.itemOwner,
          likes: props.itemLikes,
        });
        props.setActiveModal("open-card");
      }}
    >
      <div className="main__cards_head">
        <p className="main__cards_listItem-title">{props.ItemName}</p>
        <button
          onClick={(event) => {
            event.stopPropagation();
            handleLike();
          }}
          // className="main__cards_listItem-like-button"
          className={`${likeButtonClasses}`}
          src="../../../src/assets/images/like-icon.svg"
        ></button>
      </div>
      <img
        className="main__cards_listItem-image"
        src={props.itemLink}
        alt={`An image of a/an ${props.ItemName}`}
      />
    </li>
  );
}

export default ItemCard;
