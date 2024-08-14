import { useEffect, useState } from "react";
import "./App.css";
import defaultContent from "../utils/defaultContent.js";
import WeatherApi from "../utils/weatherApi.js";
import { constants } from "../utils/constants.js";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm.jsx";

function App() {
  const [temperature, setTemperature] = useState(68);
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleString("default", {
      month: "long",
      day: "numeric",
    })
  );
  const [currentLocation, setCurrentLocation] = useState("Earth");
  const [wrapperClasslist, setWrapperClasslist] = useState(["modal__wrapper"]);
  const [weatherType, setWeatherType] = useState("sunny");
  const [clothing, setClothing] = useState(defaultContent);
  const weather = new WeatherApi(constants);

  weather.fetchData().then((res) => {
    setTemperature(res.main.temp);
    setCurrentLocation(res.name);
    setWeatherType(res.weather[0].main.toLowerCase());
  });

  function handleCloseModal() {
    setWrapperClasslist(["modal__wrapper"]);
    console.log("Close modal called");
  }

  function handleOpenModal() {
    setWrapperClasslist([...wrapperClasslist, "modal__opened"]);
    console.log("Open modal called");
  }
  return (
    <>
      <Header date={currentDate} location={currentLocation} />
      <Main
        temp={temperature}
        defaultContent={clothing}
        onOpen={handleOpenModal}
        weatherType={weatherType}
      />
      <Footer />
      <ModalWithForm
        formTitle={"Form Title"}
        formName={"formName"}
        buttonText={"Submit Button"}
        wrapperClasslist={wrapperClasslist}
        onClose={handleCloseModal}
      >
        <label className="modal__label">Label1</label>
        <input className="modal__input" placeholder="Input1"></input>
      </ModalWithForm>
    </>
  );
}

export default App;
