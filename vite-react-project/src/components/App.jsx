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
  const [temperature, setTemperature] = useState(0);
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleString("default", {
      month: "long",
      day: "numeric",
    })
  );
  const [currentLocation, setCurrentLocation] = useState("unknown");
  const weather = new WeatherApi(constants);

  weather.fetchData().then((res) => {
    setTemperature(res.main.temp);
    setCurrentLocation(res.name);
  });
  return (
    <>
      <Header date={currentDate} location={currentLocation} />
      <Main temp={temperature} defaultContent={defaultContent} />
      <Footer />
      {/* <ModalWithForm
        formTitle={"Form Title"}
        formName={"formName"}
        buttonText={"Submit Button"}
      /> */}
    </>
  );
}

export default App;
