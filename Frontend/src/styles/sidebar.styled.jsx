import styled from "styled-components";

export const StyledSidebar = styled.div`
    
    width: 250px;
    max-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 0 30px 10px;
    background-color: #000;
    color: rgba(250,250,250);
    position: relative;
    border-right: 1px solid #373636;

    &:after{
        position: fixed;
        content: " ";
        top: 0;
        right: 0;
        width: 100%;
        background-color: #000;
        opacity: 0.6;
        height: 100%;
        z-index: 5;
        display: none;
    }

    .logo{
        margin: 20px 0 40px 0;
        padding: 10px;
        cursor: pointer;
    }

    .navLinks li{
        display: flex;
        align-items: center;
       margin: 40px 0 0 0;
       list-style-type: none;
       cursor:pointer;
       padding: 10px;
       transition: all 0.3s ease;
    }

    .navLinks li:hover{
      background: #1a1a1a;
      border-radius: 24px;
    }

    .navLinks .link-icon{
        margin: 0 10px 0 0;
    }


     .moreBtn{
        cursor: pointer;
        display: flex;
        align-items: center;
       padding: 10px 20px 10px 10px;
       transition: all 0.3s ease;
     }

     .moreBtn:hover{
      background: #1a1a1a;
      border-radius: 24px;
     }

    .moreBtn .link-icon{
        margin: 0 10px 0 0;
    }

    .more{
        position: absolute;
        bottom: 70px;
        padding: 10px;
        display: none;
        background: #3f3e3e;
        border-radius: 6px;
        width: 90%;
        color: #fff;
        max-width: 100%;
    }

    .more li{
      cursor: pointer;
    }
    

    .more li{
        list-style-type: none;
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
    }

`