import styled from "styled-components";

interface StyledDropDragContainerProps {
  drag: boolean;
}

export const StyledDropDragContainer = styled.div<StyledDropDragContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  background-color: ${(props) => (props.drag ? "#03e9f4" : "transparent")};
`;
