import { Link } from "react-router-dom";
import "./style.css";

function Cta() {
  return (
    <div className="cta">
      <Link to="/signin.html">로그인</Link>
    </div>
  );
}

export default Cta;
