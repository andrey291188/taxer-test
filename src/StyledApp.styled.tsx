import styled from "styled-components";

export const StyledAppContainer = styled.div`
  width: 80%;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 50px;

  .add-button {
    margin-bottom: 20px;
    font-size: 12px;
    border: 2px dashed #fff;
    border-radius: 5px;
    outline: none;
    background: none;
    padding: 10px 10px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: 3px;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1000ms;
    &:hover, &:focus {
      background: #03e9f4;
      box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 25px #03e9f4,
        0 0 35px #03e9f4;
    }
  }

  .container-cert {
    display: flex;
    gap: 30px;
  }

  .list-selected {
    width: 50%;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    padding: 30px;
    gap: 20px;
    overflow: auto;
  }
`;
