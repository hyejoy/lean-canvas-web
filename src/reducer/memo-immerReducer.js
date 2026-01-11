import { v4 as uuidv4 } from "uuid";
import { NOTE_DEFAULT_COLOR } from "../data/canvasData";

export function memoReducer(draft, action) {
  switch (action.type) {
    case "added": {
      const {
        cardId,
        cardItemId,
        content = "",
        color = NOTE_DEFAULT_COLOR,
      } = action;
      draft.push({
        memoId: uuidv4(),
        cardId,
        cardItemId,
        content,
        done: false,
        color,
      });
      break;
    }
    case "edit": {
      const { memoId, content, done, color } = action;

      const memo = draft.find((memo) => memo.memoId === memoId);
      if (!memo) break;

      memo.content = content;
      memo.done = done;
      memo.color = color;
      break;
    }
    case "color": {
      const { memoId, color } = action;
      draft.find((memo) => memo.memoId === memoId).color = color;

      break;
    }
    case "done": {
      const { memoId, done } = action;
      draft.find((memo) => memo.memoId === memoId).done = done;
      break;
    }
    case "delete": {
      const { memoId } = action;
      draft.filter((memo) => memo.memoId !== memoId);
      break;
    }

    default: {
      throw Error("undefined Type");
    }
  }
}
