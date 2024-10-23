function Forms(props) {
  switch (props.index) {
    case 0: {
      // Add new garment
      return (
        <>
          <label className="modal__label" htmlFor="userName">
            Name
          </label>
          <input
            className="modal__input"
            id="userName"
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
    case 1: {
      // Register new user
      return (
        <>
          <label className="modal__label" htmlFor="email">
            Email *
          </label>
          <input
            className="modal__input"
            id="email"
            placeholder="Email"
            type="email"
            value={props.emailInput}
            onChange={(event) => props.onEmailChange(event)}
            required
          />
          <label className="modal__label" htmlFor="password">
            Password *
          </label>
          <input
            className="modal__input"
            id="password"
            placeholder="Password"
            type="password"
            value={props.passwordInput}
            onChange={(event) => props.onPasswordChange(event)}
            required
          />
          <label className="modal__label" htmlFor="name">
            Name
          </label>
          <input
            className="modal__input"
            id="name"
            placeholder="Name"
            type="text"
            value={props.nameInput}
            onChange={(event) => props.onNameChange(event)}
          />
          <label className="modal__label" htmlFor="avatarUrl">
            Avatar URL
          </label>
          <input
            className="modal__input"
            id="avatarUrl"
            placeholder="Avatar URL"
            type="url"
            value={props.avatarUrlInput}
            onChange={(event) => props.onAvatarUrlChange(event)}
          />
          <button
            className="button modal__altroute_button modal__orlogin"
            type="button"
            onClick={() => props.handleChangeAuthMethod("login-user")}
          >
            or Log In
          </button>
        </>
      );
    }
    case 2: {
      // Log in existing user
      return (
        <>
          <label className="modal__label" htmlFor="email_login">
            Email
          </label>
          <input
            className="modal__input"
            id="email_login"
            placeholder="Email"
            type="email"
            value={props.loginEmailInput}
            onChange={(event) => props.onLoginEmailChange(event)}
            required
          />
          <label className="modal__label" htmlFor="password_login">
            Password
          </label>
          <input
            className="modal__input"
            id="password_login"
            placeholder="Password"
            type="password"
            value={props.loginPasswordInput}
            onChange={(event) => props.onLoginPasswordChange(event)}
            required
          />
          <button
            className="button modal__altroute_button modal__orsignup"
            type="button"
            onClick={() => props.handleChangeAuthMethod("register-user")}
          >
            or Sign Up
          </button>
        </>
      );
    }
    case 3: {
      // Change user profile data
      return (
        <>
          <label className="modal__label" htmlFor="new_name">
            Name *
          </label>
          <input
            className="modal__input"
            id="new_name"
            placeholder="New Name"
            type="text"
            value={props.newNameInput}
            onChange={(event) => props.onNameChange(event)}
            required
          />
          <label className="modal__label" htmlFor="new_avatar">
            Avatar *
          </label>
          <input
            className="modal__input"
            id="new_avatar"
            placeholder="New Avatar URL"
            type="url"
            value={props.newAvatarInput}
            onChange={(event) => props.onAvatarChange(event)}
            required
          />
        </>
      );
    }
  }
}

export default Forms;
