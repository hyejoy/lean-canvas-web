import { useState } from "react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { dummyCard } from "../data/canvasData";
import { useCanvasDispatch } from "../context/CanvasContext";

function CanvasTitle({ cardId }) {
  const dispatch = useCanvasDispatch();
  console.log(dispatch);
  const cardInfo = dummyCard.find((card) => card.cardId === cardId);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(cardInfo.title);
  const [editingTitle, setEditingTitle] = useState(title);
  // 이름 변경시 dispatch 사용하기
  const toggleEdit = () => {
    setEditing((prev) => !prev);
    if (editing) setTitle(editingTitle);
  };

  const handleEditingTitle = (e) => {
    setEditingTitle(e.target.value);
  };

  const onEditTitle = () => {
    dispatch({ action: "edit", cardId, title });
  };

  return (
    <div className="flex items-center justify-center mb-10">
      {editing ? (
        <div className="flex items-center">
          <input
            value={editingTitle}
            type="text"
            className="text-4xl font-bold text-center text-blue-600 bg-transparent border-b-2 border-blue-600 focus:outline-none"
            onChange={handleEditingTitle}
          />
          <button
            className="ml-2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label="Save title"
            onClick={toggleEdit}
          >
            <FaCheck onClick={onEditTitle} />
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center ">{title}</h1>
          <button
            className="ml-2 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            aria-label="Edit title"
            onClick={toggleEdit}
          >
            <FaEdit />
          </button>
        </>
      )}
    </div>
  );
}

export default CanvasTitle;
