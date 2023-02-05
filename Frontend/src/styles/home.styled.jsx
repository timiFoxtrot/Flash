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
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .headline{
    width: 100%;
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 24px;
     background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
   background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
   background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    padding: 3px;
    border-radius: 0 0 50% 50%;
    font-style: oblique;
    margin-bottom: 60px;
  }

`
