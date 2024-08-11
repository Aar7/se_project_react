import "./Main.css";
import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";
function Main() {
  return (
    <>
      <div className="main">
        <WeatherCard />
        <ItemCard />
      </div>
    </>
  );
}

export default Main;
