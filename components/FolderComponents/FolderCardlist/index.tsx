import getAllFolderLinks from "@/api/getAllFolderLinks";
import getFolderLinks from "@/api/getFolderLinks";
import FolderCard from "@/components/FolderComponents/FolderCard";
import styles from "@/styles/cardlist.module.css";
import { useEffect, useState } from "react";

interface FolderCardlistProps {
  links: FolderLinksData[];
  searchKeyword: string;
  selectedKeyword: FolderFilterKeywordData;
}

function FolderCardlist({
  links,
  searchKeyword,
  selectedKeyword,
}: FolderCardlistProps) {
  const [folderKeyword, setFolderKeyword] = useState([]);
  const { id: selectedId } = selectedKeyword;

  const loadAllFolderDate = async () => {
    try {
      const folderAllLinks = await getAllFolderLinks();
      setFolderKeyword(folderAllLinks.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const loadFolderDate = async () => {
    try {
      const folderLinks = await getFolderLinks(selectedId);
      setFolderKeyword(folderLinks || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    {
      selectedKeyword === "전체" ? loadAllFolderDate() : loadFolderDate();
    }
  }, [selectedId]);

  const isMatchSearchKeyword = (link: FolderLinksData) => {
    if (!searchKeyword) {
      return true;
    }

    if (!link) {
      return false;
    }

    const urlMatch = link.url
      ? link.url.toUpperCase().includes(searchKeyword.toUpperCase())
      : false;
    const titleMatch = link.title
      ? link.title.toUpperCase().includes(searchKeyword.toUpperCase())
      : false;
    const descriptionMatch = link.description
      ? link.description.toUpperCase().includes(searchKeyword.toUpperCase())
      : false;

    return urlMatch || titleMatch || descriptionMatch;
  };

  return (
    <section className="container">
      <ul className={styles.cardlist}>
        {folderKeyword.length ? (
          links.map(
            (link: FolderLinksData) =>
              isMatchSearchKeyword(link) && (
                <FolderCard link={link} key={link.id} />
              )
          )
        ) : (
          <li className={styles["empty-links"]}>저장된 링크가 없습니다.</li>
        )}
      </ul>
    </section>
  );
}

export default FolderCardlist;
