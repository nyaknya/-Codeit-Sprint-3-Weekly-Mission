import { useState } from "react";
import ModalEdit from "../../Modal/ModalEdit";
import ModalAdd from "../../Modal/ModalAdd";
import ModalShare from "../../Modal/ModalShare";
import ModalFolderDelete from "../../Modal/ModalFolderDelete";
import "./style.css";

function FolderFilterKeyword({
  keywords,
  selectedKeyword,
  handleAllKeywordsClick,
  handleKeywordsClick,
  userInfo,
}) {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalShare, setModalShare] = useState(false);
  const [modalFolderDelete, setModalFolderDelete] = useState(false);
  const { name: selectedName } = selectedKeyword;

  const handleModalEditOnButtonClick = (e) => {
    setModalEdit(true);
  };

  const handleModalAddOnButtonClick = (e) => {
    setModalAdd(true);
  };

  const handleModalShareOnButtonClick = (e) => {
    setModalShare(true);
  };

  const handleModalFolderDeleteOnButtonClick = (e) => {
    setModalFolderDelete(true);
  };

  const handleCloseButtonClick = (e) => {
    setModalEdit(false);
    setModalAdd(false);
    setModalShare(false);
    setModalFolderDelete(false);
  };

  return (
    <>
      {modalEdit ? <ModalEdit onClick={handleCloseButtonClick} /> : null}
      {modalAdd ? <ModalAdd onClick={handleCloseButtonClick} /> : null}
      {modalShare ? (
        <ModalShare
          onClick={handleCloseButtonClick}
          selectedKeyword={selectedKeyword}
          userInfo={userInfo}
        />
      ) : null}
      {modalFolderDelete ? (
        <ModalFolderDelete
          onClick={handleCloseButtonClick}
          selectedKeyword={selectedKeyword}
        />
      ) : null}

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
          <div className="folder-add" onClick={handleModalAddOnButtonClick}>
            <img src="/assets/add.svg" alt="Add" className="mobile-blind" />
            <div className="folder-add-floating pc-blind tablet-blind">
              <span>폴더 추가</span> <img src="/assets/add.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="utils-area container">
          <h2>{selectedName ?? selectedKeyword}</h2>
          {selectedKeyword === "전체" ? null : (
            <ul>
              <li onClick={handleModalShareOnButtonClick}>
                <img src="/assets/share.svg" alt="공유 버튼 아이콘" />
                <span>공유</span>
              </li>
              <li onClick={handleModalEditOnButtonClick}>
                <img src="/assets/pen.svg" alt="이름 변경 아이콘" />
                <span>이름 변경</span>
              </li>
              <li onClick={handleModalFolderDeleteOnButtonClick}>
                <img src="/assets/delete.svg" alt="삭제 아이콘" />
                <span>삭제</span>
              </li>
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

export default FolderFilterKeyword;
