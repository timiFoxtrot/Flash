import styled from "styled-components";

export const StyledHome = styled.div`
  
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  background-color: ${(props) => props.dark === "dark" ? "#fff" : "#000"};
  color:${(props) => props.dark === "dark" ? "#000" : "#fff"};


  .card-roll{
    overflow-y: scroll;
  }


`
