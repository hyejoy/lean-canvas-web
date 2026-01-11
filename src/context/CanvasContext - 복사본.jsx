import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { dummyCard } from "../data/canvasData";
import { leanCanvasReducer } from "../reducer/leanCanvas-immerReducer";

export const LeanCanvasContext = createContext(null); // home화면 list data
export const CanvasDispatchContext = createContext(null);

export function CanvasProvider({ children }) {
  const [leanCanvas, dispatch] = useImmerReducer(leanCanvasReducer, dummyCard);

  return (
    <LeanCanvasContext.Provider value={leanCanvas}>
      <CanvasDispatchContext.Provider value={dispatch}>
        {children}
      </CanvasDispatchContext.Provider>
    </LeanCanvasContext.Provider>
  );
}
export function useLeanCanvasContext() {
  return useContext(LeanCanvasContext);
}

export function useCanvasDispatch() {
  return useContext(CanvasDispatchContext);
}
