import { useState } from "react";
import ModalBackground from "../ModalBackground";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .Modal-wrapper {
    display: flex;
    position: relative;
    width: 100%;
    max-width: 360px;
    min-height: 239px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 32px 40px 50px;
    gap: 18px;
    border-radius: 15px;
    z-index: 99999;

    & > p {
      color: var(--color-gray40);
    }

    ul {
      width: 280px;

      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        padding: 10px;
        border-radius: 8px;

        p {
          color: var(--color-gray60);
          font-size: 14px;
        }
      }

      li.selected {
        background: url(/assets/check.svg) no-repeat right 20px center
          var(--color-gray20);
      }

      h3 {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

  h3 {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }

  .Modal-button {
    color: var(--white);
    display: flex;
    width: 280px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 16px;

    border: none;
    border-radius: 8px;
    background: var(
      --gra-purpleblue-to-skyblue,
      linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );
    color: #fff;
  }

  .Modal-input {
    display: flex;
    width: 280px;
    padding: 18px 15px;
    justify-content: center;
    align-items: center;
    font-size: 16px;

    border-radius: 8px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-white, #fff);

    &::placeholder {
      font-size: 16px;
    }
  }

  .Modal-close {
    position: absolute;
    right: 16px;
    top: 16px;
    outline: 0;
    border: 0;
    border-radius: 50%;
  }
`;

const ModalLinkFolderAdd = ({ onClick, url, keywords }) => {
  const [folderSelected, setfolderSelected] = useState("");

  const handleFolderSelected = (e, keywordName) => {
    e.preventDefault();
    console.log(keywordName);
    setfolderSelected(keywordName);
  };

  return (
    <ModalContainer>
      <div className="Modal-wrapper">
        <button className="Modal-close" onClick={onClick}>
          <img src="/assets/close.svg" alt="닫기 버튼" />
        </button>
        <h3 className="Modal-title">폴더에 추가</h3>
        <p>{url}</p>
        <ul>
          {keywords.data &&
            keywords.data.map((keyword) => {
              return (
                <li
                  key={keyword.id}
                  className={`${
                    folderSelected === keyword.name ? "selected" : ""
                  }`}
                  onClick={(e) => handleFolderSelected(e, keyword.name)}
                >
                  <h3>{keyword.name}</h3>
                  <p>{keyword.link.count}개 링크</p>
                </li>
              );
            })}
        </ul>
        <button className="Modal-button">추가하기</button>
      </div>
      <ModalBackground />
    </ModalContainer>
  );
};

export default ModalLinkFolderAdd;
