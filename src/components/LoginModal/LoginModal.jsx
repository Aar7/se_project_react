import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

function LoginModal(props) {
  const { values, setValues, handleChange } = useForm({});
  function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = values;
    // console.log(email == false);
    // console.log(password == false);

    if ((email || password) == false) {
      return alert("Please fill in all fields.");
    }

    // console.log("Submitted form values: ", values);

    props.onLogin({
      email: email,
      password: password,
    });
  }

  useEffect(() => {
    if (!props.activeModal) {
      setValues({});
    }
  }, [props.activeModal]);
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
      <label className="modal__label" htmlFor="email_login">
        Email
      </label>
      <input
        className="modal__input"
        id="email_login"
        name="email"
        placeholder="Email"
        type="email"
        value={values.email || ""}
        onChange={(event) => handleChange(event)}
        required
      />
      <label className="modal__label" htmlFor="password_login">
        Password
      </label>
      <input
        className="modal__input"
        id="password_login"
        name="password"
        placeholder="Password"
        type="password"
        value={values.password || ""}
        onChange={(event) => handleChange(event)}
        required
      />
      <button
        className="button modal__altroute_button modal__orsignup"
        type="button"
        onClick={() => props.handleChangeAuthMethod("register-user")}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
}
export default LoginModal;
