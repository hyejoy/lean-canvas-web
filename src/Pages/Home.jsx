import { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import GridButton from "../components/GridViewButton";
import ListButton from "../components/ListViewButton";
import LeanCanvasCard from "../components/LeanCanvasCard";
import EmptyBox from "../components/EmptyBox";

export const list = [
  {
    id: 0,
    title: "친환경 도시 농업 플랫폼",
    lastUpdatedAt: "2026-01-01",
    category: "농업",
  },
  {
    id: 1,
    title: "AI 기반 건강 관리 앱",
    lastUpdatedAt: "2026-01-01",
    category: "헬스케어",
  },
  {
    id: 2,
    title: "온디맨드 물류 서비스",
    lastUpdatedAt: "2026-01-02",
    category: "물류",
  },
  {
    id: 3,
    title: "VR 가상 여행 서비스",
    lastUpdatedAt: "2026-01-03",
    category: "여행",
  },
];

function Home() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [gridState, setGridState] = useState(true);

  const filteredList = useMemo(() => {
    if (!searchKeyword.trim()) return list;

    const keyword = searchKeyword.trim().toLowerCase();
    return list.filter((item) =>
      item.title.toLocaleLowerCase().includes(keyword)
    );
  }, [searchKeyword]);

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
      {!list.length && <EmptyBox text="목록이 없습니다." />}
      {list.length > 0 && searchKeyword.trim() && !filteredList.length && (
        <EmptyBox text="검색 결과가 없습니다." />
      )}
      <div
        className={`grid gap-6 grid-cols-1 ${gridState ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}
      >
        {filteredList?.map((item) => (
          <LeanCanvasCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
