import { v4 as uuidv4 } from "uuid";

export function noteReducer(draft, action) {
  switch (action.type) {
    case "added": {
      const { cardId, cardItemId, content, selectedColor } = action;
      draft.push({
        id: uuidv4(),
        cardId,
        cardItemId,
        content,
        done: false,
        selectedColor,
      });
      break;
    }
    case "edit": {
      const { noteId, content, done } = action;

      const note = draft.find((note) => note.noteId === noteId);
      if (!note) break;

      note.content = content;
      note.done = done;
      break;
    }
    case "color": {
      const { noteId, selectedColor } = action;
      draft.find((note) => note.id === noteId).selectedColor = selectedColor;

      break;
    }
    case "done": {
      const { noteId, done } = action;
      draft.find((note) => note.id === noteId).done = done;
      break;
    }
    case "delete": {
      const { noteId } = action;
      draft.filter((note) => note.id !== noteId);
      break;
    }

    default: {
      throw Error("undefined Type");
    }
  }
}
