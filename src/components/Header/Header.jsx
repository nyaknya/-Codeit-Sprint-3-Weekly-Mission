import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../utils/api";
import UserProfile from "../UserProfile/UserProfile";
import Cta from "../Cta/Cta";
import "./Header.css";

function Header() {
  const [userEmail, setUserEmail] = useState(null);
  const [userProfileImage, setuserProfileImage] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userInfo = await getUserInfo();
        setuserProfileImage(userInfo.profileImageSource);
        setUserEmail(userInfo.email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  });

  return (
    <header className="sign-header">
      <h1 className="logo">
        <Link to="/">
          <img src="/assets/logo.svg" alt="로고" />
        </Link>
      </h1>
      {userEmail ? (
        <UserProfile
          userEmail={userEmail}
          userProfileImage={userProfileImage}
        />
      ) : (
        <Cta />
      )}
    </header>
  );
}

export default Header;
