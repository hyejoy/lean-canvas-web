import { useState } from "react";
import SearchBar from "../components/SearchBar";
import GridButton from "../components/GridViewButton";
import ListButton from "../components/ListViewButton";
import LeanCanvasCard from "../components/LeanCanvasCard";
import EmptyBox from "../components/EmptyBox";
import { useLeanCanvasContext } from "../context/CanvasContext";

function Home() {
  const leanCanvas = useLeanCanvasContext();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [gridState, setGridState] = useState(true);

  const filteredList = () => {
    if (!searchKeyword.trim()) return leanCanvas;
    const keyword = searchKeyword.trim().toLowerCase();
    return leanCanvas.filter((item) =>
      item.title.toLocaleLowerCase().includes(keyword),
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar onKeywordChange={setSearchKeyword} />
        <div className="flex space-x-2">
          <GridButton
            gridState={gridState}
            onClick={() => {
              setGridState(true);
            }}
          />
          <ListButton
            gridState={gridState}
            onClick={() => setGridState(false)}
          />
        </div>
      </div>
      {!leanCanvas.length && <EmptyBox text="목록이 없습니다." />}
      {leanCanvas.length > 0 &&
        searchKeyword.trim() &&
        !filteredList().length && <EmptyBox text="검색 결과가 없습니다." />}
      <div
        className={`grid gap-6 grid-cols-1 ${gridState ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}
      >
        {filteredList()?.map((item) => (
          <LeanCanvasCard key={item.cardId} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
