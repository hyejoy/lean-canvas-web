import { FaPlus } from "react-icons/fa";
import CanvasMemo from "./CanvasMemo";
import { useMemoContext, useMemoDispatchContext } from "../context/MemoContext";

export default function CanvasCard({
  cardId,
  cardItemId,
  title,
  isSubtitle = false,
}) {
  const memos = useMemoContext();
  const dispatch = useMemoDispatchContext();

  const filteredMemos = memos.filter(
    (memo) => memo.cardId === cardId && memo.cardItemId === cardItemId,
  );

  const handleAddMemo = () => {
    dispatch({
      type: "added",
      cardId,
      cardItemId,
    });
  };

  // console.log("props: ", cardId, cardItemId, title, isSubtitle);
  // console.log("📝📝memoList: ", memoList);

  return (
    <>
      <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
        <div
          className={`flex items-start justify-between px-3 py-2 ${!isSubtitle ? "bg-gray-100 border-b border-b-gray-300" : ""} `}
        >
          <h3 className="font-bold">{title}</h3>
          <button
            onClick={handleAddMemo}
            className="bg-blue-400  text-white p-1.5 text-xs rounded-md"
          >
            <FaPlus />
          </button>
        </div>
        {/* memoList */}
        <div className=" space-y-3 min-h-32 p-3">
          {filteredMemos?.map((memo) => (
            <CanvasMemo key={memo.memoId} memoInfo={memo} />
          ))}
        </div>
      </div>
    </>
  );
}
