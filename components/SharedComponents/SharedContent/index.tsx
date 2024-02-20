import { useState } from "react";
import Searchbar from "@/components/Searchbar";
// import SharedCardlist from "../SharedCardlist";
import styles from "./style.module.css";
import SearchKeywordResult from "@/components/SearchKeywordResult";

function SharedContent() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchKeywordChange = (changeSearchKeyword: string) => {
    console.log(changeSearchKeyword);
    setSearchKeyword(changeSearchKeyword);
  };

  return (
    <main>
      <Searchbar handleSearchKeywordChange={handleSearchKeywordChange} />
      {searchKeyword && <SearchKeywordResult searchKeyword={searchKeyword} />}
      {/* <SharedCardlist searchKeyword={searchKeyword} /> */}
    </main>
  );
}

export default SharedContent;
