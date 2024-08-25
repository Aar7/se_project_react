import { useContext } from "react";
import "./WeatherCard.css";
import { CurrentTemperatureUnitContext } from "../../../contexts/CurrentTemperatureUnitContext";
function WeatherCard(props) {
  const units = useContext(CurrentTemperatureUnitContext);
  return (
    <div
      className={`main__weather main__weather_weather-type-${props.weatherType}`}
    >
      {/* <p className="main__weather_temp">sss</p> */}
      <p className="main__weather_temp">{`${
        props.weatherData.temperature[units.currentTemperatureUnit]
      }°${units.currentTemperatureUnit}`}</p>
      <img
        className={`main__weather_image main__weather_image_weather-type-${props.weatherType}`}
        alt={`Image depicting ${props.weatherType} weather`}
      />
    </div>
  );
}

export default WeatherCard;
