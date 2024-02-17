import styled from "styled-components";

const FacebookShareButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: var(--Blue-50);

  & img {
    vertical-align: middle;
  }
`;

const FacebookShareButton = ({ share_url }) => {
  const handleFacebookShare = () => {
    window.open(share_url);
  };

  return (
    <FacebookShareButtonStyled type="button" onClick={handleFacebookShare}>
      <img src="/assets/facebookshare.svg" alt="페이스북 공유" />
      <p>페이스북</p>
    </FacebookShareButtonStyled>
  );
};

export default FacebookShareButton;
