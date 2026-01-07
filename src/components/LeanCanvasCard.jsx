import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LeanCanvasCard({ item }) {
  const { cardId, title, category, lastUpdatedAt } = item;

  return (
    <>
      <Link
        key={cardId}
        className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
        to={`/canvases/${cardId}`}
      >
        <div className="absolute justify-end mx-1 my-2">
          <FaTrash className="text-red-500" />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mb-4">{lastUpdatedAt}</p>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            {category}
          </span>
        </div>
      </Link>
    </>
  );
}
