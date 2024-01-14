import { useEffect, useState } from "react";
import {getUserInfo} from "../../api";
import UserProfile from "./UserProfile/UserProfile"
import Cta from "./Cta/Cta"
import "./Header.css";
import logo from "../../assets/logo.svg";


function Header(){
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData  = async() =>{
      try{
        const {email} = await getUserInfo();
        setUser(email);
      } catch(error){
        console.log(error);
      }    
    };
    fetchUserData();
  })

  return(
    <header className="sign-header">
      <h1 className="logo"><a href="/"><img src={logo} alt="로고"/></a></h1>
      {user ? (<UserProfile userEmail={user}/>) : (<Cta />)}
    </header>
  )
}

export default Header;