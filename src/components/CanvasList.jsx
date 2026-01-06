import CanvasItem from "./CanvasItem";

export default function CanvasList({
  filterdData,
  isGridView,
  searchText,
  onDeleteItem,
}) {
  if (filterdData.length) {
    return (
      <div
        className={`grid gap-6 ${isGridView ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
      >
        {filterdData.map((item) => (
          <CanvasItem
            key={item.id}
            id={item.id}
            title={item.title}
            lastModified={item.lastModified}
            category={item.category}
            onDelete={(e) => {
              /**
               * preventDefault는 “무엇을 하지 말지”를 제어하고,
               * stopPropagation은 “누가 알지 못하게 할지”를 제어한다.
               */
              e.preventDefault(); // 기본동작을 막는 메서드 (Nav의 href이동 막기)
              onDeleteItem(item.id);
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="text-center py-10">
      <p className="text-xl text-gray-600">
        {searchText ? "검색 결과가 없습니다" : "목록이 없습니다"}
      </p>
    </div>
  );
}
