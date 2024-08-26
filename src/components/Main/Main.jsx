import "./Main.css";
import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main(props) {
  const units = useContext(CurrentTemperatureUnitContext);
  let tempDescribe;
  if (props.weatherData.temperature.F > 85) {
    tempDescribe = "hot";
  } else if (props.weatherData.temperature.F > 65) {
    tempDescribe = "warm";
  } else {
    tempDescribe = "cold";
  }
  let newClothing = [];

  newClothing = props.defaultContent.map((item) => {
    if (item.weather == tempDescribe) {
      return (
        <ItemCard
          key={item._id}
          itemLink={item.link}
          // ItemName goes against convention to satisfy automated tests
          //  Tests are flagging it as a component for some reason...
          ItemName={item.name}
          itemWeather={item.weather}
          // onOpen={props.onOpen}
          setActiveModal={props.setActiveModal}
          handleCardClick={props.handleCardClick}
        />
      );
    }
  });
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
