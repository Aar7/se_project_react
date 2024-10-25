import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";

function EditProfileModal(props) {
  const { values, setValues, handleChange } = useForm({});
  const userData = useContext(CurrentUserContext);
  const { name, avatar } = userData;

  function handleSubmit(event) {
    event.preventDefault();
    const { name, avatar } = values;

    if ((name || avatar) === false) {
      return alert("Please fill in all fields.");
    }
    props.onChangeInfo({
      name: name,
      avatar: avatar,
    });
  }
  useEffect(() => {
    if (!props.activeModal) {
      setValues({ name: name, avatar: avatar });
    }
  }, [props.activeModal]);

  return (
    <ModalWithForm
      formTitle={props.formTitle}
      formName={props.formName}
      formButtonText={props.formButtonText}
      onCloseModal={props.handleCloseModal}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      formId={"edit-profile-info"}
    >
      <label className="modal__label" htmlFor="new_name">
        Name *
      </label>
      <input
        className="modal__input"
        id="new_name"
        name="name"
        placeholder="New Name"
        type="text"
        value={values.name || ""}
        onChange={(event) => handleChange(event)}
        required
      />
      <label className="modal__label" htmlFor="new_avatar">
        Avatar *
      </label>
      <input
        className="modal__input"
        id="new_avatar"
        name="avatar"
        placeholder="New Avatar URL"
        type="url"
        value={values.avatar || ""}
        onChange={(event) => handleChange(event)}
        required
      />
    </ModalWithForm>
  );
}

export default EditProfileModal;
