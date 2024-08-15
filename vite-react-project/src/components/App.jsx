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
  const weather = new WeatherApi(constants);

  weather.fetchData().then((res) => {
    setTemperature(Math.round(res.main.temp));
    setCurrentLocation(res.name);
    setWeatherType(res.weather[0].main.toLowerCase());
  });

  function handleCloseModal(setterFn) {
    setterFn("modal__wrapper");
    console.log("Close modal called");
  }

  function handleOpenModal(classlist, setterFn) {
    setterFn(classlist.concat(" modal__opened"));
    console.log("Open modal called");
  }
  console.log(formModalClasslist);
  // console.log(forms);
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
        onOpen={handleOpenModal}
        weatherType={weatherType}
      />
      <Footer />
      <ModalWithForm
        formTitle={"Form Title"}
        formName={"formName"}
        buttonText={"Submit Button"}
        formModalClasslist={formModalClasslist}
        onClose={handleCloseModal}
        setFormModalClasslist={setFormModalClasslist}
      >
        {forms[0]}
      </ModalWithForm>
      <ItemModal
        itemModalClasslist={itemModalClasslist} /* name={} weather={} */
      ></ItemModal>
    </>
  );
}

export default App;
