import { useEffect, useState } from "react";
import FolderCard from "../FolderCard";
import { getAllFolderLinks, getFolderLinks } from "../../../utils/api";
import "./style.css";

function FolderCardlist({ selectedKeyword, keywords, searchKeyword }) {
  const [links, setLinks] = useState([]);

  const { id: selectedId } = selectedKeyword;

  const fetchAllFolderDate = async () => {
    try {
      const folderAllLinks = await getAllFolderLinks();
      setLinks(folderAllLinks.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFolderDate = async () => {
    try {
      const folderLinks = await getFolderLinks(selectedId);
      setLinks(folderLinks || []);
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

  const isMatchSearchKeyword = (link) => {
    const { url, title, description } = link;

    if (!searchKeyword) {
      return true;
    }

    if (!link) {
      return false;
    }

    const urlMatch =
      url && url.toUpperCase().includes(searchKeyword.toUpperCase());
    const titleMatch =
      title && title.toUpperCase().includes(searchKeyword.toUpperCase());
    const descriptionMatch =
      description &&
      description.toUpperCase().includes(searchKeyword.toUpperCase());

    return urlMatch || titleMatch || descriptionMatch;
  };

  return (
    <section className="container">
      <ul className="cardlist">
        {links.length ? (
          links.map((link) => {
            if (isMatchSearchKeyword(link)) {
              return (
                <li className="card" key={link.id}>
                  <FolderCard links={link} key={link.id} keywords={keywords} />
                </li>
              );
            } else {
              return null;
            }
          })
        ) : (
          <li className="empty-links">저장된 링크가 없습니다.</li>
        )}
      </ul>
    </section>
  );
}

export default FolderCardlist;
