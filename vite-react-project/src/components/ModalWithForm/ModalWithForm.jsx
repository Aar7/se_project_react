import "./ModalWithForm.css";

function ModalWithForm(props) {
  return (
    // <div className="modal__wrapper" onClick={props.onClose}>
    <div
      className={props.formModalClasslist}
      onClick={() => {
        props.onClose(props.setFormModalClasslist);
      }}
    >
      <div className={`modal modal_type_${props.formName}`}>
        <h2 className="modal__form-title">{props.formTitle}</h2>
        <button className="button modal__close-button"></button>
        <form className="modal__form" name={`${props.formName}`}>
          {props.children}
          <button className="button modal__submit-button">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
