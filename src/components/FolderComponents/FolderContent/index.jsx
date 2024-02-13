import Searchbar from "../../Searchbar";
import FolderFilterKeyword from "../FolderFilterKeywords";
import FolderCardlist from "../FolderCardlist";
import "./style.css";

function Main() {
  return (
    <main>
      <Searchbar />
      <FolderFilterKeyword />
      <FolderCardlist />
    </main>
  );
}

export default Main;
