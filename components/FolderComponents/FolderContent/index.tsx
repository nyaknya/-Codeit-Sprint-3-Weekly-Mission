import { useEffect, useState } from "react";
import getFolderFilterKeywords from "@/api/getFolderFilterKeywords";
import Searchbar from "@/components/Searchbar";
import FolderCardlist from "@/components/FolderComponents/FolderCardlist";
import SearchKeywordResult from "@/components/SearchKeywordResult";
import FolderFilterKeywords from "@/components/FolderComponents/FolderFilterKeywords";

interface FolderContentProps {
  links: FolderLinksData[];
}

function FolderContent({ links }: FolderContentProps) {
  const [keywords, setKeywords] = useState({ data: [] });
  const [selectedKeyword, setSelectedKeyword] = useState("전체");
  const [searchKeyword, setSearchKeyword] = useState("");

  const loadFolderKeywords = async () => {
    try {
      const folderFilterKeywords = await getFolderFilterKeywords();
      setKeywords(folderFilterKeywords);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFolderKeywords();
  }, []);

  const handleAllKeywordsClick = (e: MouseEvent) => {
    if (e.target === null) {
      return;
    }
    const allClickedKeyword = e.target.innerText;
    setSelectedKeyword(allClickedKeyword);
  };

  const handleKeywordsClick = (keyword: FolderFilterKeywordData) => {
    setSelectedKeyword(keyword);
  };

  const handleSearchKeywordChange = (changeSearchKeyword: string) => {
    setSearchKeyword(changeSearchKeyword);
  };

  return (
    <main>
      <Searchbar handleSearchKeywordChange={handleSearchKeywordChange} />
      {searchKeyword && <SearchKeywordResult searchKeyword={searchKeyword} />}
      <FolderFilterKeywords
        keywords={keywords}
        selectedKeyword={selectedKeyword}
        handleAllKeywordsClick={handleAllKeywordsClick}
        handleKeywordsClick={handleKeywordsClick}
      />
      <FolderCardlist
        links={links}
        selectedKeyword={selectedKeyword}
        searchKeyword={searchKeyword}
      />
    </main>
  );
}

export default FolderContent;
