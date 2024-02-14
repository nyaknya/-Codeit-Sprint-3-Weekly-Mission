import { useEffect, useState } from "react";
import FolderCard from "../FolderCard";
import { getAllFolderLinks } from "../../../utils/api";
import "./style.css";

function FolderCardlist() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchFolderDate = async () => {
      try {
        const folderLinks = await getAllFolderLinks();
        setLinks(folderLinks.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFolderDate();
  }, []);

  return (
    <section className="container">
      <ul className="cardlist">
        {links &&
          links.map((links) => {
            return (
              <li className="card" key={links.id}>
                <FolderCard links={links} key={links.id} />
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default FolderCardlist;
