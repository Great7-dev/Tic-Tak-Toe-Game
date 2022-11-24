import styled from "styled-components";

export const SuccessStyle = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    width: 502px;
    height: 450px;
    background-color: #ffffff;
    background-image: url("https://i.pinimg.com/564x/08/10/2b/08102b26bf55213c755919a2da96cbf0.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .text{
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    color: yellow;
    text-align: center;
    margin-top: 100px;
  }

  .btn{
    margin: auto;
    margin-top: 20%;
    width: 80px;
    padding: 10px;
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 16px;
    text-align: center;
    border-style: none;
    cursor: pointer;
  }
  `;