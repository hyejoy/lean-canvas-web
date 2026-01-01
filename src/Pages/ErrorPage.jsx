import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  /**에러 정보 표시는 리엑트 라우터에서 제공하는 useRouteError hook사용 */
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>🔥 Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* 에러상태 메세지 표시 */}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
