import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Forms from "../ModalWithForm/Forms";
import { useEffect, useState } from "react";

function AddItemModal(props) {
  const [garmentNameInput, setGarmentNameInput] = useState("garment-name");
  const [imageUrlInput, setImageUrl] = useState("garment-link");
  const [weatherTypeInput, setWeatherTypeInput] = useState("hot");

  useEffect(() => {
    if (!props.activeModal) {
      setGarmentNameInput("");
      setImageUrl("");
      setWeatherTypeInput("");
    }
  }, [props.activeModal]);

  function handleGarmentNameChange(event) {
    const inputValue = event.target.value;
    setGarmentNameInput(inputValue);
    // console.log(`Name inputValue: ${inputValue}`);
  }
  function handleImageUrlChange(event) {
    const inputValue = event.target.value;
    setImageUrl(inputValue);
    // console.log(`URL inputValue: ${inputValue}`);
  }
  function handleWeatherTypeChange(event) {
    const inputValue = event.target.value;
    setWeatherTypeInput(inputValue);
    // console.log(`Radio inputValue: ${inputValue}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // the following conditional may be removed when form validation is set up properly
    console.log(garmentNameInput == false);
    console.log(imageUrlInput == false);
    console.log(weatherTypeInput == false);
    if (garmentNameInput | imageUrlInput | (weatherTypeInput == false)) {
      return alert("Please fill in all fields.");
    }
    props.onAddItem({
      _id: "",
      name: garmentNameInput,
      weather: weatherTypeInput,
      imageUrl: imageUrlInput,
    });
  }

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
      <Forms
        index={0}
        garmentNameInput={garmentNameInput}
        imageUrlInput={imageUrlInput}
        weatherTypeInput={weatherTypeInput}
        onGarmentNameChange={handleGarmentNameChange}
        onImageUrlChange={handleImageUrlChange}
        onWeatherTypeChange={handleWeatherTypeChange}
      />
    </ModalWithForm>
  );
}

export default AddItemModal;
