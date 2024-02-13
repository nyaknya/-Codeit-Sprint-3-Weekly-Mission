import { Link } from "react-router-dom";
import UserProfile from "../UserProfile";
import Cta from "../Cta";
import "./style.css";

function Header({ userInfo }) {
  const { email, profileImageSource, image_source } = userInfo;

  return (
    <header className="sign-header">
      <h1 className="logo">
        <Link to="/">
          <img src="/assets/logo.svg" alt="로고" />
        </Link>
      </h1>
      {email ? (
        <UserProfile
          userEmail={email}
          userImage={profileImageSource ?? image_source}
        />
      ) : (
        <Cta />
      )}
    </header>
  );
}

export default Header;
