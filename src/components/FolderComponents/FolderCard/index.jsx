import { Link } from "react-router-dom";
import getElapsedTime from "../../../utils/calculateDate.js";
import "./style.css";

function Card({ links }) {
  const { title, description, url, image_source, created_at } = links;

  const timeAgo = getElapsedTime(created_at);
  const creatDate = created_at.substring(0, 10).replaceAll(/-/g, ". ");

  return (
    <>
      <Link to={url} target="_blank">
        <div className="card-imgbox">
          <img src={image_source ?? "/assets/defalutimg.png"} alt={title} />
        </div>
        <div className="card-content">
          <time className="time-ago" datatime={created_at}>
            {timeAgo}
          </time>
          <p>{description}</p>
          <time className="creat-date" datatime={created_at}>
            {creatDate}
          </time>
        </div>
      </Link>
    </>
  );
}

export default Card;
