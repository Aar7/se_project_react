import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Forms from "../ModalWithForm/Forms";
import { useEffect, useState, useRef } from "react";

function AddItemModal(props) {
  // declare state for each input field
  const [garmentNameInput, setGarmentNameInput] = useState("garment-name");
  const [imageUrlInput, setImageUrl] = useState("garment-link");
  const [weatherTypeInput, setWeatherTypeInput] = useState("weather-type");

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  useEffect(() => {
    if (!props.activeModal) {
      // resetFormFields();
      document.getElementById("add-garment").reset();
      // setGarmentNameInput(null);
      // setImageUrl(null);
      // setWeatherTypeInput(null);
      setGarmentNameInput("");
      setImageUrl("");
      setWeatherTypeInput("");
    }
  }, [props.activeModal]);

  // create onChange handlers corresponding to each state variable
  function handleGarmentNameChange(event) {
    const inputValue = event.target.value;
    setGarmentNameInput(inputValue);
    console.log(`Name inputValue: ${inputValue}`);
  }
  function handleImageUrlChange(event) {
    const inputValue = event.target.value;
    setImageUrl(inputValue);
    console.log(`URL inputValue: ${inputValue}`);
  }
  function handleWeatherTypeChange(event) {
    const inputValue = event.target.value;
    setWeatherTypeInput(inputValue);
    console.log(`Radio inputValue: ${inputValue}`);
  }

  function handleSubmit(event) {
    // prevent default behavior
    // call onAddItem with appropriate arguments
    event.preventDefault();
    // the following conditional may be removed when form validation is set up properly
    // console.log(garmentNameInput, imageUrlInput, weatherTypeInput);
    console.log(garmentNameInput == false);
    console.log(imageUrlInput == false);
    console.log(weatherTypeInput == false);
    if (garmentNameInput | imageUrlInput | (weatherTypeInput == false)) {
      return alert("Please fill in all fields.");
    }
    props.onAddItem({
      // _id: props.clothingItems.length,
      _id: "",
      name: garmentNameInput,
      imageUrl: imageUrlInput,
      weather: weatherTypeInput.toLowerCase(),
    });
    // resetState();
    // props.handleCloseModal();
  }

  return (
    <ModalWithForm
      formTitle={props.formTitle}
      formName={props.formName}
      formButtonText={props.formButtonText}
      onCloseModal={props.handleCloseModal}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <Forms
        index={0}
        onGarmentNameChange={handleGarmentNameChange}
        onImageUrlChange={handleImageUrlChange}
        onWeatherTypeChange={handleWeatherTypeChange}
      />
    </ModalWithForm>
  );
}

export default AddItemModal;
