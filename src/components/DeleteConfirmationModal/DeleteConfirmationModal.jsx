import { useContext, useEffect } from "react";
import "./DeleteConfirmationModal.css";
import { CardObjectContext } from "../../contexts/CardObjectContext";

function DeleteItemModal(props) {
  const cardContext = useContext(CardObjectContext);
  // let
  // useEffect(() => {

  // })
  return (
    <div
      // id="delete-item"
      className={`modal__wrapper ${props.isOpen ? "modal_opened" : ""}`}
      onClick={() => {
        props.handleCloseModal();
      }}
    >
      <div
        className="delete-item-wrapper"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <p className="delete-item-wrapper__info">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <button
          type="button"
          className="delete-item__close-button"
          onClick={() => {
            props.handleCloseModal();
          }}
        ></button>
        <button
          type="button"
          className="modal-button delete-item-wrapper__confirm"
          onClick={() => {
            console.log(`cardcontext Id`);
            console.log(cardContext._id);
            props.handleDeleteConfirm(cardContext._id);
            props.handleCloseModal();
          }}
        >
          Yes, delete item
        </button>
        <button
          type="button"
          className="modal-button delete-item-wrapper__cancel"
          onClick={() => {
            props.handleCloseModal();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteItemModal;
