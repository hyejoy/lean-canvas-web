import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { dummyCard } from "../data/canvasData";
import { leanCanvasReducer } from "../reducer/leanCanvas-immerReducer";

export const CanvasDispatchContext = createContext(null);

export function CanvasProvider({ children }) {
  const [leanCanvas, dispatch] = useImmerReducer(leanCanvasReducer, dummyCard);

  return (
    <CanvasDispatchContext.Provider value={dispatch}>
      {children}
    </CanvasDispatchContext.Provider>
  );
}

export function useCanvasDispatch() {
  return useContext(CanvasDispatchContext);
}
