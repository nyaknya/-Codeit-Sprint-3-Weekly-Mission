import "./style.css";

function FolderFilterKeyword({
  keywords,
  selectedKeyword,
  handleAllKeywordsClick,
  handleKeywordsClick,
}) {
  const { name: selectedName } = selectedKeyword;

  return (
    <section className="filter-container">
      <div className="filter-keywords-container container">
        <ul className="filter-keywords-list">
          <li
            className={`keyword ${
              selectedKeyword === "전체" ? "selected" : ""
            }`}
            onClick={handleAllKeywordsClick}
          >
            전체
          </li>
          {keywords.data &&
            keywords.data.map((keyword) => (
              <li
                className={`keyword ${
                  selectedName === keyword.name ? "selected" : ""
                }`}
                key={keyword.id}
                onClick={() => handleKeywordsClick(keyword)}
              >
                {keyword.name}
              </li>
            ))}
        </ul>
        <div className="folder-add ">
          <img src="/assets/add.svg" alt="Add" className="mobile-blind" />
          <div className="folder-add-floating pc-blind tablet-blind">
            <span>폴더 추가</span> <img src="/assets/add.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="utils-area container">
        <h2>{selectedName ?? selectedKeyword}</h2>
        {selectedName === "전체" ? null : (
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
              <img src="/assets/delete.svg" alt="삭제 아이콘" />
              <span>삭제</span>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default FolderFilterKeyword;
