import styled from "styled-components";

export const StyledOwnMemoryPage = styled.section`
   
   width: 100%;
   overflow-y: scroll;
.container{ 
  width: 90%;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  }

  header{
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-bottom: 1px solid red;
    padding: 20px 0;
  }

  .img{
    width: 200px;
    height: 200px;
    border: 1px solid green;
    border-radius: 50%;
    margin: 0 20px 0 0;
    background-color: orange;
  }

  .flex2{
    border: 1px solid red;
    margin-bottom: 40px;
  }

  .flex2 span{
    margin-right: 60px;
  }

  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 40px 0 0 0;
  }

  .ownCardImage{
    width: 100%;
    height: 400px;
    max-width: 100%;
    border: 1px solid #000;
    border-radius: 3px;
  }
`