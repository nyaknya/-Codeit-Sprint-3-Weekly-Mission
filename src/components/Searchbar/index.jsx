import "./style.css";

function Searchbar({ getSearchKeyword }) {
  const handleInputOnChange = (e) => {
    getSearchKeyword(e.currentTarget.value);
  };

  return (
    <section className="container searchbar-container">
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        className="search-input"
        onChange={handleInputOnChange}
      />
    </section>
  );
}

export default Searchbar;
