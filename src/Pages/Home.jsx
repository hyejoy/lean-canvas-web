import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link to={`/canvases/1`}>1번 게시글</Link>
        </li>
        <li>
          {/* 쿼리스트링 */}
          <Link to={`/canvases/2?keyword=canvas`}>2번 게시글</Link>
        </li>
        <li>
          <Link to={`/canvases/3#helloWorld!`}>3번 게시글</Link>
        </li>
      </ul>
    </>
  );
}
