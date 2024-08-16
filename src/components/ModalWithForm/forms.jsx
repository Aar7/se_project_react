const Forms = [
  <>
    <label className="modal__label">Name</label>
    <input className="modal__input" placeholder="Name" type="text" />

    <label className="modal__label">Image</label>
    <input className="modal__input" placeholder="Image URL" type="url" />

    <h2 className="modal__form-title modal__header">Select weather type</h2>
    <div className="modal__radio-wrapper">
      <input
        className="modal__input modal__input_radio"
        id="hot"
        type="radio"
        value="Hot"
        name="weather"
      />
      <label className="modal__label" htmlFor="hot">
        Hot
      </label>
    </div>
    <div className="modal__radio-wrapper">
      <input
        className="modal__input modal__input_radio"
        id="warm"
        type="radio"
        value="Warm"
        name="weather"
      />
      <label className="modal__label" htmlFor="warm">
        Warm
      </label>
    </div>
    <div className="modal__radio-wrapper">
      <input
        className="modal__input modal__input_radio"
        id="cold"
        type="radio"
        value="Cold"
        name="weather"
      />
      <label className="modal__label" htmlFor="cold">
        Cold
      </label>
    </div>
  </>,
  <>
    <label className="modal__label">Label1</label>
    <input className="modal__input" placeholder="Input1" />
  </>,
];

export default Forms;
