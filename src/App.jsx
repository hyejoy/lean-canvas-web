import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./components/Main";
import { CanvasProvider } from "./context/CanvasContext";

export default function App() {
  return (
    <CanvasProvider>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </CanvasProvider>
  );
}
