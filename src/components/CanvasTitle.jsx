import { useRef, useState } from "react";
import { FaCheck, FaEdit } from "react-icons/fa";
import {
  useCanvasDispatch,
  useLeanCanvasContext,
} from "../context/CanvasContext";

function CanvasTitle({ cardId }) {
  const leanCanvas = useLeanCanvasContext();
  const dispatch = useCanvasDispatch();
  const cardInfo = leanCanvas.find((card) => card.cardId === cardId);
  const { title } = cardInfo;
  const [editing, setEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState(title);

  const titleRef = useRef();
  const handleSaveTitle = () => {
    console.log(title);

    if (!editingTitle) {
      alert("제목을 입력해주세요.");
      titleRef.current?.focus();
      setEditing(true);
      return;
    }
    dispatch({
      type: "edit",
      cardId,
      title: editingTitle,
    });
  };
  const toggleEdit = () => {
    setEditing((prev) => !prev);
  };

  const handleEditingTitle = (e) => {
    setEditingTitle(e.target.value);
  };

  return (
    <div className="flex items-center justify-center mb-10">
      {editing ? (
        <div className="flex items-center">
          <input
            ref={titleRef}
            value={editingTitle}
            type="text"
            className="text-4xl font-bold text-center text-blue-600 bg-transparent border-b-2 border-blue-600 focus:outline-none"
            onChange={handleEditingTitle}
          />
          <button
            className="ml-2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label="Save title"
            onClick={() => {
              toggleEdit();
              handleSaveTitle();
            }}
          >
            <FaCheck />
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
