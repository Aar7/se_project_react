import "./ModalWithForm.css";

function ModalWithForm(props) {
  return (
    <div
      className={`modal__wrapper ${props.isOpen ? "modal_opened" : ""}`}
      onClick={(event) => {
        props.handleCloseModal();
      }}
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={`modal modal_type_${props.formName}`}
      >
        <h2 className="modal__form-title">{props.formTitle}</h2>
        <button
          className="button modal__close-button"
          onClick={(event) => {
            props.handleCloseModal();
          }}
        ></button>
        <form className="modal__form" name={`${props.formName}`}>
          {props.children}
          <button
            className="button modal__submit-button"
            onClick={(event) => {
              event.preventDefault();
              props.handleCloseModal();
            }}
          >
            {props.formButtonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
