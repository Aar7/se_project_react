import "./ItemCard.css";

export function ItemCard(props) {
  return (
    <li
      className="main__cards_listItem"
      onClick={() => {
        // console.log("props.itemKey", props.itemKey);
        // console.log("props.itemLink", props.itemLink);
        // console.log("props.ItemName", props.ItemName);
        // console.log("props.itemWeather", props.itemWeather);
        // console.log("props.itemOwner", props.itemOwner);
        props.handleCardClick(this, {
          _id: props.itemKey,
          link: props.itemLink,
          name: props.ItemName,
          weather: props.itemWeather,
          owner: props.itemOwner,
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
