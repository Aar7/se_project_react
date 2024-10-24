import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Forms from "../ModalWithForm/Forms";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

// form id is edit-profile-info

function EditProfileModal(props) {
  const userData = useContext(CurrentUserContext);
  const { name, avatar } = userData;
  console.log("userData in Edit modal: ", userData);
  const [newNameInput, setNewNameInput] = useState("");
  const [newAvatarInput, setNewAvatarInput] = useState("");

  useEffect(() => {
    if (!props.activeModal) {
      document.getElementById("edit-profile-info").reset();
      // setNewNameInput("");
      // setNewAvatarInput("");
      setNewNameInput(name);
      setNewAvatarInput(avatar);
    }
  }, [props.activeModal]);

  // useEffect(() => {
  // }, []);

  function handleNewNameChange(event) {
    const inputValue = event.target.value;
    setNewNameInput(inputValue);
  }
  function handleNewAvatarChange(event) {
    const inputValue = event.target.value;
    setNewAvatarInput(inputValue);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if ((newNameInput || newAvatarInput) === false) {
      return alert("Please fill in all fields.");
    }
    props.onChangeInfo({
      name: newNameInput,
      avatar: newAvatarInput,
    });
    props.handleCloseModal();
  }

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
      <Forms
        index={3}
        newNameInput={newNameInput}
        newAvatarInput={newAvatarInput}
        onNameChange={handleNewNameChange}
        onAvatarChange={handleNewAvatarChange}
        currentName={userData.name}
        currentAvatar={userData.avatar}
      />
    </ModalWithForm>
  );
}

export default EditProfileModal;
