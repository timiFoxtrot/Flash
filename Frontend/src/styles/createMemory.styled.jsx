import styled from "styled-components";

export const StyledCreateMemory = styled.div`

 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 border: 1px solid #000;
 background: #1a1a1a;
 width: 400px;
 max-width: 100%;
 height: fit-content;
 padding: 20px;
 font-size: 16px;
 border-radius: 6px;
 z-index: 20;
 display: none;

 form{
    display: flex;
    flex-direction: column;
 }

 form textarea{
    width: 100%;
    max-width: 100%;
    border-radius: 6px;
 }

 form .field label{
    display: block;
 }

 form .field{
    margin: 10px 0;
    border-radius: 6px;
 }

  form .field input{
    width: 100%;
    max-width: 100%;
    padding: 0.6rem 6px;
    outline: none;
    margin-top: 3px;
    font-size: 16px;
    border-radius: 6px;
 }

  form button{
    padding: 0.6rem 6px;
    border: none;
    outline: none;
    border-radius: 6px;
    background-color: #0101f6;
    color:#fff;
    cursor: pointer;
  }



`