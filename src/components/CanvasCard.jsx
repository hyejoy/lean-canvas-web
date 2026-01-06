import { FaPlus } from "react-icons/fa";

export default function CanvasCard({ title, memo, isSubtitle = false }) {
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
        <div className="space-y-3 min-h-32 p-3">{memo}</div>
      </div>
    </>
  );
}
