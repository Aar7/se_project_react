import "./ItemCard.css";
import sampleImage from "../../../assets/images/cap.svg";

function ItemCard({ cardTitle, cardImageLink }) {
  return (
    <li className="main__cards_listItem">
      <p className="main__cards_listItem-title">{cardTitle}</p>
      <img className="main__cards_listItem-image" src={cardImageLink} />
    </li>
  );
}

export default ItemCard;
