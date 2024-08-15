import "./WeatherCard.css";
import placeholderSun from "../../../assets/images/rainy-night.svg";
function WeatherCard(props) {
  // console.log(props.weatherType);
  return (
    <div
      className={`main__weather main__weather_weather-type-${props.weatherType}`}
      // className={`main__weather main__weather_weather-type-fog`}
    >
      <p className="main__weather_temp">{`${props.temp}°F`}</p>
      <img
        className={`main__weather_image main__weather_image_weather-type-${props.weatherType}`}
        // className={`main__weather_image main__weather_image_weather-type-fog`}
        alt={`Image depicting ${props.weatherType} weather`}
      />
    </div>
  );
}

export default WeatherCard;
