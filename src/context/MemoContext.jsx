import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { memoReducer } from "../reducer/memo-immerReducer";
import { dummyMemos } from "../data/canvasData";

export const MemoContext = createContext(null);
export const MemoDispatchContext = createContext(null);

export function MemoProvider({ children }) {
  const [memos, dispatch] = useImmerReducer(memoReducer, dummyMemos);

  return (
    <MemoContext.Provider value={memos}>
      <MemoDispatchContext.Provider value={dispatch}>
        {children}
      </MemoDispatchContext.Provider>
    </MemoContext.Provider>
  );
}

export function useMemoContext() {
  return useContext(MemoContext);
}

export function useMemoDispatchContext() {
  return useContext(MemoDispatchContext);
}
