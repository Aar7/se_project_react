import { act, useEffect, useState } from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import "./App.css";
// OTHER IMPORTS
import defaultContent from "../utils/defaultContent.js";
import WeatherApi from "../utils/WeatherApi.js";
import { constants } from "../utils/constants.js";
import Forms from "./ModalWithForm/Forms.jsx";
// COMPONENT IMPORTS
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm.jsx";
import ItemModal from "./ItemModal/ItemModal.jsx";
import Profile from "./Profile/Profile.jsx";
import AddItemModal from "./AddItemModal/AddItemModal.jsx";

// CONTEXT IMPORTS
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { ClothingListContext } from "../contexts/ClothingListContext.js";

// APP START
function App() {
  // STATE DECLARATIONS
  // const [temperature, setTemperature] = useState(68);
  const [weatherData, setWeatherData] = useState({
    temperature: { F: 0, C: 0 },
  });
  const [clothingItems, setClothingItems] = useState(defaultContent);
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
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const weather = new WeatherApi(constants);

  // FUNCTION DECLARATIONS
  function requestWeatherData() {
    weather
      .fetchData()
      .then((res) => {
        // setTemperature(Math.round(res.main.temp));
        setWeatherData({
          temperature: {
            F: Math.round(res.main.temp),
            C: Math.round(((res.main.temp - 32) * 5) / 9),
          },
        });
        setCurrentLocation(res.name);
        setWeatherType(res.weather[0].main.toLowerCase());
      })
      .catch((error) => console.log(error));
  }

  function handleCloseModal(props) {
    setActiveModal("");
  }

  function handleCardClick(cardObject, itemData) {
    setItemCardLink.call(cardObject, itemData.link);
    setItemCardName.call(cardObject, itemData.name);
    setWeatherTemp.call(cardObject, itemData.weather);
  }

  function handleToggleSwitchChange() {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  }

  function handleAddItemSubmit(item) {
    weather.saveGarmentData();
    console.log(`clothingItems before stateChange:`);
    console.log(clothingItems);
    setClothingItems([item, ...clothingItems]);
    console.log(`clothingItems after stateChange:`);
    console.log(clothingItems);
  }

  // EFFECTS
  useEffect(requestWeatherData, []);
  useEffect(() => {
    if (!activeModal) return;

    function handlePressEsc(event) {
      // console.log(event);
      // console.log(`Pressed key: ${event.key}`);
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
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          date={currentDate}
          location={currentLocation}
          setActiveModal={setActiveModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weatherData}
                clothingItems={clothingItems}
                weatherType={weatherType}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                handleCardClick={handleCardClick}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ClothingListContext.Provider value={clothingItems}>
                <Profile
                  setActiveModal={setActiveModal}
                  handleCardClick={handleCardClick}
                />
              </ClothingListContext.Provider>
            }
          />
        </Routes>
        <Footer />
        {/* Modals ~ Modals ~ Modals ~ Modals ~ Modals ~ Modals ~ Modals */}
        <AddItemModal
          formTitle={"New Garment"}
          formName={"new-garment"}
          formButtonText={"Add Garment"}
          isOpen={activeModal === "add-garment"}
          onAddItem={handleAddItemSubmit}
          handleCloseModal={handleCloseModal}
          activeModal={activeModal}
          clothingItems={clothingItems}
        ></AddItemModal>
        <ItemModal
          weatherTemp={weatherTemp}
          itemCardLink={itemCardLink}
          itemCardName={itemCardName}
          activeModal={activeModal}
          handleCloseModal={handleCloseModal}
        />
      </CurrentTemperatureUnitContext.Provider>
    </>
  );
}

export default App;
