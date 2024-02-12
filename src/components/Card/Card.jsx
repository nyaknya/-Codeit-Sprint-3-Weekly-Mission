import { Link } from "react-router-dom";
import getElapsedTime from "../../utils/calculateDate.js";
import "./Card.css";

function Card({ data }) {
  const { title, description, url, imageSource, createdAt } = data;

  const timeAgo = getElapsedTime(createdAt);
  const creatDate = createdAt.substring(0, 10).replaceAll(/-/g, ". ");

  return (
    <>
      <Link to={url} target="_blank">
        <div className="card-imgbox">
          <img src={imageSource ?? "/assets/defalutimg.png"} alt={title} />
        </div>
        <div className="card-content">
          <time className="time-ago" datatime={createdAt}>
            {timeAgo}
          </time>
          <p>{description}</p>
          <time className="creat-date" datatime={createdAt}>
            {creatDate}
          </time>
        </div>
      </Link>
    </>
  );
}

export default Card;
