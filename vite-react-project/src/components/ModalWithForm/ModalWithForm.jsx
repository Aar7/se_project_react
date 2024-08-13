import "./ModalWithForm.css";

function ModalWithForm({ formTitle, formName, buttonText, onClose }) {
  return (
    <div className={`modal modal_type_${formName}`}>
      <h2 className="modal__form-title">{formTitle}</h2>
      <button className="button modal__close-button">Close Button</button>
      <form className="modal__form" name={`${formName}`}>
        <label className="modal__label">
          Label1
          <input className="modal__input" placeholder="Input1"></input>
        </label>
        <button className="modal__submit-button">{buttonText}</button>
      </form>
    </div>
  );
}

export default ModalWithForm;
