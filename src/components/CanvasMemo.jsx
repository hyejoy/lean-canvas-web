import clsx from "clsx";
import { FaBackspace, FaCheck } from "react-icons/fa";
import { NOTE_COLORS, NOTE_DEFAULT_COLOR } from "../data/canvasData";
import { useState } from "react";

export default function CanvasMemo({
  content,
  backgroundColor = NOTE_DEFAULT_COLOR,
}) {
  const [selectedColor, setSelectedColor] = useState(backgroundColor);
  const [textContext, setTextContext] = useState(content);

  const handleTextContext = (e) => {
    setTextContext(e.target.value);
  };
  const [checkMode, setCheckMode] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const handleCheckMode = () => {
    setCheckMode(false);
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
            "absolute top-1 right-1 transition-opacity",
            isFocused ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          {/* done 으로 변경 */}
          {checkMode ? (
            <FaCheck
              onMouseDown={(e) => {
                e.preventDefault();
                handleCheckMode();
              }}
            />
          ) : (
            <FaBackspace />
          )}
        </div>

        <textarea
          value={textContext}
          onChange={handleTextContext}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={clsx(
            selectedColor,
            "mt-5",
            "px-1 py-1 font-sans text-sm font-normal",
            " w-full min-h-28 resize-none",
            "border border-transparent"
          )}
        />
        <div className="flex">
          {/* selected color */}
          {NOTE_COLORS.map((color) => (
            <div
              key={color.bg}
              onClick={() => setSelectedColor(color.bg)}
              className={clsx(
                "h-4 w-4 mr-1 rounded-full cursor-pointer border-2",
                color.bg,
                selectedColor === color.bg ? color.border : "border-transparent"
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
}
