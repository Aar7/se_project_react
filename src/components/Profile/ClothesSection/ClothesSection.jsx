import "./ClothesSection.css";
// import defaultContent from "../../../utils/defaultContent";
import ItemCard from "../../Main/ItemCard/ItemCard";

function ClothesSection(props) {
  const clothingArray = props.clothingItems.map((item) => {
    return (
      <ItemCard
        key={item._id}
        itemKey={item._id}
        itemLink={item.imageUrl}
        // ItemName goes against convention to satisfy automated tests
        //  Tests are flagging it as a component for some reason...
        ItemName={item.name}
        itemWeather={item.weather}
        itemOwner={item.owner}
        setActiveModal={props.setActiveModal}
        handleCardClick={props.handleCardClick}
      />
    );
  });
  // const clothingArray = defaultContent.map((item) => {
  //   return (
  //     <ItemCard
  //       key={item._id}
  //       itemLink={item.link}
  //       // ItemName goes against convention to satisfy automated tests
  //       //  Tests are flagging it as a component for some reason...
  //       ItemName={item.name}
  //       itemWeather={item.weather}
  //       setActiveModal={props.setActiveModal}
  //       handleCardClick={props.handleCardClick}
  //     />
  //   );
  // });
  return (
    <div className="profile-clothing">
      <div className="profile-clothing__wrap">
        <p className="profile-clothing__info">Your items</p>
        <button
          className="profile-clothing__add-new"
          type="button"
          onClick={() => {
            props.setActiveModal("add-garment");
          }}
        >
          + Add New
        </button>
      </div>
      <ul className="profile-clothing__items">{clothingArray}</ul>
    </div>
  );
}

export default ClothesSection;
