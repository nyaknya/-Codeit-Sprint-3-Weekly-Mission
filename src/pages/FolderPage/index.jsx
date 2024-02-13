import { useEffect, useState } from "react";
import { getFolderUserInfo } from "../../utils/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FolderTitlebar from "../../components/FolderComponents/FolderTitlebar";
import FolderContent from "../../components/FolderComponents/FolderContent";

function FolderPage() {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getFolderUserInfo();
        setUserInfo(userData.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Header userInfo={userInfo} />
      <FolderTitlebar />
      <FolderContent />
      <Footer />
    </>
  );
}

export default FolderPage;
