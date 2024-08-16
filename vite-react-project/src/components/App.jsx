import { useEffect, useState } from "react";
import "./App.css";
import defaultContent from "../utils/defaultContent.js";
import WeatherApi from "../utils/weatherApi.js";
import { constants } from "../utils/constants.js";
import forms from "./ModalWithForm/forms.jsx";
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
  const [formModalClasslist, setFormModalClasslist] =
    useState("modal__wrapper");
  const [itemModalClasslist, setItemModalClasslist] =
    useState("modal__wrapper");
  const [weatherType, setWeatherType] = useState("sunny");
  const [clothing, setClothing] = useState(defaultContent);
  const [itemCardName, setItemCardName] = useState("Default Name");
  const [itemCardLink, setItemCardLink] = useState("Default Link");
  const [weatherTemp, setWeatherTemp] = useState("Default Temp");

  const weather = new WeatherApi(constants);

  weather.fetchData().then((res) => {
    setTemperature(Math.round(res.main.temp));
    // setTemperature(Math.round(50));
    setCurrentLocation(res.name);
    setWeatherType(res.weather[0].main.toLowerCase());
  });

  function handleOpenModal(classlist, setterFn) {
    setterFn(classlist.concat(" modal__opened"));
    document.addEventListener("keydown", handlePressEsc);
    console.log("Open modal called");
  }

  function handleCloseModal(classlist, setterFn) {
    document.removeEventListener("keydown", handlePressEsc);
    setterFn(classlist.replace(" modal__opened", ""));
    console.log("Close modal called");
    setItemCardLink("");
    setItemCardName("");
  }

  function handlePressEsc(event, classlist, setterFn) {
    if (event.key === "Escape") {
      handleCloseModal(itemModalClasslist, setItemModalClasslist);
      handleCloseModal(formModalClasslist, setFormModalClasslist);
    }
    console.log("PressEscape called");
  }

  function testForDomEvent() {
    console.log("TEST FUNCTION RUN");
  }
  // console.log(formModalClasslist);
  // console.log(forms);
  // console.log(itemCardData);
  return (
    <>
      <Header
        date={currentDate}
        location={currentLocation}
        onOpen={handleOpenModal}
        formModalClasslist={formModalClasslist}
        setFormModalClasslist={setFormModalClasslist}
      />
      <Main
        temp={temperature}
        defaultContent={clothing}
        weatherType={weatherType}
        onOpen={handleOpenModal}
        itemModalClasslist={itemModalClasslist}
        setItemModalClasslist={setItemModalClasslist}
        weatherTemp={weatherTemp}
        setWeatherTemp={setWeatherTemp}
        setItemCardLink={setItemCardLink}
        itemCardLink={itemCardLink}
        setItemCardName={setItemCardName}
        itemCardName={itemCardName}
      />
      <Footer />
      <ModalWithForm
        formTitle={"Form Title"}
        formName={"formName"}
        buttonText={"Submit Button"}
        formModalClasslist={formModalClasslist}
        onClose={handleCloseModal}
        setFormModalClasslist={setFormModalClasslist}
        handlePressEsc={handlePressEsc}
      >
        {forms[0]}
      </ModalWithForm>
      <ItemModal
        itemModalClasslist={itemModalClasslist} /* name={} weather={} */
        setItemModalClasslist={setItemModalClasslist}
        onClose={handleCloseModal}
        // weatherType={weatherType}
        weatherTemp={weatherTemp}
        setWeatherTemp={setWeatherTemp}
        itemCardLink={itemCardLink}
        setItemCardLink={setItemCardLink}
        itemCardName={itemCardName}
        setItemCardName={setItemCardName}
      ></ItemModal>
    </>
  );
}

export default App;
