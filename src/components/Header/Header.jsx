import { useEffect, useState } from "react";
import { getUserInfo } from "../../utils/api";
import UserProfile from "./UserProfile/UserProfile";
import Cta from "./Cta/Cta";
import "./Header.css";

function Header() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { email } = await getUserInfo();
        setUserEmail(email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  });

  return (
    <header className="sign-header">
      <h1 className="logo">
        <a href="/">
          <img src="/assets/logo.svg" alt="로고" />
        </a>
      </h1>
      {userEmail ? <UserProfile userEmail={userEmail} /> : <Cta />}
    </header>
  );
}

export default Header;
