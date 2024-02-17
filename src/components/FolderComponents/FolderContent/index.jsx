import { useEffect, useState } from "react";
import { getFolderFilterKeywords } from "../../../utils/api";
import Searchbar from "../../Searchbar";
import FolderFilterKeyword from "../FolderFilterKeywords";
import FolderCardlist from "../FolderCardlist";
import "./style.css";

function Main({ userInfo }) {
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

  const handleAllKeywordsClick = (e) => {
    const allClickedKeyword = e.target.innerText;
    setSelectedKeyword(allClickedKeyword);
  };

  const handleKeywordsClick = (keyword) => {
    const clickedKeyword = keyword;
    setSelectedKeyword(clickedKeyword);
  };

  return (
    <main>
      <Searchbar />
      <FolderFilterKeyword
        keywords={keywords}
        selectedKeyword={selectedKeyword}
        userInfo={userInfo}
        handleAllKeywordsClick={handleAllKeywordsClick}
        handleKeywordsClick={handleKeywordsClick}
      />
      <FolderCardlist selectedKeyword={selectedKeyword} />
    </main>
  );
}

export default Main;
