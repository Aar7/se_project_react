function Forms(props) {
  switch (props.index) {
    case 0: {
      return (
        <>
          <label className="modal__label" htmlFor="name">
            Name
          </label>
          <input
            className="modal__input"
            id="name"
            placeholder="Name"
            type="text"
            // onInput={(event) => props.onGarmentNameChange(event)}
            onChange={(event) => props.onGarmentNameChange(event)}
            onPaste={(event) => props.onGarmentNameChange(event)}
            required
          />

          <label className="modal__label" htmlFor="imageLink">
            Image
          </label>
          <input
            className="modal__input"
            id="imageLink"
            placeholder="Image URL"
            type="url"
            // onInput={(event) => props.onGarmentNameChange(event)}
            // onChange={(event) => props.onImageUrlChange(event)}
            // onPaste={(event) => props.onImageUrlChange(event)}
            onKeyUp={(event) => props.onImageUrlChange(event)}
            required
          />

          <fieldset className="modal__radio-buttons" required>
            <legend className="modal__form-title modal__header">
              Select weather type
            </legend>
            <label
              className="modal__label modal__label_type_radio"
              htmlFor="hot"
            >
              <input
                className="modal__input_type_radio"
                id="hot"
                type="radio"
                value="Hot"
                name="weather"
                // onInput={(event) => props.onGarmentNameChange(event)}
                // onChange={(event) => props.onWeatherTypeChange(event)}
                onClick={(event) => props.onWeatherTypeChange(event)}
              />
              Hot
            </label>

            <label
              className="modal__label modal__label_type_radio"
              htmlFor="warm"
            >
              <input
                className="modal__input_type_radio"
                id="warm"
                type="radio"
                value="Warm"
                name="weather"
                // onInput={(event) => props.onGarmentNameChange(event)}
                // onChange={(event) => props.onWeatherTypeChange(event)}
                onClick={(event) => props.onWeatherTypeChange(event)}
              />
              Warm
            </label>

            <label
              className="modal__label modal__label_type_radio"
              htmlFor="cold"
            >
              <input
                className="modal__input_type_radio"
                id="cold"
                type="radio"
                value="Cold"
                name="weather"
                // onInput={(event) => props.onGarmentNameChange(event)}
                // onChange={(event) => props.onWeatherTypeChange(event)}
                onClick={(event) => props.onWeatherTypeChange(event)}
              />
              Cold
            </label>
          </fieldset>
        </>
      );
    }
  }
}

// const Forms = [
//   <>
//     <label className="modal__label" htmlFor="name">
//       Name
//     </label>
//     <input className="modal__input" id="name" placeholder="Name" type="text" />

//     <label className="modal__label" htmlFor="imageLink">
//       Image
//     </label>
//     <input
//       className="modal__input"
//       id="imageLink"
//       placeholder="Image URL"
//       type="url"
//     />

//     <fieldset className="modal__radio-buttons">
//       <legend className="modal__form-title modal__header">
//         Select weather type
//       </legend>
//       <label className="modal__label modal__label_type_radio" htmlFor="hot">
//         <input
//           className=" modal__input_type_radio"
//           id="hot"
//           type="radio"
//           value="Hot"
//           name="weather"
//         />
//         Hot
//       </label>

//       <label className="modal__label modal__label_type_radio" htmlFor="warm">
//         <input
//           className=" modal__input_type_radio"
//           id="warm"
//           type="radio"
//           value="Warm"
//           name="weather"
//         />
//         Warm
//       </label>

//       <label className="modal__label modal__label_type_radio" htmlFor="cold">
//         <input
//           className=" modal__input_type_radio"
//           id="cold"
//           type="radio"
//           value="Cold"
//           name="weather"
//         />
//         Cold
//       </label>
//     </fieldset>
//   </>,
// ];

export default Forms;
