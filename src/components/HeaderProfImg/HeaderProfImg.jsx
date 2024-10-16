function HeaderProfImg({ userData }) {
  // console.log(`userData, headerprofimg`, userData);
  if (!userData.avatar) {
    const nameInitial = userData.name[0];
    return (
      <div className="header__profile-image header__avatar-missing">
        <span className="header__name-initial">
          {nameInitial.toUpperCase()}
        </span>
      </div>
    );
  } else {
    return (
      <img
        className="header__profile-image"
        src={userData.avatar}
        alt="User profile image"
      />
    );
  }
}

export default HeaderProfImg;
