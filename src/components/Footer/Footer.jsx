import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        <span>©codeit - 2023</span>
      </div>
      <div className="footer-links">
        <Link to="privacy.html">Privacy Policy</Link>
        <Link to="faq.html">FAQ</Link>
      </div>
      <div className="footer-sns">
        <Link to="https://www.facebook.com/" target="_blank">
          <img src="/assets/facebook.svg" alt="facebook 로고" />
        </Link>
        <Link to="https://twitter.com/" target="_blank">
          <img src="/assets/twitter.svg" alt="twitter 로고" />
        </Link>
        <Link to="https://www.youtube.com/" target="_blank">
          <img src="/assets/youtube.svg" alt="youtube 로고" />
        </Link>
        <Link to="https://www.instagram.com/" target="_blank">
          <img src="/assets/instagram.svg" alt="instagram 로고" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
