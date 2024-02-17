import { useEffect } from "react";
import styled from "styled-components";

const KakaoShareButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: var(--Yellow-50);

  & img {
    vertical-align: middle;
  }
`;

const KakaoShareButton = ({ share_url }) => {
  const { Kakao } = window;
  const realUrl = "https://merry-licorice-4358a9.netlify.app/";

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("cee8f493f2e0af4b4d91def7f810a26c");
  }, []);

  const handleShareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "링크브러리",
        description: "마음을 열고 대화를 주고 받는 소통 플랫폼, 오픈마인드",
        imageUrl:
          "https://merry-licorice-4358a9.netlify.app/assets/images/kakaoShareImage.png",
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "함께 참여하러 가기",
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <KakaoShareButtonStyled type="button" onClick={handleShareKakao}>
      <img src="/assets/kakoshare.svg" alt="카카오톡 공유" />
      <p>카카오톡</p>
    </KakaoShareButtonStyled>
  );
};

export default KakaoShareButton;
