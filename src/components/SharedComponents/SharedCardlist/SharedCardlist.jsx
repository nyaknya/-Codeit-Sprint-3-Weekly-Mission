import { useEffect, useState } from "react";
import SharedCard from "../SharedCard/SharedCard";
import { getFolderInfo } from "../../../utils/api";
import "./SharedCardlist.css";

function Cardlist() {
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
  });

  return (
    <section className="container">
      <ul className="cardlist">
        {links.map((data) => {
          return (
            <li className="card" key={data.id}>
              <SharedCard data={data} key={data.id} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Cardlist;
