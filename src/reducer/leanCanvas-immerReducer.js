const getTodayYYYYMMDD = () => {
  return new Date().toISOString().slice(0, 10);
};

export function leanCanvasReducer(draft, action) {
  switch (action.type) {
    case "added": {
      console.log("added Test");
      break;
    }
    case "edit": {
      const { cardId, title } = action;
      const targetCard = draft.find((item) => item.cardId === cardId);

      if (!targetCard) break;
      console.log("targetCard: ", targetCard);

      targetCard.title = title;
      targetCard.lastUpdateAt = getTodayYYYYMMDD();
      break;
    }
  }
}
