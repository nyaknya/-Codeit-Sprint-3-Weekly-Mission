import SharedCard from "@/components/SharedComponents/SharedCard";
import styles from "@/styles/cardlist.module.css";

interface SharedCardlistProps {
  links: SharedFolderLinksData[];
  searchKeyword: string;
}

function SharedCardlist({ links, searchKeyword }: SharedCardlistProps) {
  const isMatchSearchKeyword = (link: SharedFolderLinksData) => {
    if (!searchKeyword) {
      return true;
    }

    if (!link) {
      return false;
    }

    const urlMatch = link.url
      ? link.url.toUpperCase().includes(searchKeyword.toUpperCase())
      : false;
    const titleMatch = link.title
      ? link.title.toUpperCase().includes(searchKeyword.toUpperCase())
      : false;
    const descriptionMatch = link.description
      ? link.description.toUpperCase().includes(searchKeyword.toUpperCase())
      : false;

    return urlMatch || titleMatch || descriptionMatch;
  };

  return (
    <section className="container">
      <ul className={styles.cardlist}>
        {links.map(
          (link: SharedFolderLinksData) =>
            isMatchSearchKeyword(link) && (
              <SharedCard link={link} key={link.id} />
            )
        )}
      </ul>
    </section>
  );
}

export default SharedCardlist;
