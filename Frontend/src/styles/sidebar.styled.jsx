import styled from "styled-components";

export const StyledSidebar = styled.div`
    
    border: 2px solid red;
    width: fit-content;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 0 10px 20px;

    .logo{
        margin: 20px 0 40px 0;
    }

    .navLinks li{
       margin: 40px 0;
       list-style-type: none;
    }
`