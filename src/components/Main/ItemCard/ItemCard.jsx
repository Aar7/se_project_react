import "./ItemCard.css";

export function ItemCard(props) {
  return (
    <li
      className="main__cards_listItem"
      onClick={() => {
        props.handleCardClick(this, {
          link: props.itemLink,
          name: props.ItemName,
          weather: props.itemWeather,
        });
        props.setActiveModal("open-card");
      }}
    >
      <p className="main__cards_listItem-title">{props.ItemName}</p>
      <img
        className="main__cards_listItem-image"
        src={props.itemLink}
        alt={`An image of a/an ${props.ItemName}`}
      />
    </li>
  );
}

export default ItemCard;
