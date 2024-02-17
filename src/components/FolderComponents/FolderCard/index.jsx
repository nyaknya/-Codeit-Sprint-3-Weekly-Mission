import { Link } from "react-router-dom";
import CardMoreBox from "../../CardMoreBox/index.jsx";
import getElapsedTime from "../../../utils/calculateDate.js";
import "./style.css";
import { useEffect, useRef, useState } from "react";

function Card({ links }) {
  const [kebabVisible, setKebabVisible] = useState(false);

  const dropDownRef = useRef();

  useEffect(() => {
    const handleOutsideClose = (e) => {
      if (kebabVisible && !dropDownRef.current.contains(e.target))
        setKebabVisible(false);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [kebabVisible]);

  const handleKebabVisible = (e) => {
    e.preventDefault();
    setKebabVisible(!kebabVisible);
  };

  const { title, description, url, image_source, created_at } = links;

  const timeAgo = getElapsedTime(created_at);
  const creatDate = created_at.substring(0, 10).replaceAll(/-/g, ". ");

  return (
    <>
      <Link to={url} target="_blank">
        <div className="star-button">
          <img src="/assets/star.svg" alt="즐겨찾기 버튼" />
        </div>
        <div className="card-imgbox">
          <img src={image_source ?? "/assets/defalutimg.png"} alt={title} />
        </div>
        <div className="card-content">
          <div className="time-box">
            <time className="time-ago" datatime={created_at}>
              {timeAgo}
            </time>
            <div className="more-box" ref={dropDownRef}>
              <img
                src="/assets/kebab.svg"
                alt="더보기 버튼"
                onClick={handleKebabVisible}
              />
              {kebabVisible ? <CardMoreBox url={url} /> : null}
            </div>
          </div>

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
