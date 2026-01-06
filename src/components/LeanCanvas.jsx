import CanvasCard from "./CanvasCard";
function LeanCanvas() {
  const mainCanvasSections = [
    { title: "1. 문제" },
    { title: "4. 해결안" },
    { title: "3. 가치제안" },
    { title: "5. 경쟁우위" },
    { title: "2. 목표 고객" },
    { title: "기존 대안", isSubtitle: true },
    { title: "8. 핵심지표" },
    { title: "상위개념", isSubtitle: true },
    { title: "9. 고객 경로" },
    { title: "얼리 어답터" },
  ];
  const bottomCanvasSections = [
    { title: "7. 비용 구조" },
    { title: "8. 수익 흐름" },
  ];

  return (
    <div className="border-4 border-black">
      <div className="grid grid-cols-5">
        {mainCanvasSections.map((data) => (
          <CanvasCard
            key={data.title}
            title={data.title}
            isSubtitle={data.isSubtitle}
          />
        ))}
      </div>
      <div className="grid grid-cols-2">
        {bottomCanvasSections.map((data) => (
          <CanvasCard
            key={data.title}
            title={data.title}
            isSubtitle={data.isSubtitle}
          />
        ))}
      </div>
    </div>
  );
}

export default LeanCanvas;
