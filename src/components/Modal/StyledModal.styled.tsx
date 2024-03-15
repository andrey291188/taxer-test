import styled from "styled-components";

export const StyledBackdrop = styled.div`
  background-color: rgba(18, 20, 23, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center; 
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: none;
    outline: none;
    background: none;
    text-decoration: none;

    overflow: hidden;
    letter-spacing: 1;
  }
  `