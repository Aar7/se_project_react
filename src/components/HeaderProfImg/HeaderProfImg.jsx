import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function HeaderProfImg({ mainClass, avatarMissingClass, nameInitialClass }) {
  const userData = useContext(CurrentUserContext);

  if (!userData.avatar) {
    const nameInitial = userData.name[0];
    return (
      <div className={`${mainClass} ${avatarMissingClass}`}>
        <span className={nameInitialClass}>{nameInitial.toUpperCase()}</span>
      </div>
    );
  } else {
    return (
      <img
        className={mainClass}
        src={userData.avatar}
        alt="User profile image"
      />
    );
  }
}

export default HeaderProfImg;
