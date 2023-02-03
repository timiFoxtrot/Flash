import styled from "styled-components";

export const StyledHome = styled.div`
  
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  background-color: ${(props) => props.dark === "dark" ? "#000" : "#fff"};
  color:${(props) => props.dark === "dark" ? "#fff" : "#000"};

  a{
        text-decoration: none;
    color:${(props) => props.dark === "dark" ? "#fff" : "#000"};
  }

  .card-roll{
    overflow-y: scroll;
  }


`
