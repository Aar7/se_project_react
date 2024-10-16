import "./Main.css";
import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";
import { useContext, useEffect } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { ClothingListContext } from "../../contexts/ClothingListContext";

function Main(props) {
  const units = useContext(CurrentTemperatureUnitContext);
  const clothingItems = useContext(ClothingListContext);
  // console.log(clothing.clothingItems);
  let tempDescribe;
  if (props.weatherData.temperature.F > 85) {
    tempDescribe = "hot";
  } else if (props.weatherData.temperature.F > 65) {
    tempDescribe = "warm";
  } else {
    tempDescribe = "cold";
  }
  // let newClothing = [];

  // useEffect(() => {
  // newClothing = props.clothingItems.map((item) => {
  const newClothing = clothingItems.map((item) => {
    if (item.weather == tempDescribe) {
      // console.log("item._id: ");
      // console.log(item._id);
      // console.log(item.owner);
      return (
        <ItemCard
          key={item._id}
          itemKey={item._id}
          itemLink={item.imageUrl}
          // ItemName goes against convention to satisfy automated tests
          //  Tests are flagging it as a component for some reason...
          ItemName={item.name}
          itemWeather={item.weather}
          itemOwner={item.owner}
          // onOpen={props.onOpen}
          setActiveModal={props.setActiveModal}
          handleCardClick={props.handleCardClick}
        />
      );
    }
  });
  // }, [clothingItems]);
  // console.log("newClothing: ");
  // console.log(newClothing[0]);
  return (
    <main className="main">
      <WeatherCard
        weatherType={props.weatherType}
        weatherData={props.weatherData}
      />
      <div className="main__cards">
        <p className="main__cards_suggestion">
          {`Today is ${
            props.weatherData.temperature[units.currentTemperatureUnit]
          }°${
            units.currentTemperatureUnit
          }. You may feel ${tempDescribe} and want to wear:`}
        </p>
        <ul className="main__cards_cardsList">{newClothing}</ul>
      </div>
    </main>
  );
}

export default Main;
