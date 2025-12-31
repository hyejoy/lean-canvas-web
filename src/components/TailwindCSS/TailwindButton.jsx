export default function TailwindButton({ children, onClick }) {
  return (
    <>
      {/* py-2 : 상하 여백 2 */}
      {/* px-4 : 좌우 여백 4 */}
      {/* rounded-full : border-radius 적용 */}
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        {children}
      </button>
    </>
  );
}
