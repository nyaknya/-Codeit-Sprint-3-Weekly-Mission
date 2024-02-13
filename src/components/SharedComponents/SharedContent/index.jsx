import Searchbar from "../../Searchbar";
import SharedCardlist from "../SharedCardlist";
import "./style.css";

function SharedContent() {
  return (
    <main>
      <Searchbar />
      <SharedCardlist />
    </main>
  );
}

export default SharedContent;
