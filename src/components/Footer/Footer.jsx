import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        <span>©codeit - 2023</span>
      </div>
      <div className="footer-links">
        <a href="privacy.html">Privacy Policy</a>
        <a href="faq.html">FAQ</a>
      </div>
      <div className="footer-sns">
        <a href="https://www.facebook.com/" target="_blank">
          <img src="/assets/facebook.svg" alt="facebook 로고" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src="/assets/twitter.svg" alt="twitter 로고" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src="/assets/youtube.svg" alt="youtube 로고" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="/assets/instagram.svg" alt="instagram 로고" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
