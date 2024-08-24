import { act, useEffect, useState } from "react";
import "./App.css";
import defaultContent from "../utils/defaultContent.js";
import WeatherApi from "../utils/weatherApi.js";
import { constants } from "../utils/constants.js";
import Forms from "./ModalWithForm/Forms.jsx";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm.jsx";
import ItemModal from "./ItemModal/ItemModal.jsx";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch.jsx";

function App() {
  const [temperature, setTemperature] = useState(68);
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleString("default", {
      month: "long",
      day: "numeric",
    })
  );
  const [currentLocation, setCurrentLocation] = useState("Earth");
  const [weatherType, setWeatherType] = useState("sunny");
  const [itemCardName, setItemCardName] = useState("Default Name");
  const [itemCardLink, setItemCardLink] = useState("Default Link");
  const [weatherTemp, setWeatherTemp] = useState("Default Temp");
  const [activeModal, setActiveModal] = useState("");

  const weather = new WeatherApi(constants);

  function requestWeatherData() {
    weather
      .fetchData()
      .then((res) => {
        setTemperature(Math.round(res.main.temp));
        // setTemperature(Math.round(50));
        setCurrentLocation(res.name);
        setWeatherType(res.weather[0].main.toLowerCase());
      })
      .catch((error) => console.log(error));
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  function handleCardClick(cardObject, itemData) {
    setItemCardLink.call(cardObject, itemData.link);
    setItemCardName.call(cardObject, itemData.name);
    setWeatherTemp.call(cardObject, itemData.weather);
  }

  useEffect(requestWeatherData, []);
  useEffect(() => {
    if (!activeModal) return;

    function handlePressEsc(event) {
      console.log(`Pressed key: ${event.key}`);
      if (event.key == "Escape") {
        setActiveModal("");
      }
    }

    document.addEventListener("keydown", handlePressEsc);

    return () => {
      document.removeEventListener("keydown", handlePressEsc);
    };
  }, [activeModal]);

  return (
    <>
      {/* <ToggleSwitch /> */}
      <Header
        date={currentDate}
        location={currentLocation}
        setActiveModal={setActiveModal}
      />
      <Main
        temp={temperature}
        defaultContent={defaultContent}
        weatherType={weatherType}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        handleCardClick={handleCardClick}
      />
      <Footer />
      <ModalWithForm
        formTitle={"New Garment"}
        formName={"new-garment"}
        formButtonText={"Add Garment"}
        handleCloseModal={handleCloseModal}
        isOpen={activeModal === "add-garment"}
      >
        {Forms[0]}
      </ModalWithForm>
      <ItemModal
        weatherTemp={weatherTemp}
        itemCardLink={itemCardLink}
        itemCardName={itemCardName}
        activeModal={activeModal}
        handleCloseModal={handleCloseModal}
      ></ItemModal>
    </>
  );
}

export default App;
