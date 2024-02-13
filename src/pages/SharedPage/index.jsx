import { useEffect, useState } from "react";
import { getUserInfo } from "../../utils/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SharedTitlebar from "../../components/SharedComponents/SharedTitlebar";
import SharedContent from "../../components/SharedComponents/SharedContent";

function SharedPage() {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserInfo();
        setUserInfo(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Header userInfo={userInfo} />
      <SharedTitlebar />
      <SharedContent />
      <Footer />
    </>
  );
}

export default SharedPage;
