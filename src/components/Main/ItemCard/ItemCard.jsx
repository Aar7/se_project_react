import "./ItemCard.css";

export function ItemCard(props) {
  return (
    <li
      className="main__cards_listItem"
      onClick={() => {
        props.setItemCardLink.call(this, props.itemLink);
        props.setItemCardName.call(this, props.ItemName);
        props.setWeatherTemp.call(this, props.itemWeather);
        props.setActiveModal("open-card");
        props.setFormTitle("New Garment");
        props.setFormName("new-garment");
        props.setFormButtonText("Add Garment");
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
