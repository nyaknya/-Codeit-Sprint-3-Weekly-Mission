import { useEffect, useState } from "react";
import FolderCard from "../FolderCard";
import { getAllFolderLinks, getFolderLinks } from "../../../utils/api";
import "./style.css";

function FolderCardlist({ selectedKeyword, keywords }) {
  const [links, setLinks] = useState([]);

  const { id: selectedId } = selectedKeyword;

  const fetchAllFolderDate = async () => {
    try {
      const folderAllLinks = await getAllFolderLinks();
      setLinks(folderAllLinks.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFolderDate = async () => {
    try {
      const folderLinks = await getFolderLinks(selectedId);
      setLinks(folderLinks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedKeyword === "전체") {
      fetchAllFolderDate();
    } else {
      fetchFolderDate();
    }
  }, [selectedId]);

  return (
    <section className="container">
      <ul className="cardlist">
        {links.length ? (
          links.map((links) => {
            return (
              <li className="card" key={links.id}>
                <FolderCard links={links} key={links.id} keywords={keywords} />
              </li>
            );
          })
        ) : (
          <li className="empty-links">저장된 링크가 없습니다.</li>
        )}
      </ul>
    </section>
  );
}

export default FolderCardlist;
