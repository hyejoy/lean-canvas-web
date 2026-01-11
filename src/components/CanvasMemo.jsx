import clsx from "clsx";
import { FaBackspace, FaCheck } from "react-icons/fa";
import { NOTE_COLORS } from "../data/canvasData";
import { useState } from "react";
import { useMemoContext, useMemoDispatchContext } from "../context/MemoContext";

export default function CanvasMemo({ memoInfo }) {
  const { color, content, memoId, done } = memoInfo;
  const dispatch = useMemoDispatchContext();

  const [hasDone, setHasDone] = useState(done);
  const [selectedColor, setSelectedColor] = useState(color);
  const [textContent, setTextContent] = useState(content);

  const handletextContent = (e) => {
    setTextContent(e.target.value);
  };

  const [checkMode, setCheckMode] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleCheckMode = () => {
    setCheckMode(false);
    setHasDone(true);
  };

  const handleSaveMemo = () => {
    console.log("adfafad");
    dispatch({
      type: "edit",
      memoId,
      content: textContent,
      done: hasDone,
      color: selectedColor,
    });
  };
  const handleDeleteNote = () => {
    const dispatch = "FaBackSpace onClick dispatch";
    console.log(dispatch);
  };

  return (
    <>
      <div className={clsx("relative h-40", selectedColor)}>
        <div
          className={clsx(
            "flex absolute top-1 right-1 transition-opacity",
            isFocused ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <button className="bg-red-200" onClick={handleSaveMemo}>
            저장
          </button>
          {/* done 으로 변경 */}
          {checkMode ? (
            <FaCheck
              onMouseDown={(e) => {
                e.preventDefault();
                handleCheckMode();
              }}
              onClick={handleSaveMemo}
            />
          ) : (
            <FaBackspace />
          )}
        </div>

        <textarea
          value={textContent}
          onChange={handletextContent}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={clsx(
            selectedColor,
            "mt-5",
            "px-1 py-1 font-sans text-sm font-normal",
            " w-full min-h-28 resize-none",
            "border border-transparent",
          )}
        />
        <div className="flex">
          {/* selected color */}
          {NOTE_COLORS.map((color) => (
            <div
              key={`${color.bg}-${memoId}`}
              onMouseDown={(e) => {
                e.preventDefault();
                setSelectedColor(color.bg);
              }}
              className={clsx(
                isFocused ? "opacity-100" : "opacity-0 pointer-events-none",
                "h-4 w-4 mr-1 rounded-full cursor-pointer border-2",
                color.bg,
                selectedColor === color.bg
                  ? color.border
                  : "border-transparent",
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
}
