import styled, { keyframes } from 'styled-components'

const MenuAnim = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const MenuCont = styled.div`
    cursor: pointer;
    padding: 3px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 35px;
    height: 35px;
    > :nth-child(3){
        width: 63%;
        align-self: flex-end;
    }
    @media (max-width: 768px){
        display: none;
    }
    animation: ${MenuAnim} 2s ease-out;
`;

export const MenuBar = styled.div`
    height: 2px;
    background-color: #fff;
`;