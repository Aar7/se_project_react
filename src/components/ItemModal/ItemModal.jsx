import { useContext } from "react";
import "./ItemModal.css";
import { CardObjectContext } from "../../contexts/CardObjectContext";

function ItemModal(props) {
  const cardContext = useContext(CardObjectContext);
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
