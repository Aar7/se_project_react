import "./ItemModal.css";

function ItemModal(props) {
  return (
    <div className={props.itemModalClasslist}>
      <img src={props.link} alt="" />
      <div>
        <p>{props.name}</p>
        <p>Weather: {props.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
