import "./ItemCard.css";

export function ItemCard(props) {
  // console.log("itemKey from ItemCard comp: ");
  // console.log(props.itemKey);
  return (
    <li
      className="main__cards_listItem"
      onClick={() => {
        // console.log(
        //   props.itemKey,
        //   props.itemLink,
        //   props.ItemName,
        //   props.itemWeather
        // );
        props.handleCardClick(this, {
          _id: props.itemKey,
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
