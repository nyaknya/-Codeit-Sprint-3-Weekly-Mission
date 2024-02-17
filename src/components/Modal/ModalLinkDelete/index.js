import ModalBackground from "../ModalBackground";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .Modal-wrapper {
    display: flex;
    position: relative;
    width: 100%;
    max-width: 360px;
    max-height: 239px;
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
    background: var(--color-red);
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

const ModalLinkDelete = ({ onClick, url }) => {
  return (
    <ModalContainer>
      <div className="Modal-wrapper">
        <button className="Modal-close" onClick={onClick}>
          <img src="/assets/close.svg" alt="닫기 버튼" />
        </button>
        <h3 className="Modal-title">링크 삭제</h3>
        <p>{url}</p>
        <button className="Modal-button">삭제하기</button>
      </div>
      <ModalBackground />
    </ModalContainer>
  );
};

export default ModalLinkDelete;
