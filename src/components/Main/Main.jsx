import "./Main.css";
import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";

function Main(props) {
  let tempDescribe;
  if (props.temp > 85) {
    tempDescribe = "hot";
  } else if (props.temp > 65) {
    tempDescribe = "warm";
  } else {
    tempDescribe = "cold";
  }
  return (
    <main className="main">
      <WeatherCard temp={props.temp} weatherType={props.weatherType} />
      <div className="main__cards">
        <p className="main__cards_suggestion">
          {`Today is ${props.temp}°F. You may feel ${tempDescribe} and want to wear:`}
        </p>
        <ul className="main__cards_cardsList">
          <ItemCard
            defaultContent={props.defaultContent}
            tempDescribe={tempDescribe}
            onOpen={props.onOpen}
            itemModalClasslist={props.itemModalClasslist}
            setItemModalClasslist={props.setItemModalClasslist}
            weatherTemp={props.weatherTemp}
            setWeatherTemp={props.setWeatherTemp}
            setItemCardLink={props.setItemCardLink}
            itemCardLink={props.itemCardLink}
            setItemCardName={props.setItemCardName}
            itemCardName={props.itemCardName}
          />
        </ul>
      </div>
    </main>
  );
}

export default Main;
