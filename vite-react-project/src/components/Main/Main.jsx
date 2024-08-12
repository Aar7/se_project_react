import "./Main.css";
import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";
// import defaultContent from "../../utils/defaultContent.js";
function Main({ temp, defaultContent }) {
  return (
    <>
      <div className="main">
        <WeatherCard temp={temp} />
        <div className="main__cards">
          <p className="main__cards_suggestion">
            {`Today is ${temp}° F / You may want to wear:`}
          </p>
          <ul className="main__cards_cardsList">
            <ItemCard
              cardTitle={defaultContent[0].name}
              cardImageLink={defaultContent[0].link}
            />
            <ItemCard
              cardTitle={defaultContent[1].name}
              cardImageLink={defaultContent[1].link}
            />
            <ItemCard
              cardTitle={defaultContent[2].name}
              cardImageLink={defaultContent[2].link}
            />
            <ItemCard
              cardTitle={defaultContent[3].name}
              cardImageLink={defaultContent[3].link}
            />
            <ItemCard
              cardTitle={defaultContent[4].name}
              cardImageLink={defaultContent[4].link}
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
