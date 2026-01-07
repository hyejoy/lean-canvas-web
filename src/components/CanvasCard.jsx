import { FaPlus } from "react-icons/fa";
import { dummyNotes } from "../data/canvasData";
import CanvasMemo from "./CanvasMemo";

export default function CanvasCard({
  cardId,
  cardItemId,
  title,
  isSubtitle = false,
}) {
  const memoList = dummyNotes.filter(
    (note) => note.cardId === cardId && note.cardItemId === cardItemId
  );

  // console.log("props: ", cardId, cardItemId, title, isSubtitle);
  // console.log("📝📝memoList: ", memoList);

  return (
    <>
      <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
        <div
          className={`flex items-start justify-between px-3 py-2 ${!isSubtitle ? "bg-gray-100 border-b border-b-gray-300" : ""} `}
        >
          <h3 className="font-bold">{title}</h3>
          <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
            <FaPlus />
          </button>
        </div>
        {/* memoList */}
        <div className=" space-y-3 min-h-32 p-3">
          {memoList.map((memo) => (
            <CanvasMemo
              key={memo.noteId}
              content={memo.content}
              backgroundColor={memo.color}
            />
          ))}
        </div>
      </div>
    </>
  );
}
