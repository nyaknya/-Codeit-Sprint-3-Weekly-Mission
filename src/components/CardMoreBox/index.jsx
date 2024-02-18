import { useState } from "react";
import ModalLinkDelete from "../Modal/ModalLinkDelete";
import ModalLinkFolderAdd from "../Modal/ModalLinkFolderAdd";
import "./style.css";

function CardMoreBox({ url, keywords }) {
  const [modalLinkDelete, setModalLinkDelete] = useState(false);
  const [modalLinkFolderAdd, setModalLinkFolderAdd] = useState(false);

  const handleModalLinkDeleteOnButtonClick = (e) => {
    e.preventDefault();
    setModalLinkDelete(true);
  };

  const handleModalLinkFolderAddOnButtonClick = (e) => {
    e.preventDefault();
    setModalLinkFolderAdd(true);
  };

  const handleCloseButtonClick = (e) => {
    e.preventDefault();
    setModalLinkDelete(false);
    setModalLinkFolderAdd(false);
  };

  return (
    <>
      {modalLinkDelete ? (
        <ModalLinkDelete onClick={handleCloseButtonClick} url={url} />
      ) : null}
      {modalLinkFolderAdd ? (
        <ModalLinkFolderAdd
          onClick={handleCloseButtonClick}
          url={url}
          keywords={keywords}
        />
      ) : null}
      <div className="kebab-more-box">
        <ul>
          <li onClick={handleModalLinkDeleteOnButtonClick}>삭제하기</li>
          <li onClick={handleModalLinkFolderAddOnButtonClick}>폴더에 추가</li>
        </ul>
      </div>
    </>
  );
}

export default CardMoreBox;
