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
            value={props.garmentNameInput}
            onChange={(event) => props.onGarmentNameChange(event)}
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
            value={props.imageUrlInput}
            onChange={(event) => props.onImageUrlChange(event)}
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
                value="hot"
                name="weather"
                checked={props.weatherTypeInput === "hot"}
                onChange={(event) => props.onWeatherTypeChange(event)}
                required
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
                value="warm"
                name="weather"
                checked={props.weatherTypeInput === "warm"}
                onChange={(event) => props.onWeatherTypeChange(event)}
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
                value="cold"
                name="weather"
                checked={props.weatherTypeInput === "cold"}
                onChange={(event) => props.onWeatherTypeChange(event)}
              />
              Cold
            </label>
          </fieldset>
        </>
      );
    }
  }
}

export default Forms;
