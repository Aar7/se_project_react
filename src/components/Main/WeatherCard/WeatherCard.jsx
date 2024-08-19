import "./WeatherCard.css";
function WeatherCard(props) {
  return (
    <div
      className={`main__weather main__weather_weather-type-${props.weatherType}`}
    >
      <p className="main__weather_temp">{`${props.temp}°F`}</p>
      <img
        className={`main__weather_image main__weather_image_weather-type-${props.weatherType}`}
        alt={`Image depicting ${props.weatherType} weather`}
      />
    </div>
  );
}

export default WeatherCard;
