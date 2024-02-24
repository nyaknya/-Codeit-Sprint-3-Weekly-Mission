import { useEffect, useState } from "react";
import getFolderUser from "@/api/getFolderUser";

import Header from "@/components/Header";
// import SharedTitlebar from "@/components/SharedComponents/SharedTitlebar";
// import SharedContent from "@/components/SharedComponents/SharedContent";
import Footer from "@/components/Footer";

function FolderPage() {
  const [folderUser, setFolderUser] = useState<FolderUserData | null>(null);

  const loadFolderUser = async () => {
    try {
      const folderUserData = await getFolderUser();
      setFolderUser(folderUserData.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFolderUser();
  }, []);

  // null일경우 타입 오류 처리
  if (folderUser === null) {
    return null;
  }

  return (
    <>
      <Header userProfile={folderUser} />
      {/* <FolderTitlebar /> */}
      {/* <FolderContent userInfo={userInfo} /> */}
      <Footer />
    </>
  );
}

export default FolderPage;
