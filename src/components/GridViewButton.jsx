import { FaTh } from "react-icons/fa";

export default function GridButton({ gridState, onClick }) {
  return (
    //bg-blue-500 text-white
    <>
      <button
        className={`
          ${gridState ? "bg-blue-500 text-white" : "bg-gray-200"}
          p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 `}
        aria-label="Grid view"
        onClick={onClick}
      >
        <FaTh />
      </button>
    </>
  );
}
