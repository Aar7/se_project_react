import "./ItemModal.css";
import sample from "../../assets/images/cap.svg";

function ItemModal(props) {
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
        <div className="item-modal__item-weather-desc">
          <p className="item-modal__item-desc">{props.itemCardName}</p>
          <p className="item-modal__weather-desc">{`Weather: ${props.weatherTemp}`}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
