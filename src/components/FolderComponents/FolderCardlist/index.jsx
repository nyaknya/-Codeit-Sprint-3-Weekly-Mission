import { useEffect, useState } from "react";
import FolderCard from "../FolderCard";
import { getFolderInfo } from "../../../utils/api";
import "./style.css";

function FolderCardlist() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchFolderDate = async () => {
      try {
        const data = await getFolderInfo();
        setLinks(data.folder.links);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFolderDate();
  }, []);

  return (
    <section className="container">
      <div className="utils-area">
        <h2>유용한 글</h2>
        <ul>
          <li>
            <img src="/assets/share.svg" alt="공유 버튼 아이콘" />{" "}
            <span>공유</span>
          </li>
          <li>
            <img src="/assets/pen.svg" alt="이름 변경 아이콘" />
            <span>이름 변경</span>
          </li>
          <li>
            <img src="/assets/delete.svg" alt="삭제 아이콘" /> <span>삭제</span>
          </li>
        </ul>
      </div>
      <ul className="cardlist">
        {links.map((data) => {
          return (
            <li className="card" key={data.id}>
              <FolderCard data={data} key={data.id} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FolderCardlist;
