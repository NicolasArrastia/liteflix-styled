import styled, { keyframes } from "styled-components";

const NotifAnim = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const NotifCont = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: relative;
    &::before{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 4px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: aqua;
    }
    @media (max-width: 768px){
        display: none;
    }
    animation: ${NotifAnim} 1s ease-out;
`;

export const NotifImg = styled.img`
    width: 100%;
`;