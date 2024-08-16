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
          src={sample}
          alt=""
        />
        <div className="item-modal__item-weather-desc">
          <p className="item-modal__item-desc">
            {/* {props.itemCardData[0].cardName} */}
            Sample Clothing Item
          </p>
          <p className="item-modal__weather-desc">
            Weather: Sample weather type
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
