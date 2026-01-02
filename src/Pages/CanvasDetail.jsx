import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function CanvasDetail() {
  /**
   * 동적 param을 가져오는 방법은
   * 리액트 라우터에서 제공하는 useParams 훅을 이용하면된다.
   *
   * QueryString을 가져오는 방법은
   * 리액트 라우터에서 제공하는 useSearchParams 훅을 이용하면 된다.
   *
   * Hash(#)값을 가져오는 방법은
   * 리액트 라우터에서 제공하는 useLocation 훅을 이용하면 된다.
   */

  const { id } = useParams();

  const [searchParams] = useSearchParams();
  // get함수이용하여 쿼리스트링 키값을 넣으면 값인(canvas) 출력됨
  console.log("searchParams: ", searchParams.get("keyword"));

  const location = useLocation();
  // #helloWorld! 출력
  console.log("Hash: ", location.hash);

  // 해시값뿐만 아니라 현재 path, querystring, 현재 위치에 대한 고유 키, state정보까지 확인가능
  // state정보는 링크 컴포넌트의 state 또는 navigate 메서드에 의해 생성된 상태값으로 보면됨
  console.log("Location: ", location);

  return (
    <>
      <p>id: {id}</p>
      <p>keyword: {searchParams.get("keyword")}</p>
      <p>hash: {location.hash}</p>
      <h1>CanvasDetail Component</h1>
    </>
  );
}
