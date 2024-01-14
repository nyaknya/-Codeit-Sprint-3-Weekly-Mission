import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getFolderInfo } from "../../../utils/api";
import "./Cardlist.css";

function Cardlist() {
  const [card, setCard] = useState([]);
  const [createdAt, setCreatedAt] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchFolderDate = async () => {
      try {
        const data = await getFolderInfo();

        setCard(data.folder.links);
        setCreatedAt(data.folder.links.createdAt);
        setUrl(data.folder.links.url);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFolderDate();
  });

  return (
    <section className="container">
      <ul className="cardlist">
        {card.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </ul>
    </section>
  );
}

export default Cardlist;
