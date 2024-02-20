import { useEffect, useState } from "react";
import getFolderInfo from "@/api/getFolderInfo";
import Image from "next/image";
import styles from "./style.module.css";

interface FolderLinksData {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}
[];

interface FolderOwnerData {
  id: number;
  name: string;
  profileImageSource: string;
}

interface FolderData {
  count: number;
  id: number;
  links: FolderLinksData;
  name: string;
  owner: FolderOwnerData;
}

function Titlebar() {
  const [folder, setFolder] = useState<FolderData | null>(null);

  const loadFolderDate = async () => {
    try {
      const folderData = await getFolderInfo();
      setFolder(folderData.folder);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFolderDate();
  }, []);

  // null일경우 타입 오류 처리
  if (folder === null) {
    return null;
  }

  const {
    owner: { profileImageSource: profileImg, name: owner },
    name: folderName,
  }: FolderData = folder;

  return (
    <section className={styles["titlebar-section"]}>
      <Image
        src={profileImg}
        alt="폴더 주인 프로필 이미지"
        width={60}
        height={60}
      />
      <p>@{owner}</p>
      <h2>{folderName}</h2>
    </section>
  );
}

export default Titlebar;
