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
  let newClothing = [];

  newClothing = props.defaultContent.map((item) => {
    if (item.weather == tempDescribe) {
      return (
        <ItemCard
          key={item._id}
          itemLink={item.link}
          ItemName={item.name}
          itemWeather={item.weather}
          onOpen={props.onOpen}
          itemModalClasslist={props.itemModalClasslist}
          setItemModalClasslist={props.setItemModalClasslist}
          setWeatherTemp={props.setWeatherTemp}
          setItemCardLink={props.setItemCardLink}
          setItemCardName={props.setItemCardName}
          activeModal={props.activeModal}
          setActiveModal={props.setActiveModal}
          setFormTitle={props.setFormTitle}
          setFormName={props.setFormName}
          setFormButtonText={props.setFormButtonText}
        />
      );
    }
  });
  return (
    <main className="main">
      <WeatherCard temp={props.temp} weatherType={props.weatherType} />
      <div className="main__cards">
        <p className="main__cards_suggestion">
          {`Today is ${props.temp}°F. You may feel ${tempDescribe} and want to wear:`}
        </p>
        <ul className="main__cards_cardsList">{newClothing}</ul>
      </div>
    </main>
  );
}

export default Main;