import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import "./App.css";
// OTHER IMPORTS
import defaultContent from "../utils/defaultContent.js";
import WeatherApi from "../utils/WeatherApi.js";
import GarmentsApi from "../utils/GarmentsApi.js";
import { constants } from "../utils/constants.js";
// import Forms from "./ModalWithForm/Forms.jsx";
// COMPONENT IMPORTS
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
// import ModalWithForm from "./ModalWithForm/ModalWithForm.jsx";
import ItemModal from "./ItemModal/ItemModal.jsx";
import Profile from "./Profile/Profile.jsx";
import AddItemModal from "./AddItemModal/AddItemModal.jsx";
import DeleteConfirmationModal from "./DeleteConfirmationModal/DeleteConfirmationModal.jsx";
import RegisterModal from "./RegisterModal/RegisterModal.jsx";
import LoginModal from "./LoginModal/LoginModal.jsx";

// CONTEXT IMPORTS
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { ClothingListContext } from "../contexts/ClothingListContext.js";
import { CardObjectContext } from "../contexts/CardObjectContext.js";

const weather = new WeatherApi(constants);
const garmentsApi = new GarmentsApi();

// APP START
function App() {
  const cardObject = useContext(CardObjectContext);

  // STATE DECLARATIONS
  const [weatherData, setWeatherData] = useState({
    temperature: { F: 0, C: 0 },
  });
  // const [clothingItems, setClothingItems] = useState(defaultContent);
  const [clothingItems, setClothingItems] = useState([
    {
      _id: "",
      name: "",
      imageUrl: "",
      weather: "",
    },
  ]);
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
  const [currentOpenCardObject, setCurrentOpenCardObject] = useState({
    _id: "",
    name: "",
    link: "",
    weather: "",
  });

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

  function handleCloseModal() {
    setActiveModal("");
  }

  function handleCardClick(cardObjectData, itemData) {
    setItemCardLink.call(cardObjectData, itemData.link);
    setItemCardName.call(cardObjectData, itemData.name);
    setWeatherTemp.call(cardObjectData, itemData.weather);
    setCurrentOpenCardObject.call(cardObjectData, {
      _id: itemData._id,
      name: itemData.name,
      imageUrl: itemData.link,
      weather: itemData.weather,
    });
  }

  function handleClickDelete() {
    setActiveModal("delete-garment");
  }

  function handleDeleteConfirm() {
    garmentsApi
      .deleteGarmentData(currentOpenCardObject._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter(function (garment) {
            return garment._id !== currentOpenCardObject._id;
          })
        );
      })
      .then((res) => {
        console.log(res);
        handleCloseModal();
      })
      .catch((error) => console.log(error));
  }

  function handleToggleSwitchChange() {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  }

  function handleAddItemSubmit(item) {
    garmentsApi
      .saveGarmentData(item)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => console.log(error));
  }

  function handleRegisterSubmit(registrationData) {
    // API call to create user
    const { email, password, name, avatar } = registrationData;
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Name: ${name}`);
    console.log(`Avatar URL: ${avatar}`);
  }

  function handleLoginSubmit(loginData) {
    // API call to login user
    const { email, password } = loginData;
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  }

  // EFFECTS
  useEffect(() => {
    requestWeatherData();
    garmentsApi
      .getGarmentData()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    function handlePressEsc(event) {
      if (event.key == "Escape") {
        handleCloseModal();
      }
    }

    document.addEventListener("keydown", handlePressEsc);

    return () => {
      document.removeEventListener("keydown", handlePressEsc);
    };
  }, [activeModal]);

  return (
    <CardObjectContext.Provider
      value={{ currentOpenCardObject, setCurrentOpenCardObject }}
    >
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          date={currentDate}
          location={currentLocation}
          setActiveModal={setActiveModal}
        />
        <ClothingListContext.Provider value={clothingItems}>
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
                <Profile
                  setActiveModal={setActiveModal}
                  handleCardClick={handleCardClick}
                />
              }
            />
          </Routes>
        </ClothingListContext.Provider>
        <Footer />
        {/* Modals ~ Modals ~ Modals ~ Modals ~ Modals ~ Modals ~ Modals */}
        {/* Modals ~ Modals ~ Modals ~ Modals ~ Modals ~ Modals ~ Modals */}
        {/* Modals ~ Modals ~ Modals ~ Modals ~ Modals ~ Modals ~ Modals */}
        <AddItemModal
          formTitle={"New Garment"}
          formName={"new-garment"}
          formButtonText={"Add Garment"}
          formId={"add-garment"}
          isOpen={activeModal === "add-garment"}
          onAddItem={handleAddItemSubmit}
          handleCloseModal={handleCloseModal}
          activeModal={activeModal}
          clothingItems={clothingItems}
        />
        <RegisterModal
          formTitle={"Sign Up"}
          formName={"register-user"}
          formButtonText={"Sign Up"}
          isOpen={activeModal === "register-user"}
          onRegister={handleRegisterSubmit}
          handleCloseModal={handleCloseModal}
          activeModal={activeModal}
        />
        <LoginModal
          formTitle={"Log in"}
          formName={"login-user"}
          formButtonText={"Log In"}
          isOpen={activeModal === "login-user"}
          onRegister={handleLoginSubmit}
          handleCloseModal={handleCloseModal}
          activeModal={activeModal}
        />
        <ItemModal
          weatherTemp={weatherTemp}
          itemCardLink={itemCardLink}
          itemCardName={itemCardName}
          activeModal={activeModal}
          handleCloseModal={handleCloseModal}
          onClickDelete={handleClickDelete}
        />
        <DeleteConfirmationModal
          isOpen={activeModal === "delete-garment"}
          handleCloseModal={handleCloseModal}
          handleDeleteConfirm={handleDeleteConfirm}
        />
      </CurrentTemperatureUnitContext.Provider>
    </CardObjectContext.Provider>
  );
}

export default App;
