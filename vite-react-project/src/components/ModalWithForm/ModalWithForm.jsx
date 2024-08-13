import "./ModalWithForm.css";

function ModalWithForm(props) {
  return (
    // <div className="modal__wrapper" onClick={props.onClose}>
    <div className={props.wrapperClasslist} onClick={props.onClose}>
      <div className={`modal modal_type_${props.formName}`}>
        <h2 className="modal__form-title">{props.formTitle}</h2>
        <button className="button modal__close-button"></button>
        <form className="modal__form" name={`${props.formName}`}>
          {/* <label className="modal__label">Label1</label>
          <input className="modal__input" placeholder="Input1"></input> */}
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
