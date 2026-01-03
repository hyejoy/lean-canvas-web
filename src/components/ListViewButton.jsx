import { FaList } from "react-icons/fa";

export default function ListButton({ gridState, onClick }) {
  const labelName = "List view";
  return (
    <>
      <button
        className={`
          ${!gridState ? "bg-blue-500 text-white" : "bg-gray-200"}
          p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 `}
        aria-label={labelName}
        onClick={onClick}
      >
        <FaList />
      </button>
    </>
  );
}
