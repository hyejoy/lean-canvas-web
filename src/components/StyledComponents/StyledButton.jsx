import styled from "styled-components";
import BaseButton from "./BaseButton";

// 컴포넌트 확장할 때는 점으로 통해 접근하지 않아도 되고 바로
// ()를 쓴다음에 컴포넌트 이름 적어넣으면됨
const StyledButton = styled(BaseButton)`
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default StyledButton;
