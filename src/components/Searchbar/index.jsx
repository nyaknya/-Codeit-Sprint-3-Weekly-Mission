import { useState } from "react";
import "./style.css";

function Searchbar() {
  const [searchKeyword, setSearchKeyword] = useState();

  return (
    <section className="container searchbar-container">
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        className="search-input"
        value={searchKeyword}
      />
    </section>
  );
}

export default Searchbar;
