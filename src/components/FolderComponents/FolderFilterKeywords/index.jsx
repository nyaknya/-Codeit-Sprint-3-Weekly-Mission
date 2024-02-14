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
    <section className="container">
      <div className="filter-keywords-container container">
        <ul className="filter-keywords-list">
          <li
            className={`keyword ${
              selectedKeyword === "전체" ? "selected" : ""
            }`}
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
      </div>

      <div className="utils-area">
        <h2>{selectedKeyword}</h2>
        {selectedKeyword === "전체" ? null : (
          <ul>
            <li>
              <img src="/assets/share.svg" alt="공유 버튼 아이콘" />
              <span>공유</span>
            </li>
            <li>
              <img src="/assets/pen.svg" alt="이름 변경 아이콘" />
              <span>이름 변경</span>
            </li>
            <li>
              <img src="/assets/delete.svg" alt="삭제 아이콘" />{" "}
              <span>삭제</span>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default FolderFilterKeyword;
