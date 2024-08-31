import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Forms from "../ModalWithForm/Forms";
import { useEffect, useState } from "react";

function AddItemModal(props) {
  // declare state for each input field
  const [garmentNameInput, setGarmentNameInput] = useState("garment-name");
  const [imageUrlInput, setImageUrl] = useState("garment-link");
  const [weatherTypeInput, setWeatherTypeInput] = useState("weather-type");
  // const [eventTargetValue, setEventTargetValue] = useState("");

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  useEffect(() => {
    if (!props.activeModal) {
      // resetFormFields();
      document.getElementById("add-garment").reset();
      setGarmentNameInput("");
      setImageUrl("");
      setWeatherTypeInput("");
    }
  }, [props.activeModal]);

  // function resetFormFields() {
  //   document.getElementById("add-garment").reset();
  // }

  // create onChange handlers corresponding to each state variable
  function handleGarmentNameChange(event) {
    const inputValue = event.target.value;
    console.log(`Name inputValue: ${inputValue}`);
    setGarmentNameInput(inputValue);
  }
  function handleImageUrlChange(event) {
    const inputValue = event.target.value;
    console.log(`URL inputValue: ${inputValue}`);
    setImageUrl(inputValue);
  }
  function handleWeatherTypeChange(event) {
    const inputValue = event.target.value;
    // inputValue = inputValue.toLowerCase();
    // console.log(inputValue.toLowerCase());
    // console.log(inputValue);
    console.log(`Radio inputValue: ${inputValue}`);
    setWeatherTypeInput(inputValue);

    // console.log(weatherTypeInput);
  }

  function handleSubmit(event) {
    // prevent default behavior
    // call onAddItem with appropriate arguments
    event.preventDefault();
    props.onAddItem({
      _id: props.clothingItems.length,
      name: garmentNameInput,
      imageUrl: imageUrlInput,
      weather: weatherTypeInput.toLowerCase(),
    });
    // resetState();
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
