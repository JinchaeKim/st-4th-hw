import React from "react";
import styled from "styled-components";

// TODO: props로 받은 $active 에 따라 배경색이 blue 또는 gray가 되도록 해보세요.
// +전달받은 props의 형태 : props = {$active: true}
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$active ? "blue" : "gray")};
  /* background-color: ${({ $active }) =>
    $active ? "blue" : "gray"}; //구조분해할당 */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 20px;
`;

function Box({ active, onClick }) {
  console.log("active", active);
  return <StyledBox $active={active} onClick={onClick} />;
}

export default Box;
