import { useState } from "react";
import Searchbar from "../../Searchbar";
import SharedCardlist from "../SharedCardlist";
import "./style.css";

function SharedContent() {
  const [searchKeyword, setSearchKeyword] = useState();

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
      <SharedCardlist searchKeyword={searchKeyword} />
    </main>
  );
}

export default SharedContent;
