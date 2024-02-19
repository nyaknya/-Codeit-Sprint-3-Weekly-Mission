import { useEffect, useState } from "react";
import SharedCard from "../SharedCard";
import { getFolderInfo } from "../../../utils/api";
import "./style.css";

function Cardlist({ searchKeyword }) {
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

  const isMatchSearchKeyword = (data) => {
    console.log(data.url);

    if (!searchKeyword) {
      return true;
    }

    if (!data) {
      return false;
    }

    const urlMatch = data.url
      .toUpperCase()
      .includes(searchKeyword.toUpperCase());
    const titleMatch = data.title
      .toUpperCase()
      .includes(searchKeyword.toUpperCase());
    const descriptionMatch = data.description
      .toUpperCase()
      .includes(searchKeyword.toUpperCase());

    return urlMatch || titleMatch || descriptionMatch;
  };

  return (
    <section className="container">
      <ul className="cardlist">
        {links.map((data) => {
          if (isMatchSearchKeyword(data)) {
            return (
              <li className="card" key={data.id}>
                <SharedCard data={data} key={data.id} />
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </section>
  );
}

export default Cardlist;
