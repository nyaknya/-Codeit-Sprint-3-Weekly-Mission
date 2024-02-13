import { useEffect, useState } from "react";
import { getFolderFilterKeywords } from "../../../utils/api";
import "./style.css";

function FolderFilterKeyword() {
  const [keywords, setKeywords] = useState("전체");

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

  console.log(keywords);

  return (
    <section className="filter-keywords-container container">
      <ul className="filter-keywords-list">
        <li className="keyword">전체</li>
        {keywords.data &&
          keywords.data.map((keywords) => {
            return (
              <li className="keyword" key={keywords.id}>
                {keywords.name}
              </li>
            );
          })}
      </ul>
      <img src="/assets/add.svg" />
    </section>
  );
}

export default FolderFilterKeyword;
