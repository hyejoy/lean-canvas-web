import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        {/* react-router에서 제공하는 컴포넌트로, 라우트 경로를 설정한 children 컴포넌트가 렌더링됨 */}
        <Outlet />
      </ul>
    </>
  );
}
