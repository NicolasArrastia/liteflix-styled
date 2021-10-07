import styled from "styled-components";

export const HeaderCont = styled.header`
    position: relative;
    padding: 20px 5% 0;
    z-index: 10000;
    *{
        z-index: 10000;
    }
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > :nth-child(2){
        margin-left: 20px;
        margin-right: auto;
    }
    > :is(:nth-child(3),:nth-child(4),:nth-child(5)){
        margin-left: 20px;
    }
    @media (max-width: 576px){
        justify-content: space-between;
        > :nth-child(2){
            margin: 0;
            order: -1;
        }
    }
`;

