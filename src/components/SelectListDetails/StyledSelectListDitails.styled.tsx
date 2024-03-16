import styled from "styled-components";

export const StyledSelectListDetailsContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px dashed #fff;
  border-radius: 15px;
  width: 450px;
  padding: 5px 10px;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1000ms;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 25px #03e9f4,
      0 0 35px #03e9f4;
  }

  .deleted-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: none;
    outline: none;
    background: none;
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
    letter-spacing: 1;
    border: none;
    border-radius: 50%;

    &:hover {
      background: #03e9f4;
      box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 35px #03e9f4,
        0 0 50px #03e9f4;
    }
  }
`;
