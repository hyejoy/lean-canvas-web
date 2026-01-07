import { v4 as uuidv4 } from "uuid";

export const NOTE_DEFAULT_COLOR = "bg-pink-100";
export const NOTE_COLORS = [
  {
    bg: NOTE_DEFAULT_COLOR,
    border: "border-pink-300",
  },
  {
    bg: "bg-blue-100",
    border: "border-blue-300",
  },
  {
    bg: "bg-green-100",
    border: "border-green-300",
  },
  {
    bg: "bg-yellow-100",
    border: "border-yellow-300",
  },
  {
    bg: "bg-purple-100",
    border: "border-purple-300",
  },
];
// 메인 데이터
export const dummyCard = [
  {
    cardId: "test1",
    title: "친환경 도시 농업 플랫폼",
    lastUpdatedAt: "2026-01-01",
    category: "농업",
  },
  {
    cardId: uuidv4(),
    title: "AI 기반 건강 관리 앱",
    lastUpdatedAt: "2026-01-01",
    category: "헬스케어",
  },
  {
    cardId: uuidv4(),
    title: "온디맨드 물류 서비스",
    lastUpdatedAt: "2026-01-02",
    category: "물류",
  },
  {
    cardId: uuidv4(),
    title: "VR 가상 여행 서비스",
    lastUpdatedAt: "2026-01-03",
    category: "여행",
  },
];

// 카테고리 데이터 (상단)
export const dummymainCardItems = [
  {
    cardItemId: "item-1",
    title: "1. 문제",
  },
  {
    cardItemId: "item-2",
    title: "4. 해결안",
  },
  {
    cardItemId: "item-3",
    title: "3. 가치제안",
  },
  {
    cardItemId: "item-4",
    title: "5. 경쟁우위",
  },
  {
    cardItemId: "item-5",
    title: "2. 목표 고객",
  },
  {
    cardItemId: "item-6",
    title: "기존 대안",
    isSubtitle: true,
  },
  {
    cardItemId: "item-7",
    title: "8. 핵심지표",
  },
  {
    cardItemId: "item-8",
    title: "상위개념",
    isSubtitle: true,
  },
  {
    cardItemId: "item-9",
    title: "9. 고객 경로",
  },
  {
    cardItemId: "item-10",
    title: "얼리 어답터",
    isSubtitle: true,
  },
];

// 카테고리 데이터 (하단)
export const dummyBottonCardItems = [
  {
    cardItemId: "item-11",
    title: "7. 비용 구조",
  },
  {
    cardItemId: "item-12",
    title: "8. 수익 흐름",
  },
];

// 노트데이터
export const dummyNotes = [
  {
    noteId: uuidv4(),
    cardId: "test1",
    cardItemId: "item-1",
    content: "사용자들이 문제를 명확히 인식하지 못함",
    done: false,
    color: NOTE_DEFAULT_COLOR,
  },
  {
    noteId: uuidv4(),
    cardId: "test1",
    cardItemId: "item-2",
    content: "요구사항이 문서로 정리되지 않음",
    done: false,
    color: NOTE_DEFAULT_COLOR,
  },
  {
    noteId: uuidv4(),
    cardId: "test1",
    cardItemId: "item-3",
    content: "기능 우선순위가 계속 변경됨",
    done: false,
    color: NOTE_DEFAULT_COLOR,
  },
  {
    noteId: uuidv4(),
    cardId: "test1",
    cardItemId: "item-4",
    content: "디자인과 개발 간 커뮤니케이션 부족",
    done: false,
    color: NOTE_DEFAULT_COLOR,
  },
  {
    noteId: uuidv4(),
    cardId: "test1",
    cardItemId: "item-5",
    content: "초기 기술 스택 선정이 부적절함",
    done: false,
    color: NOTE_DEFAULT_COLOR,
  },
  {
    noteId: uuidv4(),
    cardId: "test1",
    cardItemId: "item-6",
    content: "일정 산정이 현실적이지 않음",
    done: false,
    color: NOTE_DEFAULT_COLOR,
  },
  {
    noteId: uuidv4(),
    cardId: "test1",
    cardItemId: "item-7",
    content: "테스트 케이스가 충분하지 않음",
    done: false,
    color: NOTE_DEFAULT_COLOR,
  },
  {
    noteId: uuidv4(),
    cardId: "test1",
    cardItemId: "item-8",
    content: "에러 처리 기준이 명확하지 않음",
    done: false,
    color: NOTE_DEFAULT_COLOR,
  },
  {
    noteId: uuidv4(),
    cardId: "test1",
    cardItemId: "item-9",
    content: "상태 관리 구조가 복잡해짐",
    done: false,
    color: NOTE_DEFAULT_COLOR,
  },
  {
    noteId: uuidv4(),
    cardId: "test1",
    cardItemId: "item-10",
    content: "성능 최적화 고려가 부족함",
    done: false,
    color: NOTE_DEFAULT_COLOR,
  },
  {
    noteId: uuidv4(),
    cardId: "test1",
    cardItemId: "item-11",
    content: "배포 환경과 로컬 환경 차이로 오류 발생",
    done: false,
    color: NOTE_DEFAULT_COLOR,
  },
  {
    noteId: uuidv4(),
    cardId: "test1",
    cardItemId: "item-12",
    content: "유지보수성을 고려하지 않은 구조",
    done: false,
    color: NOTE_DEFAULT_COLOR,
  },
];
