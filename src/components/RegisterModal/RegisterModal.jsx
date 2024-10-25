import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

function RegisterModal(props) {
  const { values, setValues, handleChange } = useForm({});

  function handleSubmit(event) {
    event.preventDefault();
    const { name, avatarUrl, email, password } = values;

    console.log(email == false);
    console.log(password == false);
    console.log(name == false);
    console.log(avatarUrl == false);

    if ((email || password || name || avatarUrl) == false) {
      return alert("Please fill in all fields.");
    }

    props.onRegister({
      name: name,
      avatar: avatarUrl,
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
      formId={"register-user"}
    >
      <label className="modal__label" htmlFor="email">
        Email *
      </label>
      <input
        className="modal__input"
        id="email"
        name="email"
        placeholder="Email"
        type="email"
        value={values.email || ""}
        onChange={(event) => handleChange(event)}
        required
      />
      <label className="modal__label" htmlFor="password">
        Password *
      </label>
      <input
        className="modal__input"
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        value={values.password || ""}
        onChange={(event) => handleChange(event)}
        required
      />
      <label className="modal__label" htmlFor="name">
        Name
      </label>
      <input
        className="modal__input"
        id="name"
        name="name"
        placeholder="Name"
        type="text"
        value={values.name || ""}
        onChange={(event) => handleChange(event)}
      />
      <label className="modal__label" htmlFor="avatarUrl">
        Avatar URL
      </label>
      <input
        className="modal__input"
        id="avatarUrl"
        name="avatarUrl"
        placeholder="Avatar URL"
        type="url"
        value={values.avatarUrl || ""}
        onChange={(event) => handleChange(event)}
      />
      <button
        className="button modal__altroute_button modal__orlogin"
        type="button"
        onClick={() => props.handleChangeAuthMethod("login-user")}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
