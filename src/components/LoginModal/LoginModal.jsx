import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Forms from "../ModalWithForm/Forms";
import { useEffect, useState } from "react";

function LoginModal(props) {
  const [loginEmailInput, setLoginEmailInput] = useState("");
  const [loginPasswordInput, setLoginPasswordInput] = useState("");
  useEffect(() => {
    if (!props.activeModal) {
      document.getElementById("login-user").reset();
      setLoginEmailInput("");
      setLoginPasswordInput("");
    }
  }, [props.activeModal]);

  function handleEmailChange(event) {
    const inputValue = event.target.value;
    setLoginEmailInput(inputValue);
    // console.log(`Email inputValue: ${inputValue}`);
  }
  function handlePasswordChange(event) {
    const inputValue = event.target.value;
    setLoginPasswordInput(inputValue);
    // console.log(`Password inputValue: ${inputValue}`);
  }
  function handleSubmit(event) {
    event.preventDefault();

    console.log(loginEmailInput == false);
    console.log(loginPasswordInput == false);

    if ((loginEmailInput || loginPasswordInput) == false) {
      return alert("Please fill in all fields.");
    }

    props.onLogin({
      email: loginEmailInput,
      password: loginPasswordInput,
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
      formId={"login-user"}
    >
      <Forms
        index={2}
        loginEmailInput={loginEmailInput}
        loginPasswordInput={loginPasswordInput}
        onLoginEmailChange={handleEmailChange}
        onLoginPasswordChange={handlePasswordChange}
        handleChangeAuthMethod={props.handleChangeAuthMethod}
      />
    </ModalWithForm>
  );
}
export default LoginModal;
