import "./ItemCard.css";

export function ItemCard(props) {
  // consider putting this in App.jsx...and pass down to this component as an array
  let newClothing = [];

  newClothing = props.defaultContent.map((item, i) => {
    if (item.weather == props.tempDescribe) {
      // props.setItemCardLink(item.link);
      // props.setItemCardName(item.name);
      return (
        <li
          className="main__cards_listItem"
          key={i}
          onClick={() => {
            props.setItemCardLink.call(this, item.link);
            props.setItemCardName.call(this, item.name);
            props.setWeatherTemp.call(this, item.weather);
            props.onOpen(props.itemModalClasslist, props.setItemModalClasslist);
          }}
        >
          <p className="main__cards_listItem-title">{item.name}</p>
          <img className="main__cards_listItem-image" src={item.link} />
        </li>
      );
    } else {
      return null;
    }
  });
  // console.log(newClothing);
  return newClothing;
}

export default ItemCard;
