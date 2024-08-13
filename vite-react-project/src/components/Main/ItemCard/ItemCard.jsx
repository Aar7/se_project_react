import "./ItemCard.css";

function ItemCard(props) {
  // consider putting this in App.jsx...and pass down to this component as an array
  // let newClothing = [];
  // if (props.temp > 85) {
  //   newClothing = props.defaultContent.map((item) => {
  //     if (item.weather == "hot") {
  //       return item;
  //     }
  //   });
  //   //hot
  //   // use .map() to return only cards with "hot"
  // } else if (temp > 68) {
  //   newClothing = props.defaultContent.map((item) => {
  //     if (item.weather == "warm") {
  //       return item;
  //     }
  //   });
  //   //warm
  //   // use .map() to return only cards with "warm"
  // } else {
  //   newClothing = props.defaultContent.map((item) => {
  //     if (item.weather == "cold") {
  //       return item;
  //     }
  //   });
  //   //cold
  //   // use .map() to return only cards with "cold"
  // }

  return (
    <li className="main__cards_listItem">
      <p className="main__cards_listItem-title">{props.cardTitle}</p>
      <img className="main__cards_listItem-image" src={props.cardImageLink} />
    </li>
  );
}

export default ItemCard;
