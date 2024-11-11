import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

function AddItemModal(props) {
  const { values, setValues, handleChange } = useForm({});

  function handleSubmit(event) {
    event.preventDefault();
    const { name, weather, imageUrl } = values;
    // the following conditional may be removed when form validation is set up properly
    // console.log(name == false);
    // console.log(imageUrl == false);
    // console.log(weather == false);
    if (name | imageUrl | (weather == false)) {
      return alert("Please fill in all fields.");
    }
    props.onAddItem({
      _id: "",
      name: name,
      weather: weather,
      imageUrl: imageUrl,
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
      onCloseModal={props.handleCloseModal}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      formId={"add-garment"}
    >
      <label className="modal__label" htmlFor="userName">
        Name
      </label>
      <input
        className="modal__input"
        id="userName"
        name="name"
        placeholder="Name"
        type="text"
        value={values.name || ""}
        onChange={(event) => handleChange(event)}
        required
      />

      <label className="modal__label" htmlFor="imageLink">
        Image
      </label>
      <input
        className="modal__input"
        id="imageLink"
        name="imageUrl"
        placeholder="Image URL"
        type="url"
        value={values.imageUrl || ""}
        onChange={(event) => handleChange(event)}
        required
      />

      <fieldset className="modal__radio-buttons" required>
        <legend className="modal__form-title modal__header">
          Select weather type
        </legend>
        <label className="modal__label modal__label_type_radio" htmlFor="hot">
          <input
            className="modal__input_type_radio"
            id="hot"
            type="radio"
            value="hot"
            name="weather"
            checked={values.weather === "hot" || ""}
            onChange={(event) => handleChange(event)}
            required
          />
          Hot
        </label>

        <label className="modal__label modal__label_type_radio" htmlFor="warm">
          <input
            className="modal__input_type_radio"
            id="warm"
            type="radio"
            value="warm"
            name="weather"
            checked={values.weather === "warm" || ""}
            onChange={(event) => handleChange(event)}
          />
          Warm
        </label>

        <label className="modal__label modal__label_type_radio" htmlFor="cold">
          <input
            className="modal__input_type_radio"
            id="cold"
            type="radio"
            value="cold"
            name="weather"
            checked={values.weather === "cold" || ""}
            onChange={(event) => handleChange(event)}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
