import { useContext, useEffect } from "react";
import "./ItemModal.css";
import { CardObjectContext } from "../../contexts/CardObjectContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal(props) {
  const userData = useContext(CurrentUserContext);
  const { currentOpenCardObject } = useContext(CardObjectContext);

  // Checking if the current user is the owner of the current clothing item
  // console.log(
  //   "cardContext.currentOpenCardObject.owner",
  //   cardContext.currentOpenCardObject.owner
  // );
  // console.log("userData._id", userData._id);

  const isOwn = currentOpenCardObject?.owner === userData._id;
  // console.log(cardContext.currentOpenCardObject);
  console.log(currentOpenCardObject.owner);
  console.log(userData._id);
  // console.log(isOwn);

  // console.log(`isOwn: ${isOwn}`);
  const itemDeleteButtonClassName = `modal-button ${
    isOwn
      ? "modal-button__delete-button_visible"
      : "modal-button__delete-button_hidden"
  }`;
  useEffect(() => {
    props.setDeleteConfirmClass(itemDeleteButtonClassName);
  }, [isOwn]);

  // props.setDeleteConfirmClass(itemDeleteButtonClassName);
  return (
    <div
      className={`modal__wrapper ${
        props.activeModal == "open-card" ? "modal_opened" : ""
      }`}
      onClick={() => {
        props.handleCloseModal();
      }}
    >
      <div
        className="item-modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          type="button"
          className="button item-modal__button-close"
          onClick={() => {
            props.handleCloseModal();
          }}
        ></button>
        <img
          className="item-modal__item-image"
          src={props.itemCardLink}
          alt={`An image of a/an ${props.itemCardName}`}
        />
        <div
          className="item-modal__item-weather-desc"
          onClick={(event) => event.stopPropagation()}
          // onClick={(event) => event.stopImmediatePropagation()}
        >
          <p className="item-modal__item-desc">{props.itemCardName}</p>
          <p className="item-modal__weather-desc">{`Weather: ${props.weatherTemp}`}</p>
          <button
            type="button"
            className="item-modal__delete-item"
            onClick={() => {
              props.onClickDelete();
            }}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
