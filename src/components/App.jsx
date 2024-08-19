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
  const [formTitle, setFormTitle] = useState("formTitle");
  const [formName, setFormName] = useState("formName");
  const [formButtonText, setFormButtonText] = useState("formButtonText");

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
      <Header
        date={currentDate}
        location={currentLocation}
        setActiveModal={setActiveModal}
      />
      <Main
        temp={temperature}
        defaultContent={defaultContent}
        weatherType={weatherType}
        weatherTemp={weatherTemp}
        setWeatherTemp={setWeatherTemp}
        setItemCardLink={setItemCardLink}
        itemCardLink={itemCardLink}
        setItemCardName={setItemCardName}
        itemCardName={itemCardName}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        setFormTitle={setFormTitle}
        setFormName={setFormName}
        setFormButtonText={setFormButtonText}
      />
      <Footer />
      <ModalWithForm
        formTitle={formTitle}
        formName={formName}
        formButtonText={formButtonText}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        isOpen={activeModal === "add-clothing"}
      >
        {Forms[0]}
      </ModalWithForm>
      <ItemModal
        weatherTemp={weatherTemp}
        setWeatherTemp={setWeatherTemp}
        itemCardLink={itemCardLink}
        setItemCardLink={setItemCardLink}
        itemCardName={itemCardName}
        setItemCardName={setItemCardName}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      ></ItemModal>
    </>
  );
}

export default App;
