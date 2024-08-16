import "./ItemModal.css";
import sample from "../../assets/images/cap.svg";

function ItemModal(props) {
  return (
    <div
      className={props.itemModalClasslist}
      onClick={() => {
        props.onClose(props.itemModalClasslist, props.setItemModalClasslist);
      }}
    >
      <div
        className="item-modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          className="button item-modal__button-close"
          onClick={() => {
            props.onClose(
              props.itemModalClasslist,
              props.setItemModalClasslist
            );
          }}
        ></button>
        <img
          className="item-modal__item-image"
          // src={props.itemCardData[0].cardLink}
          src={props.itemCardLink}
          alt=""
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
