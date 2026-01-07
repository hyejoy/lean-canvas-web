import CanvasCard from "./CanvasCard";
import { dummymainCardItems, dummyBottonCardItems } from "../data/canvasData";
function LeanCanvas({ cardId }) {
  return (
    <div className="border-4 border-black">
      <div className="grid grid-cols-5">
        {dummymainCardItems.map((data) => (
          <CanvasCard
            key={data.title}
            cardId={cardId}
            cardItemId={data.cardItemId}
            title={data.title}
            isSubtitle={data.isSubtitle}
          />
        ))}
      </div>
      <div className="grid grid-cols-2">
        {dummyBottonCardItems.map((data) => (
          <CanvasCard
            key={data.title}
            cardId={cardId}
            cardItemId={data.cardItemId}
            title={data.title}
            isSubtitle={data.isSubtitle}
          />
        ))}
      </div>
    </div>
  );
}

export default LeanCanvas;
