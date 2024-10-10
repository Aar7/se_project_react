import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Forms from "../ModalWithForm/Forms";
import { useEffect, useState } from "react";

function RegisterModal(props) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [avatarUrlInput, setAvatarUrlInput] = useState("");
  useEffect(() => {
    if (!props.activeModal) {
      document.getElementById("register-user").reset();
      setEmailInput("");
      setPasswordInput("");
      setNameInput("");
      setAvatarUrlInput("");
    }
  }, [props.activeModal]);

  function handleEmailChange(event) {
    const inputValue = event.target.value;
    setEmailInput(inputValue);
    console.log(`Email inputValue: ${inputValue}`);
  }
  function handlePasswordChange(event) {
    const inputValue = event.target.value;
    setPasswordInput(inputValue);
    console.log(`Password inputValue: ${inputValue}`);
  }
  function handleNameChange(event) {
    const inputValue = event.target.value;
    setNameInput(inputValue);
    console.log(`Name inputValue: ${inputValue}`);
  }
  function handleAvatarUrlChange(event) {
    const inputValue = event.target.value;
    setAvatarUrlInput(inputValue);
    console.log(`Avatar URL inputValue: ${inputValue}`);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(emailInput == false);
    console.log(passwordInput == false);
    console.log(nameInput == false);
    console.log(avatarUrlInput == false);

    if ((emailInput || passwordInput || nameInput || avatarUrlInput) == false) {
      return alert("Please fill in all fields.");
    }

    props.onRegister({
      name: nameInput,
      avatar: avatarUrlInput,
      email: emailInput,
      password: passwordInput,
    });
  }

  return (
    <ModalWithForm
      formTitle={props.formTitle}
      formName={props.formName}
      formButtonText={props.formButtonText}
      isOpen={props.isOpen}
      onCloseModal={props.handleCloseModal}
      onSubmit={handleSubmit}
      formId={"register-user"}
    >
      <Forms
        index={1}
        emailInput={emailInput}
        passwordInput={passwordInput}
        nameInput={nameInput}
        avatarUrlInput={avatarUrlInput}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onNameChange={handleNameChange}
        onAvatarUrlChange={handleAvatarUrlChange}
      />
    </ModalWithForm>
  );
}

export default RegisterModal;
