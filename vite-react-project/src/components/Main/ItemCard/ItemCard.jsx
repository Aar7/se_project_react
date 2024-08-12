import "./ItemCard.css";
import sampleImage from "../../../assets/images/cap.svg";

function ItemCard() {
  return (
    <div className="main__cards">
      <p className="main__cards_suggestion">
        Today is insanely buggy. Wear DevTools
      </p>
      <ul className="main__cards_cardsList">
        {/* Sample Card */}
        <li className="main__cards_listItem">
          <p className="main__cards_listItem-title">One sample title</p>
          <img className="main__cards_listItem-image" src={sampleImage} />
        </li>
        <li className="main__cards_listItem">
          <p className="main__cards_listItem-title">This is a title too</p>
          <img className="main__cards_listItem-image" src={sampleImage} />
        </li>
        <li className="main__cards_listItem">
          <p className="main__cards_listItem-title">3</p>
          <img className="main__cards_listItem-image" src={sampleImage} />
        </li>
        <li className="main__cards_listItem">
          <p className="main__cards_listItem-title">A sample title for you</p>
          <img className="main__cards_listItem-image" src={sampleImage} />
        </li>
        <li className="main__cards_listItem">
          <p className="main__cards_listItem-title">Sample title 5</p>
          <img className="main__cards_listItem-image" src={sampleImage} />
        </li>
      </ul>
    </div>
  );
}

export default ItemCard;
