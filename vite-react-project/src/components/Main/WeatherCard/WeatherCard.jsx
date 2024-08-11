import "./WeatherCard.css";
import placeholderSun from "../../../assets/images/sun.svg";
function WeatherCard() {
  return (
    <div className="main__weather">
      <p className="main__weather_temp">212*F</p>
      <img className="main__weather_image" tabIndex={-1} src={placeholderSun} />
    </div>
  );
}

export default WeatherCard;
