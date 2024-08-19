import "./ItemCard.css";

export function ItemCard(props) {
  // consider putting this in App.jsx...and pass down to this component as an array

  // NewClothing = props.defaultContent.map((item, i) => {
  //   if (item.weather == props.tempDescribe) {
  //     // props.setItemCardLink(item.link);
  //     // props.setItemCardName(item.name);
  //     return (
  //       <li
  //         className="main__cards_listItem"
  //         key={i}
  //         onClick={() => {
  //           props.setItemCardLink.call(this, item.link);
  //           props.setItemCardName.call(this, item.name);
  //           props.setWeatherTemp.call(this, item.weather);
  //           props.onOpen(props.itemModalClasslist, props.setItemModalClasslist);
  //         }}
  //       >
  //         <p className="main__cards_listItem-title">{item.name}</p>
  //         <img
  //           className="main__cards_listItem-image"
  //           src={item.link}
  //           alt={`An image of a/an ${item.name}`}
  //         />
  //       </li>
  //     );
  //   } else {
  //     return null;
  //   }
  // });
  // console.log(newClothing);
  // return NewClothing;
  return (
    <li
      className="main__cards_listItem"
      key={props.key}
      onClick={() => {
        props.setItemCardLink.call(this, props.itemLink);
        props.setItemCardName.call(this, props.itemName);
        props.setWeatherTemp.call(this, props.itemWeather);
        props.onOpen(props.itemModalClasslist, props.setItemModalClasslist);
      }}
    >
      <p className="main__cards_listItem-title">{props.itemName}</p>
      <img
        className="main__cards_listItem-image"
        src={props.itemLink}
        alt={`An image of a/an ${props.itemName}`}
      />
    </li>
  );
}

export default ItemCard;
