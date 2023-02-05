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
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #aaa6a6;
    padding: 20px 0;
  }

 

  .img{
    width: 100px;
    height: 100px;
    border: 1px solid #dc2743;
    border-radius: 50%;
    margin: 0 20px 0 0;
  }

  .img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .flex2{
    margin-bottom: 40px;
  }

  

  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 40px 0 0 0;
  }

  .card{
    width: 100%;
    max-width: 100%;
    height: fit-content;
    transition: all 0.3s ease-out;
  }

  .card:hover{
    transform: scale(1.02);
  }

  

  .ownCardImage{
    width: 300px;
    height: 300px;
    max-width: 100%;
    border-radius: 3px;
    position: relative;
  }

  .ownCardImage img{
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }



`