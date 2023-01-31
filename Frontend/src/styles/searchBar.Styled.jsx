import styled from "styled-components";

export const StyledSearchBarDestop = styled.div`
  

  position: fixed;
  width: 400px;
  top: 0;
  left: 0;
  max-width: 100%;
  height: 100%;
  z-index: 10;
  background-color: #000;
  padding: 20px;
  display: none;

  .top-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search-box{
    margin-top: 40px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
     background-color: #2f2e2e;
    width: 100%;
    max-width: 100%;
    padding: 6px;
    margin-bottom: 40px;
    color: #fff;
    border-radius: 6px;
  }

  .search-box .smallSearchIcon{
    position: absolute;
    color: #fff;
    margin-right: 20px;
  }

  .search-box input{
    width: 400px;
    max-width: 100%;
    padding: 10px 0 10px 5px;
    outline: none;
    margin-left: 20px;
    border: none;
    color: #fff;
    background: transparent;
  }

  .display-box{
    margin-top: 30px;
    list-style: none;
  }

   .display-box span{
    border: 1px solid red;
    margin-right: 8px;
  }

  .display-box li div{
    display: flex;
  }

  .display-box .avatar-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


`