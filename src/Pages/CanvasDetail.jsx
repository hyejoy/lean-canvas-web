import { useParams } from "react-router-dom";
import CanvasTitle from "../components/CanvasTitle";
import LeanCanvas from "../components/LeanCanvas";

export default function CanvasDetail() {
  const { cardId } = useParams();
  return (
    <>
      <CanvasTitle cardId={cardId} />
      <LeanCanvas cardId={cardId} />
    </>
  );
}
