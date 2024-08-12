import { useState } from "react";
import "./App.css";
import defaultContent from "../utils/defaultContent.js";
import WeatherApi from "../utils/weatherApi.js";
import { constants } from "../utils/constants.js";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  const [temperature, setTemperature] = useState(0);
  const weather = new WeatherApi(constants);

  weather.fetchData().then((res) => {
    setTemperature(res.main.temp);
  });
  return (
    <>
      <Header />
      <Main temp={temperature} defaultContent={defaultContent} />
      <Footer />
    </>
  );
}

export default App;
