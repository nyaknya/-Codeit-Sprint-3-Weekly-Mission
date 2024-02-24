import Card from "@/components/Card";
import styles from "./style.module.css";

interface CardlistProps {
  links: FolderLinksData[];
  searchKeyword: string;
}

function Cardlist({ links, searchKeyword }: CardlistProps) {
  const isMatchSearchKeyword = (link: FolderLinksData) => {
    if (!searchKeyword) {
      return true;
    }

    if (!link) {
      return false;
    }

    const urlMatch = link.url
      .toUpperCase()
      .includes(searchKeyword.toUpperCase());
    const titleMatch = link.title
      .toUpperCase()
      .includes(searchKeyword.toUpperCase());
    const descriptionMatch = link.description
      .toUpperCase()
      .includes(searchKeyword.toUpperCase());

    return urlMatch || titleMatch || descriptionMatch;
  };

  return (
    <section className="container">
      <ul className={styles.cardlist}>
        {links.map(
          (link: FolderLinksData) =>
            isMatchSearchKeyword(link) && <Card link={link} key={link.id} />
        )}
      </ul>
    </section>
  );
}

export default Cardlist;
