import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./components/Main";
import { CanvasProvider } from "./context/CanvasContext";
import { MemoProvider } from "./context/MemoContext";

export default function App() {
  return (
    <CanvasProvider>
      <MemoProvider>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </MemoProvider>
    </CanvasProvider>
  );
}
