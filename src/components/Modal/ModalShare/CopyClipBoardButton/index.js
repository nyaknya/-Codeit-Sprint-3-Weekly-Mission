import styled from "styled-components";

const CopyClipBoardButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: var(--Brown-40);

  & img {
    vertical-align: middle;
  }
`;

const CopyClipBoardButton = ({ share_url }) => {
  const handleCopyClipBoardLink = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (event) {
      throw new Error("클립보드 링크 복사에 실패했습니다.");
    }
  };

  return (
    <CopyClipBoardButtonStyled
      type="button"
      onClick={() => handleCopyClipBoardLink(share_url)}
    >
      <img src="/assets/linkshare.svg" alt="링크 복사하기" />
      <p>링크 공유</p>
    </CopyClipBoardButtonStyled>
  );
};

export default CopyClipBoardButton;
