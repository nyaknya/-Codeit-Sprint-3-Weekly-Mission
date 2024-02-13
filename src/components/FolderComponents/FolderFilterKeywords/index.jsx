import { useEffect, useState } from "react";
import { getFolderFilterKeywords } from "../../../utils/api";
import "./style.css";

function FolderFilterKeyword() {
  const [keywords, setKeywords] = useState({ data: [] });
  const [selectedKeyword, setSelectedKeyword] = useState("전체");

  useEffect(() => {
    const fetchFolderKeywords = async () => {
      try {
        const folderKeywords = await getFolderFilterKeywords();
        setKeywords(folderKeywords);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFolderKeywords();
  }, []);

  const handleKeywordsClick = (e) => {
    const clickedKeyword = e.target.innerText;
    setSelectedKeyword(clickedKeyword);
  };

  return (
    <section className="filter-keywords-container container">
      <ul className="filter-keywords-list">
        <li
          className={`keyword ${selectedKeyword === "전체" ? "selected" : ""}`}
          onClick={handleKeywordsClick}
        >
          전체
        </li>
        {keywords.data &&
          keywords.data.map((keyword) => (
            <li
              className={`keyword ${
                selectedKeyword === keyword.name ? "selected" : ""
              }`}
              key={keyword.id}
              onClick={handleKeywordsClick}
            >
              {keyword.name}
            </li>
          ))}
      </ul>
      <img src="/assets/add.svg" alt="Add" />
    </section>
  );
}

export default FolderFilterKeyword;
