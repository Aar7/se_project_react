import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import * as auth from "../utils/auth.js";
import { setToken, getToken } from "../utils/token.js";

// OTHER IMPORTS
import WeatherApi from "../utils/WeatherApi.js";
import GarmentsApi from "../utils/GarmentsApi.js";
import { constants } from "../utils/constants.js";

// COMPONENT IMPORTS
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ItemModal from "./ItemModal/ItemModal.jsx";
import Profile from "./Profile/Profile.jsx";
import AddItemModal from "./AddItemModal/AddItemModal.jsx";
import DeleteConfirmationModal from "./DeleteConfirmationModal/DeleteConfirmationModal.jsx";
import RegisterModal from "./RegisterModal/RegisterModal.jsx";
import LoginModal from "./LoginModal/LoginModal.jsx";
import EditProfileModal from "./EditProfileModal/EditProfileModal.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

// CONTEXT IMPORTS
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { ClothingListContext } from "../contexts/ClothingListContext.js";
import { CardObjectContext } from "../contexts/CardObjectContext.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

const weather = new WeatherApi(constants);
const garmentsApi = new GarmentsApi();

// APP START
function App() {
  // *** *** *** *** *** *** *** *** *** *** *** *
  // STATE DECs STATE DECs STATE DECs STATE DECs *
  // STATE DECs STATE DECs STATE DECs STATE DECs *
  // *** *** *** *** *** *** *** *** *** *** *** *
  const [weatherData, setWeatherData] = useState({
    temperature: { F: 0, C: 0 },
  });
  const [clothingItems, setClothingItems] = useState([
    /*     {
      _id: "",
      name: "",
      imageUrl: "",
      weather: "",
    }, */
  ]);
  // const [currentDate, setCurrentDate] = useState(
  //   new Date().toLocaleString("default", {
  //     month: "long",
  //     day: "numeric",
  //   })
  // );
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
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
    owner: "",
    likes: {},
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: "",
  });

  const navigate = useNavigate();

  // *** *** *** *** *** *** *** *** *** *** *
  // FN DECs FN DECs FN DECs FN DECs FN DECs *
  // FN DECs FN DECs FN DECs FN DECs FN DECs *
  // *** *** *** *** *** *** *** *** *** *** *
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

  async function handleCardClick(cardObjectData, itemData) {
    console.log("itemData: ", itemData);
    setItemCardLink.call(cardObjectData, itemData.link);
    setItemCardName.call(cardObjectData, itemData.name);
    setWeatherTemp.call(cardObjectData, itemData.weather);
    await setCurrentOpenCardObject.call(cardObjectData, {
      _id: itemData._id,
      name: itemData.name,
      imageUrl: itemData.link,
      weather: itemData.weather,
      owner: itemData.owner,
      likes: itemData.likes,
    });
    // console.log(currentOpenCardObject);
  }

  function handleClickDelete() {
    setActiveModal("delete-garment");
  }

  function handleClickChangeProfileData() {
    setActiveModal("edit-profile-info");
  }

  function handleCardLike({ id, isLiked }) {
    const token = getToken();

    !isLiked
      ? // api call to like card
        auth
          .addCardLike(id, token)
          .then((updatedCard) => {
            console.log("updatedCard from handleCardLike: ", updatedCard);
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard.data : item))
            );
          })
          .catch(auth.responseError)
      : // api call to dislike card
        auth
          .removeCardLike(id, token)
          .then((updatedCard) => {
            console.log("updatedCard from handleCardLike: ", updatedCard);
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard.data : item))
            );
          })
          .catch(auth.responseError);
  }

  function handleDeleteConfirm() {
    const token = getToken();
    garmentsApi
      .deleteGarmentData(currentOpenCardObject._id, token)
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

  async function handleAddItemSubmit(item) {
    const token = getToken();
    await garmentsApi
      .saveGarmentData(item, token)
      .then((res) => {
        setClothingItems([res.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => console.log(error));
  }

  function handleRegisterSubmit(registrationData) {
    // API call to create user
    console.log(`handleRegisterSubmit called`);
    // let name, email, avatar;

    auth
      .register(registrationData)
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        // setCurrentUser(res._id);
        return res;
      })
      .then((res) => {
        const { name, email, avatar } = res.data;
        setUserData({ name: name, email: email, avatar: avatar });
        setActiveModal("login-user");
        navigate("/login");
      })
      .then(handleCloseModal)
      .catch(auth.responseError);
  }

  async function handleLoginSubmit(loginData) {
    console.warn(`handleLoginSubmit called`);

    try {
      const res = await auth.login(loginData);
      console.log("Logging response from login attempt:", res);
      const { name, email, avatar, token, _id } = res;
      setToken(token);
      setIsLoggedIn(true);
      setUserData({
        name: name,
        email: email,
        avatar: avatar,
        _id: _id,
      });
      handleCloseModal();
      navigate("/profile");
    } catch (error) {
      // console.error(`There was an error: ${error}`);
      auth.responseError(error);
    }
  }

  function handleNewProfileInfoSubmit(changedData) {
    const token = getToken();

    auth
      .changeUserInfo(changedData, token)
      .then((res) => {
        console.log(res);
        setUserData((userData) => ({ ...userData, ...res }));
      })
      .then(handleCloseModal)
      .catch(auth.responseError);
  }

  function handleChangeAuthMethod(otherModal) {
    setActiveModal(otherModal);
  }

  // *** *** *** *** *** *** *** *** *** *** *
  // EFFECTS EFFECTS EFFECTS EFFECTS EFFECTS *
  // EFFECTS EFFECTS EFFECTS EFFECTS EFFECTS *
  // *** *** *** *** *** *** *** *** *** *** *

  // Logs in user corresponding to the jwt save in localstorage
  useEffect(() => {
    const token = getToken();
    // console.log(`Token retrieved on refresh: ${token}`);
    if (!token) return;

    auth
      .getUserInfo(token)
      .then((res) => {
        // console.log(res);
        // console.log("isLoggedIn: ", isLoggedIn);
        const { name, email, avatar, _id } = res;
        setIsLoggedIn(true);
        // console.log("isLoggedIn: ", isLoggedIn);
        setUserData({ name, email, avatar, _id });
        navigate("/");
      })
      .catch(auth.responseError);
  }, []);

  // Gets garment data from the database through an API call
  // Sets the returned objects to the clothingItems array
  useEffect(() => {
    requestWeatherData();
    garmentsApi
      .getGarmentData()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((error) => console.log(error));
  }, []);

  // Adds 'Esc' event listener to document when activeModal state is not falsy
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
    <CurrentUserContext.Provider value={userData}>
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
            isLoggedIn={isLoggedIn}
          />
          <ClothingListContext.Provider value={clothingItems}>
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    weatherType={weatherType}
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                    handleCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      setActiveModal={setActiveModal}
                      handleCardClick={handleCardClick}
                      handleClickChangeProfileData={
                        handleClickChangeProfileData
                      }
                      onCardLike={handleCardLike}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={null} />
              <Route
                path="*"
                element={
                  isLoggedIn ? (
                    <Navigate to="/items" replace />
                  ) : (
                    <Navigate to="/login" replace />
                  )
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
            handleChangeAuthMethod={handleChangeAuthMethod}
          />
          <LoginModal
            formTitle={"Log in"}
            formName={"login-user"}
            formButtonText={"Log In"}
            isOpen={activeModal === "login-user"}
            onLogin={handleLoginSubmit}
            handleCloseModal={handleCloseModal}
            activeModal={activeModal}
            handleChangeAuthMethod={handleChangeAuthMethod}
          />
          <EditProfileModal
            formTitle={"Change profile data"}
            formName={"edit-profile-info"}
            formButtonText={"Save Changes"}
            isOpen={activeModal === "edit-profile-info"}
            onChangeInfo={handleNewProfileInfoSubmit}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
