import { useState } from "react";
import "./style.css";

function Searchbar({ getSearchKeyword }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputOnChange = (e) => {
    getSearchKeyword(e.currentTarget.value);
    setInputValue(e.currentTarget.value);
  };

  const handleInputValueClear = () => {
    getSearchKeyword("");
    setInputValue("");
  };

  return (
    <section className="container searchbar-container">
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        className="search-input"
        value={inputValue}
        onChange={handleInputOnChange}
      />
      {inputValue && (
        <img
          src="/assets/searchclear.svg"
          alt="검색창 비우는 버튼"
          onClick={handleInputValueClear}
        />
      )}
    </section>
  );
}

export default Searchbar;
