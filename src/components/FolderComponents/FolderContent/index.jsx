import { useEffect, useState } from "react";
import { getFolderFilterKeywords } from "../../../utils/api";
import Searchbar from "../../Searchbar";
import FolderFilterKeyword from "../FolderFilterKeywords";
import FolderCardlist from "../FolderCardlist";
import "./style.css";

function Main({ userInfo }) {
  const [keywords, setKeywords] = useState({ data: [] });
  const [selectedKeyword, setSelectedKeyword] = useState("전체");
  const [searchKeyword, setSearchKeyword] = useState();

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
    setSelectedKeyword(keyword);
  };

  const handleSearchKeywordChange = (changeSearchKeyword) => {
    setSearchKeyword(changeSearchKeyword);
  };

  return (
    <main>
      <Searchbar getSearchKeyword={handleSearchKeywordChange} />
      {searchKeyword && (
        <div className="container">
          <h3 className="search-keyword">
            <span>{searchKeyword}</span>으로 검색한 결과입니다.
          </h3>
        </div>
      )}
      <FolderFilterKeyword
        keywords={keywords}
        selectedKeyword={selectedKeyword}
        userInfo={userInfo}
        handleAllKeywordsClick={handleAllKeywordsClick}
        handleKeywordsClick={handleKeywordsClick}
      />
      <FolderCardlist
        keywords={keywords}
        selectedKeyword={selectedKeyword}
        searchKeyword={searchKeyword}
      />
    </main>
  );
}

export default Main;
